import React from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineExpandMore,MdExpandLess} from "react-icons/md"

function HomePage() {
  const [more,setMore]=React.useState(false)
  const [moreServices,setMoreServices]=React.useState(false)

  return (
    <div className="bg-pattern fade-out min-h-screen text-2xl text-gray-400 pt-20 p-8">
      { localStorage.getItem('token') ? 
      <div className='animate-bounce text-gray-200 opacity-75'>Welcome {JSON.parse(localStorage.getItem('user'))?.name}</div> : 
      <div className="max-w-md mx-auto  bg-gray-100 bg-opacity-30 backdrop-blur-3xl p-8 rounded-lg shadow-xl">
        <p className="text-5xl font-bold mb-8 text-gray-300">خوش امدید</p>
        <br/>
        <p className="text-xl mb-12 text-right">جایی که می‌توانید سایر کاربران را در بازی‌های یک‌به‌یک به‌چالش بکشید و مهارت‌های خود را به‌نمایش بگذارید.</p>
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
        
          تمامی اموزش های لازم را می‌توانید از 
          <a href='/guide' className=' text-blue-400'> اینجا </a>
          ببینید
        
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
          <button className="bg-gray-300 bg-opacity-20 hover:bg-gray-600 text-white rounded-md py-2 px-4  font-extralight text-sm ease-in-out" onClick={()=>setMore(!more)}>
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
<button className="bg-gray-300 bg-opacity-20 hover:bg-gray-600 text-white rounded-md py-2 px-4 ease-in-out font-extralight text-sm" onClick={()=>setMoreServices(!moreServices)}>
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
          <a href='/contactus'><button className="bg-gray-300 bg-opacity-20 hover:bg-gray-600 text-white rounded-md py-2 px-4 transition-colors font-extralight ease-in-out text-sm">
            تماس با ما
          </button>
          </a>
        </div>
      </section>

      {/* Sell/Buy Coins Section */}
      <section id="sellBuyCoins" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">قوانین خرید و فروش کوین</h2>
        <p className='text-xl mb-12 text-right'>
        کلیه اکانتهایی که در کنسول خود دارید قابلیت خرید و فروش بازیکن در قسمت ترنسفر مارکت بازی را دارند و دقیقا با استفاده از همین قابلیت ،قادر خواهید بود کوین داخل اکانتتان را بفروش برسانید<br/>
        پس از هر فروش کلیه اطلاعات فروش شما در سوابق فروش ذخیره شده و سپس مبلغ ریالی آن به کیف پول اضافه میگردد ، در کیف پول شما مقدار واقعی فروش خود را بصورت هایلات و مقدار نهایی که با بونوس تعلق گرفته محاسبه شده را بصورت واضح مشاهده میکنید
در هر زمان که خواستید با زدن دگمه درخواست واریز موجودی کیف پول صفر شده و فاکتور نهایی قابل پرداخت با شماره و تاریخ و ساعت پرداخت برایتان بنمایش در خواهد آمد
توجه داشته باشید واریزها ظرف حداکثر ۴۸ ساعت بعد از درخواست واریز بحسابی که در پروفایل معرفی کرده‌اید انجام خواهد شد
        </p>
        </div>
      </section>

      {/* Daily Coin Prices Section */}
      <section id="dailyCoinPrices" className="py-20">
        <div className="max-w-md mx-auto bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">قیمت کوین روزانه</h2>
          <p className='text-xl mb-12 text-right'>
          فرضا برای شما کارتی با نام مهدی طارمی به با مقدار بید ۱۰ هزار کوین و مقدار بای ناو ۱۴ هزار کوین لیست می شود. شما داخل فیلتر خود چهار متغیر دارید که هر متغیر رو باید نزدیک به این دو مقدار بذارید تا فیلترتون کاملا دقیق باشه. یعنی در این مثال<br/>
minimum start price: 9900
<br/>
maximum start price: 10100
<br/>
minimum buy now: 13900
<br/>
maximum buy now: 14100
<br/>
این فیلتر به همراه نام طارمی به احتمال بسیار فقط کارتی که براتون لیست شده رو نمایش خواهد داد       
</p>
 </div>
      </section>

      {/* Site Rules Section */}
      <section id="siteRules" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">قوانین سایت</h2>
          <p className='text-xl mb-12 text-right'>
          در صورت دروغ گفتن یا اشتباه کردن در روند اعلام کارت، اگر کاربر سابقه مناسبی نداشته باشد، اکانت داخل سایتش غیر فعال خواهد شد و فاکتور کاربر ابطال می شود.
اگر سابقه کاربر بد نباشد، به کاربر اطلاع داده می شود و هزینه کارت از کیف پول کاربر کم خواهد شد
پس از چندین بار نخریدن کارت حساب کاربری شما بسته خواهد شد. این عدد با سابقه کاربری شما رابطه مستقیم دارد.
<br/>
❗️خرید اشتباه کارت , به منظور عدم پرداخت وجه از سوی تیم ما خواهد بود. به ساعت باقی مونده از کارت دقت کنید و با ساعت و اطلاعاتی که به شما اعلام کردیم تطبیق بدید و از درست بودن اطلاعات دقت حاصل فرمایید
<br/>
چک لیست کارت خریداری شده شما طبق روال همیشگی بصورت روزانه توسط ما انجام میگردد و در صورت مغایرت توسط ادمین به شما اطلاع رسانی میگردد
گرفتن عکس و نگهداری آن ، من بعد به اختیار و صلاحدید خودتان میباشد(برای آرشیو و اثبات خرید کارت)
تمام خرید ها حداکثر تا ۴۸ ساعت توسط ربات بررسی خواهند شد
<br/>
</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
