import * as React from 'react';

function Header (){
    return(
        <div className='header bg-gray-500 pt-1 '>
        <a href='/'><img className='header-logo h-11 pr-1' src='/images/logo/ea-logo.png' alt='header-logo'></img></a>
        <p className='header-text font-mono italic font-medium text-white space-x-4'>FIFA MOJI</p>
        </div>

    )
}
export default Header;
