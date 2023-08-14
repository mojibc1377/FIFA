import * as React from 'react';

function Guide(){
    return(
        <>
        <div className='flex flex-col gap-6 text-right  pr-10 pl-10 pt-24'>
            <h1 className='headerInfo text-xl '>آموزش</h1>
                <div className='pr-5'>
                    در این صفحه تمامی اموزش های لازم برای استفاده از این پلتفرم به شما داده میشود<br/>
                    آموزش ثبت چالش - پذیرفتن چالش دیگران - هماهنگی با کاربر دیگر - خرید و فروش کوین - تغییر مشخصات کاربری
                </div>
                <h1 className='headerInfo text-xl '>چالش ها</h1>
                <div className='pics flex gap-1 flex-row'>
                    <img src='/images/help/1.png' alt="menu" className='image-guide w-44 h-auto rounded-lg border-1 border-opacity-5'></img>
                    <img src='/images/help/2.png' alt="challs" className='image-guide w-44 h-auto rounded-lg border-1 border-opacity-5'></img>

                </div>
                <h3>ابتدا از منو چالش ها را انتخاب کنید</h3>

                <div className='pr-5 flex flex-col gap-1'>
                    <div className='head '>در این قسمت شما توانایی انجام چندین کار را دارید</div>
                    <br/>
                    <a href='/challenges/all' className='links list-none hover:text-gray-400 font-extralight italic text-xl'> تمام چالش ها </a>
                    <br/>
                    <div className='flex flex-row gap-2 mt-4'>
                        <img alt="new-challenge" src='/images/help/7.png' className='image-guide w-44 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <div>در این قسمت شما با مشخص کردن پارامتر های مختلف قادر به ایجاد چالش جدید برای کاربران دیگر هستید</div>
                    </div>
                    <a href='/challenges/new' className='links list-none hover:text-gray-400 font-extralight italic  text-xl '> ایجاد چالش جدید </a>
                    <br/>
                    <div className='flex flex-row gap-2 mt-2'>
                        <img alt="new-challenge" src='/images/help/6.png' className='image-guide w-44 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <div>در این قسمت شما قادر به بررسی چالش های ثبت شده توسط کاربرهای دیگر و خودتان هستید</div>
                    </div>
                    <a href='/challenges/current' className='links list-none hover:text-gray-400 font-extralight italic  text-xl '> بررسی چالش هایی که پذیرفتید </a>
                    <br/>
                    <div className='flex flex-row gap-2 mt-2'>
                        <img alt="new-challenge" src='/images/help/11.png' className='image-guide w-44 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <div>در این قسمت شما قادر به بررسی چالش هایی هستید که قبول کردید</div>
                    </div>
                    <br/>
                    <a href='/challenges/my' className='links list-none hover:text-gray-400 font-extralight italic  text-xl '> بررسی چالش هایی که ثبت کردید </a>
                    <br/>
                    <div className='flex flex-row gap-2 mt-2'>
                        <div>
                            در این قسمت شما قادر به بررسی چالش هایی هستید که ثبت کردید که اینجا دو حالت مختلف وجود دارد
                            <br/>
                            حالت اول چالش شما ثبت شده و در انتظار تایید توسط کاربری دیگر است
                            <br/>
                            چالش شما توسط کاربری دیگر تایید شده که در این صورت به شما اس ام اس داده میشود تا به صفحه ی هماهنگی بروید
                             </div>
                             <div className='pics flex gap-1 flex-row'>
                </div>
                    </div>
                    <div className='flex flex-row gap-1 mt-3 mb-9'>
                    <img src='/images/help/9.png' alt="menu" className='image-guide w-44 h-auto rounded-lg border-1 border-opacity-5'></img>
                    <img src='/images/help/10.png' alt="challs" className='image-guide w-44 h-auto rounded-lg border-1 border-opacity-5'></img>
                    </div>
                </div>
                <div className='links list-none font-extralight italic  text-xl'> هماهنگی و ارسال نتیجه </div>
                    <br/>
                    <div className='flex flex-row gap-1 mb-10'>
                        <img alt="new-challenge" src='/images/help/12.png' className='image-guide w-44 h-auto rounded-lg border-1 border-opacity-5'/>
                        <div>
                        با زدن دکمه ی بیشتر وارد صفحه ی اطلاعات چالش میشوید<br/>
                            در این قسمت شما قادر به هماهنگی تایم بازی و ارسال عکس نتیجه برای ادمین هستید</div>
                    </div>
                <div className='pics mb-4 '>
                <a href='/challenges/coins' className='links list-none hover:text-gray-400 font-extralight italic  text-xl '> کوین فیفا التیمیت</a>
                    <br/>
                    <div className='flex flex-row gap-2 mt-5'>
                        <img alt="new-challenge" src='/images/help/4.png' className='image-guide w-44 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <img alt="new-challenge" src='/images/help/5.png' className='image-guide w-44 h-auto  rounded-lg border-1 border-opacity-5'/>

                        <div>در این قسمت شما قادر به خرید و فروش کوین فیفا التیمیت خود هستید</div>
                    </div>
                </div>
        </div>
        
        </>
    )
}
export default Guide;