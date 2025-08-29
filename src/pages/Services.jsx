import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            <div className="bg-gray-800 banner-bg text-white py-24 text-center relative">
                <h2 className="py-10">
                    WHAT WE CAN DO <br />
                    <span className="text-orange-400 text-3xl font-bold">HARMONI SERVICES</span>
                </h2>


                <nav className="mt-2 text-sm">
                    <Link to="/" className="hover:text-orange-400">Home</Link>
                    <span className="mx-1">|</span>
                    <span className="text-orange-400 font-medium">Services</span>
                </nav>
            </div>


            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-16">


                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="relative">
                        <img
                            src="/img/1.image.png"
                            alt="Business Conference"
                            className="rounded-lg shadow-lg"
                        />
                        <img
                            src="/img/1.1.image.png"
                            alt="Conference"
                            className="absolute bottom-[-30px] left-60 rounded-lg shadow-md w-56 border-white"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">
                            Business <span className="text-orange-500">Conference</span>
                        </h3>
                        <p className="text-sm text-orange-500 mt-1">price start from $52.00</p>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet the best consectetur diam adipiscing
                            elites sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                        </p>


                        <div className="flex flex-wrap gap-3 mt-5">
                            <span className="px-4 py-2 bg-orange-50 text-orange-600 border border-orange-300 rounded-full text-sm">
                                Website Development
                            </span>
                            <span className="px-4 py-2 bg-orange-50 text-orange-600 border border-orange-300 rounded-full text-sm">
                                Office Meeting
                            </span>
                            <span className="px-4 py-2 bg-orange-50 text-orange-600 border border-orange-300 rounded-full text-sm">
                                Online Store
                            </span>
                        </div>

                        
                        <div className="mt-6 flex gap-4">
                            <button className="bg-orange-500 text-white px-5 py-2 rounded-full shadow hover:opacity-90">
                                MAKE AN EVENT
                            </button>
                            <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-full hover:bg-orange-50">
                                CONFERENCE EVENT
                            </button>
                        </div>
                    </div>
                </div>

            
                

            </div>
        </div>
    );
};

export default Service;
