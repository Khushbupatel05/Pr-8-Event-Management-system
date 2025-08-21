const Home = () => {
    return (
        <>
            <section className="h-screen bg-1 relative">
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="container mx-auto relative h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-x-20 px-4">

                    <div className="bg-neutral-950/90 p-6 sm:p-9 w-full max-w-sm rounded-md shadow-lg">
                        <div className="from-title mb-6 text-center">
                            <h2 className="title-text text-white text-2xl font-bold uppercase">
                                Register <span className="text-yellow-500">Now</span>
                            </h2>
                            <p className="sub-title text-gray-400 text-sm">Make a Booking Now</p>
                        </div>

                        <div className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white outline-none" />
                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded-md bg-gray-800 text-white outline-none" />
                            <select className="w-full px-4 py-2 rounded-md bg-gray-800 text-white">
                                <option>Choose Package</option>
                                <option value="1">Silver</option>
                                <option value="2">Gold</option>
                                <option value="3">VIP</option>
                            </select>
                            <select className="w-full px-4 py-2 rounded-md bg-gray-800 text-white">
                                <option>Ticket Quantity</option>
                                <option value="1">1 Ticket</option>
                                <option value="2">2 Tickets</option>
                                <option value="3">3 Tickets</option>
                            </select>
                            <button className="w-full bg-yellow-500 text-black py-2 rounded-md font-bold hover:bg-yellow-600 transition">
                                REGISTER NOW
                            </button>
                        </div>
                    </div>

                    {/* Event Section */}
                    <div className="text-center text-white max-w-2xl mt-10 lg:mt-0">
                        <div className="flex justify-center gap-4 mb-6 flex-wrap sm:flex-nowrap">
                            <div className="border-2 px-4 py-2 rounded-xl">
                                <h3 className="text-2xl sm:text-3xl font-bold">00</h3>
                                <p className="text-xs uppercase">Days</p>
                            </div>
                            <div className="border-2 px-4 py-2 rounded-xl">
                                <h3 className="text-2xl sm:text-3xl font-bold">00</h3>
                                <p className="text-xs uppercase">Hours</p>
                            </div>
                            <div className="border-2 px-4 py-2 rounded-xl">
                                <h3 className="text-2xl sm:text-3xl font-bold">00</h3>
                                <p className="text-xs uppercase">Mins</p>
                            </div>
                            <div className="border-2 px-4 py-2 rounded-xl">
                                <h3 className="text-2xl sm:text-3xl font-bold">00</h3>
                                <p className="text-xs uppercase">Sec</p>
                            </div>
                        </div>

                        <h4 className="text-sm sm:text-lg tracking-widest mb-2">26 December 2019</h4>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase mb-4 leading-tight">
                            Amsterdam <br /> <span className="text-yellow-500">PHP Conference</span>
                        </h1>
                        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition">
                            Event Details
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
