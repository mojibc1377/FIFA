import React from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineExpandMore,MdExpandLess} from "react-icons/md"

function HomePage() {
  const [more,setMore]=React.useState(false)
  const [moreServices,setMoreServices]=React.useState(false)


  return (
    <div className="bg-pattern fade-out min-h-screen text-2xl text-gray-400 pt-20 p-8">
      { localStorage.getItem('isLoggedIn') ? <div className='animate-bounce text-gray-200 opacity-75'>Welcome {(JSON.parse(localStorage.getItem('user')).name)}</div> : <div className="max-w-md mx-auto  bg-gray-100 bg-opacity-30 backdrop-blur-3xl p-8 rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold mb-8 text-gray-300">به وبسایت ما خوش امدید</h1>
        <p className="text-xl mb-12 text-right">جایی که می‌توانید سایر کاربران را در بازی‌های یک‌به‌یک به‌چالش بکشید و مهارت‌های خود را به‌نمایش بگذارید.
</p>
        <div className="flex gap-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors">
            ورود
          </Link>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors">
            ساخت حساب 
          </Link>
        </div>
      </div>}

      <section id="about" className="py-20">
        <div className="max-w-md mx-auto  bg-opacity-30 backdrop-blur-3xl bg-gray-100 p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-300"> توضیحات</h2>
          <p className="text-lg mb-12 text-right">

         :بازی یک‌به‌یک <br/>در این قسمت امکان مسابقه با سایر کاربران وجود دارد. از بین بازی‌های مختلف مورد علاقه‌تان را انتخاب کنید وکاربران دیگر را به چالش بکشید. هر بازیکنی که توانایی‌های بالاتری داشته باشد، به عنوان برنده اعلام می‌شود  
{more && (
  <div className='fadeOut'>
  <br/>
:خرید و فروش کوین فیفا 
<br/>
شما می‌توانید به‌راحتی سکه‌های فیفا23 و 24 را در این بخش خرید و فروش کنید. به عنوان یک بازیکن فوق‌العاده، سکه‌های خود را به فروش بگذارید و در کنار آن‌ها، سکه‌های مورد نیاز برای تقویت تیم خود را خریداری کنید
<br/>
 آماده‌اید تا به مسابقه بپردازید و بهترین‌ها را شکست دهید؟
<br/>
از هم‌اکنون شروع کنید و تجربه‌ی بی‌نظیری را در دنیای مسابقه‌های آنلاین داشته باشید </div>
)}
 </p>
          <button className="bg-gray-300 bg-opacity-20 hover:bg-gray-600 text-white rounded-md py-2 px-4  font-extralight text-sm ease-in-out duration-500" onClick={()=>setMore(!more)}>
            {more ?<div className='flex flex-row gap-1'>{"کمتر"} <MdExpandLess className='mt-1 animate-pulse'/> </div> : <div className='flex flex-row gap-1'>{"بیشتر"} <MdOutlineExpandMore className='mt-1 animate-pulse'/> </div>}
          </button>
        </div>
      </section>

      <section id="services" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg shadow-xl">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-300">خدمات ما</h2>
          <p className="text-lg mb-12 text-right">
پشتیبانی ۲۴ ساعته:
ما ارائه‌دهنده‌ی خدمات پشتیبانی ۲۴ ساعته هستیم هر روز از هفته و در تمام ساعات شبانه‌روز، تیم پشتیبانی ما آماده‌ی رفع هرگونه مشکل یا پاسخگویی به سوالات شما می‌باشد
<br/>
:پشتیبانی تلفنی با مدیریت<br/>
ارتباط با مدیریت و پشتیبانان بسیار آسان است. شما می‌توانید با تماس تلفنی مستقیم، با مدیریت و تیم پشتیبانی ما در ارتباط باشید ما بر تماس شما با ارزش قائل هستیم و اطمینان داریم که مشکلات و نیازهای شما به سرعت و بهترین شکل ممکن حل می‌شوند
<br/>
{moreServices && (<div>:خدمات فوق‌العاده<br/>
علاوه بر ارائه‌ی خدمات ۲۴ ساعته، ما خدمات دیگری نیز ارائه می‌دهیم که شامل امکانات متعددی است با ما به راحتی می‌توانید به تنهایی یا با دوستان خود در مسابقات یک به یک شرکت کنید و لذت ببرید
<br/>

:آخرین به‌روزی‌ها<br/>
تیم ما همواره در تلاش است تا بهترین و جدیدترین محتوا و به‌روزی‌ها را در اختیار شما قرار دهد ما از آخرین تکنولوژی‌ها و مدل‌ها استفاده می‌کنیم تا تجربه‌ی شما در وب‌سایت ما بهترین باشد
<br/>

:جامعه‌ی فعال<br/>
به یک جامعه‌ی فعال از علاقمندان به بازی‌ها و تجربه‌ی مسابقه‌های آنلاین بپیوندید از مسابقات هیجان‌انگیز یک به یک لذت ببرید، نکات جدیدی یاد بگیرید و بازیکنان حرفه‌ای دیگر را به چالش بکشید
<br/>

با اطمینان کامل از خدمات و امکانات بی‌نظیر ما استفاده کنید در انتظار شما هستیم تا بهترین تجربه‌ی ممکن را در دنیای مسابقه و بازی‌های آنلاین داشته باشید.          </div>)
}
</p>
<button className="bg-gray-300 bg-opacity-20 hover:bg-gray-600 text-white rounded-md py-2 px-4 ease-in-out duration-500 font-extralight text-sm" onClick={()=>setMoreServices(!moreServices)}>
          {moreServices ?<div className='flex flex-row gap-1'>{"کمتر"} <MdExpandLess className='mt-1 animate-pulse'/> </div> : <div className='flex flex-row gap-1'>{"بیشتر"} <MdOutlineExpandMore className='mt-1 animate-pulse'/> </div>}
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-md mx-auto bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-300">تماس با ما</h2>
          <p className="text-lg mb-12 text-right">
          ما از شنیدن از شما خوشحال می‌شویم! اگر سوالاتی دارید، نیاز به راهنمایی دارید یا به هر دلیلی نیاز به تماس با تیم ما دارید، با خوشی منتظر تماس شما هستیم         </p>
          <a href='/contactus'><button className="bg-gray-300 bg-opacity-20 hover:bg-gray-600 text-white rounded-md py-2 px-4 transition-colors font-extralight ease-in-out duration-500 text-sm">
            تماس با ما
          </button>
          </a>
        </div>
      </section>

      {/* Sell/Buy Coins Section */}
      <section id="sellBuyCoins" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">قوانین خرید و فروش کوین</h2>
          {/* ... Your content for 24-Hour Sell or Buy for Coins Option ... */}
        </div>
      </section>

      {/* Daily Coin Prices Section */}
      <section id="dailyCoinPrices" className="py-20">
        <div className="max-w-md mx-auto bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">قیمت کوین روزانه</h2>
          {/* ... Your content for Daily Coin Prices for Buy and Sell ... */}
        </div>
      </section>

      {/* Site Rules Section */}
      <section id="siteRules" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">قوانین سایت</h2>
          {/* ... Your content for Site Rules ... */}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
