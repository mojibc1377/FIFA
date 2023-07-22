// ContactUs.js
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  // Replace these phone numbers and email with your desired contact information
  const phoneNumber = '+989330726042';
  const whatsappNumber = '+980726042';
  const email = 'mojibc1377@gmail.com';

  return (
    <div className="flex flex-col items-center gap-10 fade-out pt-20">
      <h2 className="text-3xl font-light mb-8">Contact Us</h2>
      <div className="flex lg:flex-row flex-col  gap-20">
        <a href={`tel:${phoneNumber}`} className="flex fade-out  items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
          <FaPhone className="text-xl animate-bounce mr-2" />
          Call Us
        </a>
        <a href={`https://wa.me/${whatsappNumber}`} className="flex fade-out  items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
          <FaWhatsapp className="text-xl animate-bounce mr-2" />
          WhatsApp
        </a>
        <a href={`mailto:${email}`} className="flex fade-out items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md">
          <FaEnvelope className="text-xl animate-bounce mr-2" />
          Email Us
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
