import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
   
      <div className="bg-gray-800 z-40 text-white py-24 text-center relative banner-bg">
        <h2 className="pt-8">
          ALL YOU NEED TO KNOW <br />
          <span className="text-orange-400 text-3xl font-bold">ABOUT HARMONI</span>
        </h2>

       
        <nav className="mt-2 text-sm">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <span className="mx-1">|</span>
          <span className="text-orange-400 font-medium">About Us</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
       
        <div className="text-center mb-12">
          <h3 className="uppercase text-gray-500 tracking-wide">We Are Harmoni</h3>
          <h2 className="text-3xl font-bold mt-2">
            No.1 <span className="text-orange-500">Events Management</span>
          </h2>
          <button className="mt-6 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition">
            GET STARTED!
          </button>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-xl font-semibold">Our Mission</h4>
            <div className="w-12 h-1 bg-orange-400 mx-auto my-3"></div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet the best consectetur adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <p className="mt-3 font-semibold italic text-gray-800">
              Lorem ipsum dolor site amet the best consectetur adipiscing.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Our Vision</h4>
            <div className="w-12 h-1 bg-orange-400 mx-auto my-3"></div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet the best consectetur adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <p className="mt-3 font-semibold italic text-gray-800">
              Lorem ipsum dolor site amet the best consectetur adipiscing.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Our Values</h4>
            <div className="w-12 h-1 bg-orange-400 mx-auto my-3"></div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet the best consectetur adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <p className="mt-3 font-semibold italic text-gray-800">
              Lorem ipsum dolor site amet the best consectetur adipiscing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
