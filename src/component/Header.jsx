import * as React from 'react';

function Header (){
    return(
        <div className='header pt-2 pb-1'>
        <a href='/'><img className='header-logo h-9 mb-1 mr-2 pr-1' src='/images/logo/ea-logo.png' alt='header-logo'></img></a>
        <p className='header-text font-mono italic font-medium text-white space-x-4'>ChampsPlus</p>
        </div>

    )
}
export default Header;
