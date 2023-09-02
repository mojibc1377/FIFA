/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {json, useParams } from 'react-router-dom';
import { request } from '../services/requests';
import {IoMdSend} from "react-icons/io"
import axios from 'axios';
import {AiOutlineLoading} from "react-icons/ai"

function ChallengeDetailPage() {
  const { challengeId } = useParams();
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState(null);
  const [commentsList, setCommentsList] = useState([]); // State to store the list of comments
  const [confirmationLoading, setConfirmationLoading] = useState(false); //false
  const [sendLoading, setSendLoading] = useState(false)
  const [saveWinner , setSaveWinner] = useState(false)



  const handleCommentChange = (e) => {

    setComment(e.target.value);
  };

  const handlePhotoChange = (e) => {

    setPhoto(e.target.files[0]);
  };
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');

  const handleSubmitComment = async(e) => {


    e.preventDefault();

    console.log('Comment:', comment);

    setCommentsList([...commentsList, comment]); // Add the new comment to the comments list

    setComment('');

    const timestamp = moment().toISOString(); // Generate the timestamp using moment

    const challenge = await request.get(`/api/challenge/${challengeId}`);
    
    const commentData = {

      commenterId : (JSON.parse(localStorage.getItem('user'))._id) === challenge.data.challengerId ? challenge.data.accepterId : challenge.data.challengerId ,
      challengeId,
      receiverId : (JSON.parse(localStorage.getItem('user'))._id) === challenge.data.challengerId ? challenge.data.challengerId : challenge.data.accepterId ,
      comment,
      createdAt : timestamp

    };

    try {

      request.post('/api/challenges/comments/new', commentData);
      

    } catch (error) {

      console.error('Error creating a challenge:', error);

      alert('An error occurred while posting the challenge');

  };}

  const handleUploadPhoto = async() => {
    if (!photo) {
      console.log('No photo selected.');
      return;
    }
  
    // Create a new FormData object to send the photo to the API
    const formData = new FormData();
    formData.append('image', photo);
    setConfirmationLoading(true)
  
    try {
      // Send the photo to imgbb API
      const response = await axios.post(
        'https://api.imgbb.com/1/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          params: {
            key: 'cdf7bbd183c087fafee94b6ff477dcb8' // Your imgbb API key
          }
        }
      );
      const uploadedImageUrl = response.data.data.url;
      setUploadedImageUrl(uploadedImageUrl);
  
      // Call your backend API to save the URL to the challenge with matching challengeId
      await request.post(`/api/challenges/${challengeId}/update`, {
        resultPhoto: [`user ${(JSON.parse(localStorage.getItem('user'))._id)} uploaded the result photo : ${uploadedImageUrl}`] 
      });
      setConfirmationLoading(false)
      alert('Image uploaded successfully!');
      setUploadedImageUrl('')
    } catch (error) {
      console.error('Error uploading image:', error);
      console.log(error)
    }
  };
  const [selectedWinner, setSelectedWinner] = useState(null);


  useEffect(() => {
    // Fetch comments for the specific challenge based on the challengeId
    const fetchComments = async () => {
      try {
        const response = await request.get(`/api/challenges/comments/${challengeId}`);
        setCommentsList(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [commentsList]);
const handleersal= async() =>{
  try {
    setSendLoading(true)

    const challenge = await request.get(`/api/challenge/${challengeId}`);
      if( selectedWinner === "me"){
        var winner = (JSON.parse(localStorage.getItem('user'))._id)
        setSendLoading(false)

      }
      else if(selectedWinner === "opponent") {
      if((JSON.parse(localStorage.getItem('user'))._id) === challenge.data.challengerId ){
        winner = challenge.data.accepterId
        setSendLoading(false)

      }
  else{
    winner = challenge.data.challengerId
    setSendLoading(false)
  }
}
await request.post(`/api/challenges/${challengeId}/update`, {
  winner: [`user ${(JSON.parse(localStorage.getItem('user'))._id)} reported the winner is : ${winner}`] 
});
    
  } catch (error) {
    console.error('Error submitting winner:', error);
  }
}
  



  return (
    <div className="comment pt-20 mb-10">
      <div
        className="challenge-detail block pt-20 bg-black bg-opacity-50 backdrop-blur-sm text-white rounded-md p-6 shadow-lg max-w-md mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">اطلاعات چالش</h2>
        
        <div className="mt-6 flex w-full flex-col gap-7">
          <h3 className="text-xl font-bold mb-2">پیام ها</h3>
          {commentsList.length === 0 ? (
            <>
            <p>هنوز پیامی ندارید</p>
            <form onSubmit={handleSubmitComment} className="comment-form flex flex-row bg-opacity-20 bg-gray-100 bg-blur align-middle text-white rounded-xl">
  <input
    className="w-full bg-gray-500 text-xl py-3 px-5 rounded-xl focus:outline-none"
    placeholder="پیام خود را وارد کنید"
    value={comment}
    onChange={handleCommentChange}
  />
  <button type="submit" className="">
    <IoMdSend className='sendBtn text-3xl text-blue-600'/>
  </button>
</form>
</>
          ) : (
            <ul className="list-disc flex flex-col gap-3 justify-center chat-list p-3">
                
  {commentsList.map((comment, index, commenterId) => (
    
    <li key={index} className={`message ${(JSON.parse(localStorage.getItem('user'))._id === comment.commenterId )? "reciever bg-gray-500 text-gray-300 flex-row self-start" : "sender bg-gray-700 flex-row-reverse text-white self-end"} list-none flex gap-5 rounded-2xl px-4 text-lg py-2 max-w-xs break-words whitespace-normal`}>
      <div className={`comment relative max-w-full text-left`}>{comment.comment}</div>
        <div className={`timestamp text-gray-200 opacity-70 text-xs self-end font-thin italic `}>
            {moment(comment.createdAt).format("HH:mm")}
        </div>
    </li>
    
  ))}
  <form onSubmit={handleSubmitComment} className="comment-form flex flex-row bg-opacity-20 mt-2 bg-gray-100 bg-blur align-middle text-white justify-around rounded-2xl">
  <input
    className="w-full bg-gray-500 text-xl py-2 px-3 rounded-2xl focus:border-none"
    placeholder="پیام خود را وارد کنید"
    value={comment}
    onChange={handleCommentChange}
  />
  <button type="submit" className="">
    <IoMdSend className='sendBtn text-2xl self-center mx-3 text-center text-blue-600'/>
  </button>
</form>

</ul>

          )}
<hr/>
          <div className='result-section '>
            <p className='text-3xl font-bold'>اعلام نتیجه</p>
            <br/>
            <p className='text-xl'>انتخاب برنده</p>
          <div className="winner-selection my-4 flex align-middle justify-center gap-4">
          

  <button
    onClick={() => setSelectedWinner("me")}
    className={`winner-button ${selectedWinner === "me" ? "bg-blue-500 bg-opacity-60" : "bg-gray-200 bg-opacity-20"} py-2 px-4 rounded-full transition-colors duration-300`}
  >
    من
  </button>
  <button
    onClick={() => setSelectedWinner("opponent")}
    className={`winner-button ${selectedWinner === "opponent" ? "bg-red-500 bg-opacity-60" : "bg-gray-200 bg-opacity-20"} py-2 px-4 rounded-full transition-colors duration-300`}
  >
    حریف
  </button>
  <button className='ersal px-4 py-1 bg-blue-500 bg-opacity-30 rounded-lg'
  onClick={handleersal}
  disabled = {sendLoading}

  >{sendLoading ? <AiOutlineLoading className=' animate-spin' /> :'ثبت برنده'}

  </button>
</div>

          </div>
           </div>
          <h3 className='text-xl mt-3 '>ارسال عکس نتیجه</h3>
        <input
          type="file"
          onChange={handlePhotoChange}
          className="uploadField border-1 border-white rounded 2xl text-white mt-4 w-2/3"
          disabled={sendLoading}

        />
        <br/>
        <button
          onClick={handleUploadPhoto}
          className="mt-4 py-2 px-6 bg-blue-500 hover:bg-blue-500 rounded-md felx w-max flex-row text-sm text-white"
          disabled={confirmationLoading}

        >
          {confirmationLoading ? <AiOutlineLoading className="loading mx-3 text-white animate-spin " /> : "اپلود عکس"}
        </button>
       
      </div>
    </div>
  );
}

export default ChallengeDetailPage;
