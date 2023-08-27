/* eslint-disable no-unused-vars */
import * as React from 'react';
import {AiOutlineClose} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import {FaRegUserCircle, FaBitcoin} from "react-icons/fa"
import {HiHome} from "react-icons/hi"
import {GiChampions} from "react-icons/gi"
import {IoIosCall,IoMdSettings} from "react-icons/io"
import {BsCreditCard2BackFill} from "react-icons/bs"
import {RiLoginBoxFill,RiLogoutBoxRFill} from "react-icons/ri"
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import {request} from "../services/requests"
import {BiSolidHelpCircle} from "react-icons/bi"
import checkIfLoggedIn from './Middleware/checkLoggedIn';
import { Link } from 'react-router-dom';




function SideBar(){
  const location = useLocation();
  const [isActive, setIsActive] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); 
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setIsLoggedIn(!!storedToken);

  }, []);
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setSidebarOpen(false); // Close the sidebar
  };
  
  
    return(
        <>
<button 
  className="btn btn-secondry text-white bg-blue-600 absolute ms-2 top-1 left-0"   
  onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle the sidebar
  type="button" 
  data-bs-toggle="offcanvas" 
  data-bs-target="#offcanvasWithBackdrop" 
  aria-controls="offcanvasWithBackdrop"><RxHamburgerMenu/>
  </button>
<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
  </div>
</div>
<div className="offcanvas offcanvas-start text-gray-400 w-60 p-0" tabIndex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
<div className="offcanvas-header w-full text-left p-0">
<a href='/panel'>

  {(localStorage.getItem('token') && checkIfLoggedIn()) ? (
    <div className="offcanvas-header py-2 px-4 w-full flex flex-col gap-1 shadow-lg justify-between bg-gray-900">
      <div className="flex justify-between items-center gap-16 mt-3">
      <img
          className="profile-pic w-12 rounded-full"
          src={JSON.parse(localStorage.getItem('user')).avatar}
          alt="user-avatar"
        />
        <span className="creditt text-xs px-3 py-2 border-solid border-1 rounded-full border-opacity-20">
          {JSON.parse(localStorage.getItem('user')).accountCredit} 
        </span>
        
      </div>
      <div className="flex flex-col self-start gap-0">
        <p className="profile-userName text-base font-extrabold text-gray-50">
          {JSON.parse(localStorage.getItem('user')).name}
        </p>
        <p className="font-light text-sm mb-2">
          {JSON.parse(localStorage.getItem('user')).username}
        </p>
      </div>
    </div>
  ) : (
    <div className="offcanvas-header p-4 w-full flex flex-col gap-3 justify-start items-start bg-gray-900">
      <FaRegUserCircle className="profile-pic text-3xl lg:text-3xl md:text-2xl sm:text-xl text-center text-gray-100" />
      <p className="profile-userName tracking-wide self-start text-left text-gray-50">
        کاربر مهمان
      </p>
    </div>
  )}
  </a>

  </div>

  <div className="offcanvas-body flex-col mt-5">
        <ul className='offcanvas-list flex-col ps-2 lg:ps-1 text-left justify-between gap-0'>
        <button
  className="text-white mt-2 flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>
  <Link to="/">
    <li className="flex flex-row align-middle gap-2 my-3 lg:py-0.5 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100">
      <HiHome className="mt-1 text-blue-400" />
      خانه
    </li>
  </Link>
</button>            
<button
  className="text-white flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>


<Link to='/coins'><li className='flex flex-row align-middle gap-2 my-3 lg:py-0.5 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><FaBitcoin className='mt-1 text-blue-400'/>کوین</li></Link>

</button>


           
            
<button
  className="text-white flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>
            <Link to='/challenges'><li className='flex flex-row align-middle gap-2 my-3 lg:py-0.5 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><GiChampions className=' text-blue-400'/>چالش ها</li></Link>
            </button>
            {checkIfLoggedIn() ? (
              <>
              <button
  className="text-white flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>
              <Link to='/charge'>
                <li className='flex flex-row align-middle gap-2 my-3 lg:my-0 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><BsCreditCard2BackFill className='mt-1 text-blue-400'/>شارژ حساب</li></Link>
              
                </button>
              </>
            ) : (
              <button
  className="text-white flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>
              <Link to="/login">
                <li
                  className={`flex flex-row align-middle gap-2 my-3 lg:my-0 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100`}
                >
                  <RiLoginBoxFill className="mt-1 text-blue-400" />
                  ورود
                </li>
              </Link>
              </button>
              
            )}
             <button
  className="text-white flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>

              <Link to='/contactus'><li className='flex flex-row align-middle gap-2 my-3 lg:my-0 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100'><IoIosCall className=' text-blue-400'/>تماس با ما</li></Link>
              </button>
              
              <button
  className="text-white flex flex-row w-full"
  type="button"
  data-bs-dismiss="offcanvas"
>
              <Link to="/guide">
                <li
                  className={`flex flex-row align-middle gap-2 my-3 lg:my-0 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100`}
                >
                  <BiSolidHelpCircle className="mt-1 text-blue-400" />
                    آموزش                
                </li>
              </Link>
              </button>
            {checkIfLoggedIn() && (

<button
className="text-white flex flex-row w-full"
type="button"
data-bs-dismiss="offcanvas"
onClick={handleLogout}
>
              <a href='/'>
                <li
                  onClick={handleLogout}
                  className={`flex flex-row align-middle gap-2 mt-3 mb-0 lg:my-0 lg:text-lg md:text-sm px-5 py-2 rounded w-full ps-1 hover:bg-sky-400 hover:bg-opacity-20 hover:text-gray-100`}
                >
                  <RiLogoutBoxRFill className="mt-1 text-red-400" />
                  خروج
                </li>
              </a>
              </button>
            )}
        </ul>
  </div>
  <h5 className="offcanvas-title font-serif font-extralight italic" id="offcanvasWithBackdropLabel">ChampsPlus+</h5>

  
</div>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
    
  
</div>
        </>
    )
}
export default SideBar