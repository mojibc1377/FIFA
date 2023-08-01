import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-pattern fade-out min-h-screen text-2xl text-gray-400 pt-20 p-8">
      { localStorage.getItem('isLoggedIn') ? `Welcome ${(JSON.parse(localStorage.getItem('user')).name)}` : <div className="max-w-md mx-auto  bg-gray-100 bg-opacity-30 backdrop-blur-3xl p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-8">Welcome to Your Website</h1>
        <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ex eget tellus euismod, eu auctor mauris pulvinar.</p>
        <div className="flex gap-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors">
            Signup
          </Link>
        </div>
      </div>}

      <section id="about" className="py-20">
        <div className="max-w-md mx-auto  bg-opacity-30 backdrop-blur-3xl bg-gray-100 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ex eget tellus euismod, eu auctor mauris pulvinar.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 px-6 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <p className="text-lg mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ex eget tellus euismod, eu auctor mauris pulvinar.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 px-6 transition-colors">
            Explore Services
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-md mx-auto bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt ex eget tellus euismod, eu auctor mauris pulvinar.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-3 px-6 transition-colors">
            Contact Now
          </button>
        </div>
      </section>

      {/* Sell/Buy Coins Section */}
      <section id="sellBuyCoins" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">Sell/Buy Coins</h2>
          {/* ... Your content for 24-Hour Sell or Buy for Coins Option ... */}
        </div>
      </section>

      {/* Daily Coin Prices Section */}
      <section id="dailyCoinPrices" className="py-20">
        <div className="max-w-md mx-auto bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">Daily Coin Prices</h2>
          {/* ... Your content for Daily Coin Prices for Buy and Sell ... */}
        </div>
      </section>

      {/* Site Rules Section */}
      <section id="siteRules" className="py-20 bg-opacity-30 bg-gray-100 backdrop-blur-3xl p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold mb-8">Site Rules</h2>
          {/* ... Your content for Site Rules ... */}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
