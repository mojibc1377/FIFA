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
      
      console.log('New comment sent:', commentData);

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
        resultPhoto: uploadedImageUrl
      });
      setConfirmationLoading(false)
      alert('Image uploaded successfully!');
      setUploadedImageUrl('')
    } catch (error) {
      console.error('Error uploading image:', error);
      console.log(error)
    }
  };
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

  return (
    <div className="comment pt-20">
      <div
        className="challenge-detail block pt-20 bg-black bg-opacity-20 backdrop-blur-md text-white rounded-md p-6 shadow-lg max-w-md mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">اطلاعات چالش</h2>
        
        <div className="mt-6 flex w-full flex-col gap-7">
          <h3 className="text-xl font-bold mb-2">پیام ها</h3>
          {commentsList.length === 0 ? (
            <>
            <p>هنوز پیامی ندارید</p>
            <form onSubmit={handleSubmitComment} className="comment-form flex flex-row bg-opacity-20 bg-gray-100 bg-blur align-middle text-white rounded-xl">
  <input
    className="w-full bg-gray-500 text-2xl py-3 px-5 rounded-xl focus:outline-none"
    placeholder="Enter your message..."
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
        <div className={`timestamp text-gray-100 opacity-70 text-xs self-end font-thin italic animate-pulse`}>
            {moment(comment.createdAt).format("HH:mm")}
        </div>
    </li>
    
  ))}
  <form onSubmit={handleSubmitComment} className="comment-form flex flex-row bg-opacity-20 mt-2 bg-gray-100 bg-blur align-middle text-white justify-around rounded-2xl">
  <input
    className="w-full bg-gray-500 text-2xl py-3 px-3 rounded-2xl focus:border-0"
    placeholder="Enter your message..."
    value={comment}
    onChange={handleCommentChange}
  />
  <button type="submit" className="">
    <IoMdSend className='sendBtn text-2xl self-center mx-3 text-center text-blue-600'/>
  </button>
</form>

</ul>

          )}
           </div>
          <h3 className='text-xl font-bold'>ارسال عکس نتیجه</h3>
        <input
          type="file"
          onChange={handlePhotoChange}
          className="uploadField border-1 border-white rounded 2xl text-white mt-4 " /* Hide the default file input style */
        />
        <button
          onClick={handleUploadPhoto}
          className="mt-4 py-2 px-6 bg-blue-500 hover:bg-blue-500 rounded-md felx w-max flex-row text-sm text-white"
        >
          {confirmationLoading ? <AiOutlineLoading className="loading mx-3 text-white animate-spin " /> : "اپلود عکس"}
        </button>
       
      </div>
    </div>
  );
}

export default ChallengeDetailPage;
