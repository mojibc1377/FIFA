import * as React from 'react';

function Header (){
    return(
        <div className='header pt-1 pb-1 bg-gray-900'>
        <img className='header-logo h-10 my-1 pr-2 mr-1' src='/images/logo/ea-logo.png' alt='header-logo'></img>
        <p className='header-text font-mono italic font-medium pt-1 text-white space-x-4'>ChampsPlus</p>
        </div>

    )
}
export default Header;
