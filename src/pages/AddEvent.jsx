import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '../feature/event/eventSlice';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const [input, setInput] = useState({
        name: '', category: '', date: '', venue: ''
    })
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let validateErrors = {}

        if (input.name.trim() === "") {
            validateErrors.name = "Enter Event Name !";
        }

        if (input.category.trim() === "") {
            validateErrors.category = "Select Category !";
        }

        if (input.date.trim() === "") {
            validateErrors.date = "Select Date !";
        }

        if (input.venue.trim() === "") {
            validateErrors.venue = "Enter Venue !";
        }

        setErrors(validateErrors)

        if (Object.keys(validateErrors).length > 0) return;
        
        dispatch(addEvent(input))
        navigate('/Events')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-600 via-orange-300 to-orange-200 px-4">

            <div className="bg-white shadow-2xl rounded-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">


                <div className="hidden md:block w-1/2">
                    <img src="/img/event.avif" alt="event" className="h-full w-full object-cover" />
                </div>

   
                <div className="w-full md:w-1/2 p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-extrabold text-orange-500">Add Event</h1>
                            <p className="text-gray-600 my-6">Fill the details below to create your event</p>
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">Event Name</label>
                            <input type="text" name="name" id='name' value={input.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Enter event name" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">Category</label>
                            <select name="category" id='category' value={input.category} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none" >
                                <option value="">-- Select Category --</option>
                                <option value="Music">Music</option>
                                <option value="Dance">Dance</option>
                                <option value="Tech">Tech</option>
                                <option value="Sports">Sports</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">Date</label>
                            <input type="date" name="date" id='date' value={input.date} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none" />
                            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-semibold text-gray-700">Venue</label>
                            <input type="text" name="venue" id='venue' value={input.venue} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Enter venue" />
                            {errors.venue && <p className="text-red-500 text-sm mt-1">{errors.venue}</p>}
                        </div>

                        <div className="text-center">
                            <button type="submit" className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-lg transition duration-300">
                                Add Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEvent
