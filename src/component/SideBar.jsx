/* eslint-disable no-unused-vars */
import * as React from 'react';
import {AiOutlineClose} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import {FaRegUserCircle, FaBitcoin} from "react-icons/fa"
import {HiHome} from "react-icons/hi"
import {GiChampions} from "react-icons/gi"
import {IoIosCall,IoMdSettings} from "react-icons/io"
import {RiLoginBoxFill,RiLogoutBoxRFill} from "react-icons/ri"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import {request} from "../services/requests"



function SideBar(){
  const location = useLocation();
  const [isActive, setIsActive] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Default isLoggedIn to false
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const storedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    setIsLoggedIn(storedIsLoggedIn !== null ? storedIsLoggedIn : false);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(false)); 
    setIsLoggedIn(false); // Update state
    localStorage.clear()
  };
  
    return(
        <>
<button className="btn btn-secondary text-blue-400 absolute mx-0 ms-2 mt-2 left-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"><RxHamburgerMenu/></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
  </div>
</div>
<div className="offcanvas offcanvas-start text-gray-400 w-60 lg:w-80 md:w-60 sm:w-40" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title font-serif font-extralight italic" id="offcanvasWithBackdropLabel">FIFA MOJI</h5>
  </div>
  <div className="offcanvas-body flex-col ">
        <ul className='offcanvas-list flex-col ps-4 text-left justify-between gap-0'>
            <a href='/'><li className='flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><HiHome className='mt-1 text-blue-400'/>Home</li></a>
            <a href='/coins'><li className='flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-2 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><FaBitcoin className='mt-1 text-blue-400'/>Coin</li></a>
            <a href='/challenges'><li className='flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><GiChampions className='mt-1 text-blue-400'/>Challenges</li></a>
            {JSON.parse(localStorage.getItem('isLoggedIn')) ? (
              <a href="/panel">
                <li
                  className={`flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100`}
                >
                  <IoMdSettings className="mt-1 text-blue-400" />
                  panel
                </li>
              </a>
            ) : (
              <a href="/login">
                <li
                  className={`flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100`}
                >
                  <RiLoginBoxFill className="mt-1 text-blue-400" />
                  login / signup
                </li>
              </a>
            )}
                        <a href='/contactus'><li className='flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><IoIosCall className='mt-1 text-blue-400'/>contact us</li></a>

            {(JSON.parse(localStorage.getItem('isLoggedIn'))) && (
              <a href='/'>
                <li
                  onClick={handleLogout}
                  className={`flex flex-row align-middle gap-2 my-8 lg:text-xl md:text-sm sm:text-xs px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100`}
                >
                  <RiLogoutBoxRFill className="mt-1 text-red-400" />
                  logout
                </li>
              </a>
            )}
        </ul>
  </div>
  {(user && user.name) ? (
              // Show user's profile information when logged in
              <div className="offcanvas-footer flex px-4 py-2 w-full lg:px-2 lg:py-3 md:px-1 md:py-2 sm:px-0.5 sm:py-1 Xs:px-1 Xs:py-1  bg-slate-700 gap-2 rounded-t-lg">
                <img className="profile-pic text-3xl lg:text-3xl md:text-2xl sm:text-xl text-center text-gray-100 w-10 rounded-full" src={(JSON.parse(localStorage.getItem("user"))).avatar} alt='user-avatar'/>
                <span className="profile-userName font-black self-center text-left text-gray-50">
                  {(localStorage.getItem('loggedInUser'))} {/* Display user's name */}
                </span>
              </div>
            ) : (
              // Show login link when not logged in
              <div className='offcanvas-footer flex  px-4 py-2 w-full lg:px-2 lg:py-3 md:px-1 md:py-2 sm:px-0.5 sm:py-1 Xs:px-1 Xs:py-1  bg-slate-700 gap-2 rounded-t-lg'>
        <FaRegUserCircle className='profile-pic text-3xl lg:text-3xl md:text-2xl sm:text-xl text-center text-gray-100'/>
        <span className='profile-userName font-black self-center text-left text-gray-50'>GUEST USER</span>
  </div>
            )}
</div>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
    
  
</div>
        </>
    )
}
export default SideBar