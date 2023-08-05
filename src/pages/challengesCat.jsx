import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {MdPlaylistAddCheck} from "react-icons/md"
import {CgPlayListAdd} from "react-icons/cg"
import {HiOutlineClipboardList} from "react-icons/hi"
import {PiUserListDuotone} from "react-icons/pi"


function Chals() {

    const navigate = useNavigate();
  
    const handleCreateChallenge = () => {
      navigate('/challenges/new');
    };
    const handleCurrentChallenges = () =>{
      navigate('/challenges/current')
    }
    const handleMyChallenges = () =>{
      navigate('/challenges/my')
    }
    const handleAllChallenges = () => {
      navigate('/challenges/all');
    };
  
    return (
      <div className=" text-gray-100 pt-20 p-8 rounded-md fade-out flex flex-col items-center">
        <button
          type="button"
          onClick={handleAllChallenges}
          className="bg-green-500 border-1 hover:bg-green-600 text-white flex felx-row  gap-2 bg-opacity-20 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
        >
          تمام چالش ها <HiOutlineClipboardList className='mt-1'/>
        </button>
        <button
          type="submit"
          onClick={handleCreateChallenge}
          className="bg-blue-500 border-1 hover:bg-blue-600 text-white flex felx-row  gap-2 bg-opacity-20 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
          ایجاد چالش جدید <CgPlayListAdd className="mt-1"/>
        </button>
        <button
          type="submit"
          onClick={handleCurrentChallenges}
          className="bg-blue-500 border-1 hover:bg-blue-600  flex felx-row  gap-2  text-white bg-opacity-20 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
          چالش های پذیرفته شده <MdPlaylistAddCheck className='mt-1'/>
        </button>
        <button
          type="submit"
          onClick={handleMyChallenges}
          className="bg-blue-500 border-1 hover:bg-red-600 text-white flex felx-row  gap-2  bg-opacity-20 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
        >
          چالش های من <PiUserListDuotone className='mt-1'/>
        </button>
        
      </div>
    );
  }
  
  export default Chals;
  