/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {json, useParams } from 'react-router-dom';
import { request } from '../services/requests';
import {IoMdSend} from "react-icons/io"
import axios from 'axios';

function ChallengeDetailPage() {
  const { challengeId } = useParams();
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState(null);
  const [commentsList, setCommentsList] = useState([]); // State to store the list of comments


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

      commenterId : (JSON.parse(localStorage.getItem('user'))._id) === challenge.data.challengerId ? challenge.data.accepterId : (JSON.parse(localStorage.getItem('user'))._id) ,
      challengeId,
      receiverId : (JSON.parse(localStorage.getItem('user'))._id) === challenge.data.challengerId ? (JSON.parse(localStorage.getItem('user'))._id) : challenge.data.accepterId ,
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
  
      alert('Image uploaded successfully!');
      setUploadedImageUrl('')
    } catch (error) {
      console.error('Error uploading image:', error);
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
        
        {/* Display Comments */}
        <div className="mt-6 flex w-full flex-col gap-7">
          <h3 className="text-xl font-bold mb-2">پیام ها</h3>
          {commentsList.length === 0 ? (
            <>
            <p>هنوز پیامی ندارید</p>
            <form onSubmit={handleSubmitComment} className="comment-form flex flex-row bg-opacity-20 bg-gray-100 bg-blur align-middle text-white rounded-full">
  <input
    className="w-full bg-gray-500 text-2xl py-3 px-5 rounded-full focus:outline-none"
    placeholder="Enter your message..."
    value={comment}
    onChange={handleCommentChange}
  />
  <button type="submit" className="">
    <IoMdSend className='sendBtn text-4xl text-blue-600'/>
  </button>
</form>
</>
          ) : (
            <ul className="list-disc flex flex-col gap-3 chat-list p-3">
                
  {commentsList.map((comment, index, commenterId) => (
    
    <li key={index} className="message bg-gray-800 rounded-3xl px-4 text-xl text-black py-2 max-w-s break-words whitespace-normal">
      {comment.comment}
    </li>
    
  ))}
  <form onSubmit={handleSubmitComment} className="comment-form flex flex-row bg-opacity-20 bg-gray-100 bg-blur align-middle text-white rounded-full">
  <input
    className="w-full bg-gray-500 text-2xl py-3 px-3 rounded-full focus:border-0"
    placeholder="Enter your message..."
    value={comment}
    onChange={handleCommentChange}
  />
  <button type="submit" className="">
    <IoMdSend className='sendBtn text-4xl text-blue-600'/>
  </button>
</form>

</ul>

          )}
           </div>
          {/* Photo Upload */}
          <h3 className='text-xl font-bold'>ارسال نتایج</h3>
        <input
          type="file"
          onChange={handlePhotoChange}
          className="uploadField border-1 border-white rounded text-white mt-4 " /* Hide the default file input style */
        />
        <button
          onClick={handleUploadPhoto}
          className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
        >
          اپلود عکس
        </button>
       
      </div>
    </div>
  );
}

export default ChallengeDetailPage;
