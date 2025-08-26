import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <div className="bg-gray-800 text-white py-24 text-center relative banner-bg">
        <h2 className=" pt-8">
          CONTACT US NOW <br />
          <span className="text-orange-400 text-3xl font-bold">KEEP IN TOUCH</span>
        </h2>

        <nav className="mt-2 text-sm">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <span className="mx-1">|</span>
          <span className="text-orange-400 font-medium">Contact Us</span>
        </nav>
      </div>

     
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 mt-10">
        <h3 className="text-3xl font-semibold text-center mb-8">
          Keep In Touch <span className="text-orange-500 font-bold">With Harmoni</span>
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
          <input  type="text"  placeholder="Your Name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"  />

          <input type="email"  placeholder="Email Address"  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

          <input
            type="text" placeholder="Your Country" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />

          <input  type="text"  placeholder="Phone Number"  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>

          <textarea
            placeholder="Your Message"  rows="5" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 md:col-span-2"></textarea>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition">
              SEND MAIL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
