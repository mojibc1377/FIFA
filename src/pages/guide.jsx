import * as React from 'react';

function Guide() {
    return (
        <div className='flex flex-col gap-6 text-right px-3 pt-24'>
            <div className='headerInfo text-xl self-end border-1 rounded-xl bg-gray-600 bg-opacity-30 w-28 px-4 py-2'>آموزش</div>
            <div>
                در این صفحه تمامی آموزش‌های لازم برای استفاده از این پلتفرم به شما داده می‌شود
                آموزش ثبت چالش - پذیرفتن چالش دیگران - هماهنگی با کاربر دیگر - خرید و فروش کوین - تغییر مشخصات کاربری
            </div>

            <div className='headerInfo text-xl self-end border-1 rounded-xl bg-gray-600 bg-opacity-30 w-32 px-4 py-2'>چالش ها</div>
            <div className='pics flex gap-1 flex-row lg:justify-evenly md:justify-evenly'>
                <img src='/images/help/1.png' alt="menu" className='image-guide w-40 h-auto rounded-lg border-1 border-opacity-5' />
                <img src='/images/help/2.png' alt="challs" className='image-guide w-40 h-auto rounded-lg border-1 border-opacity-5' />
            </div>
            <h3>ابتدا از منو چالش ها را انتخاب کنید</h3>
            
                <div className='flex flex-col gap-1'>
                    <div className='head '>در این قسمت شما توانایی انجام چندین کار را دارید</div>
                    <br/>
                    <a href='/challenges/all' className='links list-none hover:text-gray-400 font-extralight italic text-xl'> تمام چالش ها </a>
                    <br/>
                    <div className='flex flex-row lg:justify-around md:justify-around gap-2 mt-4'>
                        <img alt="new-challenge" src='/images/help/7.png' className='image-guid w-40 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <div>در این قسمت شما قادر به بررسی چالش های ثبت شده توسط کاربرهای دیگر و خودتان هستید</div>

                    </div>
                    <a href='/challenges/new' className='links list-none hover:text-gray-400 font-extralight italic mt-4 text-xl '> ایجاد چالش جدید </a>
                    <br/>
                    <div className='flex flex-row lg:justify-evenly md:justify-evenly gap-2 mt-2'>
                        <img alt="new-challenge" src='/images/help/6.png' className='image-guid w-40 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <div>در این قسمت شما با مشخص کردن پارامتر های مختلف قادر به ایجاد چالش جدید برای کاربران دیگر هستید</div>

                    </div>
                    <a href='/challenges/current' className='links list-none hover:text-gray-400 font-extralight italic mt-4 text-xl '> بررسی چالش هایی که پذیرفتید </a>
                    <br/>
                    <div className='flex flex-row lg:justify-around md:justify-around  mt-2'>
                        <img alt="new-challenge" src='/images/help/11.png' className='image-guid w-40 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <div>در این قسمت شما قادر به بررسی چالش هایی هستید که قبول کردید</div>
                    </div>
                    <br/>
                    <a href='/challenges/my' className='links list-none hover:text-gray-400 font-extralight italic  text-xl '> بررسی چالش هایی که ثبت کردید </a>
                    <br/>
                    <div className='flex flex-row justify-end  mt-2'>
                        <div>
                            در این قسمت شما قادر به بررسی چالش هایی هستید که ثبت کردید که اینجا دو حالت مختلف وجود دارد
                            <br/>
                            حالت اول چالش شما ثبت شده و در انتظار تایید توسط کاربری دیگر است
                            <br/>
                            چالش شما توسط کاربری دیگر تایید شده که در این صورت به شما اس ام اس داده میشود تا به صفحه ی هماهنگی بروید
                             </div>
                    </div>
                    <div className='flex flex-row lg:justify-evenly md:justify-evenly gap-1 mt-3 mb-9'>
                    <img src='/images/help/9.png' alt="menu" className='image-guid w-40 h-auto rounded-lg border-1 border-opacity-5'></img>
                    <img src='/images/help/10.png' alt="challs" className='image-guid w-40 h-auto rounded-lg border-1 border-opacity-5'></img>
                    </div>
                </div>
                <div className='links list-none font-extralight italic  text-xl'> هماهنگی و ارسال نتیجه </div>
                    <br/>
                    <div className='flex flex-row lg:justify-evenly md:justify-evenly gap-2 mb-10'>
                        <img alt="new-challenge" src='/images/help/12.png' className='image-guid w-40 h-auto rounded-lg border-1 border-opacity-5'/>
                        <div className=''>
                        با زدن دکمه ی بیشتر وارد صفحه ی اطلاعات چالش میشوید<br/>
                            در این قسمت شما قادر به هماهنگی تایم بازی و ارسال عکس نتیجه برای ادمین هستید</div>
                    </div>
                <div className='pics mb-4 '>
                <a href='/challenges/coins' className='links list-none self-end border-1 rounded-xl bg-gray-600 hover:text-white bg-opacity-30 w-32 px-4 py-2 font-extralight italic  text-xl '> کوین فیفا التیمیت</a>
                    <br/>
                    <div className='mt-4 '>در این قسمت شما قادر به خرید و فروش کوین فیفا التیمیت خود هستید</div>

                    <div className='flex flex-row lg:justify-evenly md:justify-evenly gap-2 mt-5'>
                        <img alt="new-challenge" src='/images/help/4.png' className='image-guid w-40 h-auto  rounded-lg border-1 border-opacity-5'/>
                        <img alt="new-challenge" src='/images/help/5.png' className='image-guid w-40 h-auto  rounded-lg border-1 border-opacity-5'/>

                    </div>

                </div>
        </div>
    )
}
export default Guide;