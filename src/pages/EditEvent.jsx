import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateEvent } from "../feature/event/eventSlice"

const EditEvent = () => {
    const [input, setInput] = useState({
        name: '', category: '', date: '', venue: ''
    })
    const [errors, setErrors] = useState({})

    const data = useSelector((state) => {
        return state.reducer.list 
    });

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            const updatedEvent = data.find((event) => String(event.id) === String(id))
            if (!updatedEvent) {
                navigate("/")
                return
            }
            setInput(updatedEvent)
        }
    }, [id, data, navigate])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let validateErrors = {}

        if (input.name.trim() === "") validateErrors.name = "Enter Event Name !"
        if (input.category === "") validateErrors.category = "Select Category !"
        if (input.date === "") validateErrors.date = "Select Date !"
        if (input.venue.trim() === "") validateErrors.venue = "Enter Venue !"

        setErrors(validateErrors)
        if (Object.keys(validateErrors).length > 0) return

        dispatch(updateEvent({ id: String(id), updatedData: input }))
        navigate("/events")
    }

    return (
        <div className="edit-event min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-600 via-orange-300 to-orange-200 pt-[100px]">
            <div className="w-full lg:w-1/2 flex item-center justify-center md:p-5">
                <div className="w-full bg-white md:rounded-md max-w-md p-8">
                    <div className="container mx-auto">
                        <h2 className="mb-5 text-3xl text-[#F29727]">Edit Event</h2>
                        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Event Name :</label>
                                <input type="text" id="name" value={input.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category :</label>
                                <select id="category" value={input.category} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                                    <option value="">Select Category</option>
                                    <option value="Music">Music</option>
                                    <option value="Dance">Dance</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Sports">Sports</option>
                                </select>
                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date :</label>
                                <input type="date" id="date" value={input.date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" />
                                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                            </div>

                            <div className="mb-5">
                                <label htmlFor="venue" className="block mb-2 text-sm font-medium text-gray-900">Venue :</label>
                                <input type="text" id="venue" value={input.venue} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" />
                                {errors.venue && <p className="text-red-500 text-sm mt-1">{errors.venue}</p>}
                            </div>

                            <button type="submit" className="text-white bg-[#F29727] hover:bg-[#e47e02] focus:ring-4 focus:outline-none focus:ring-orange-100 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Update Event</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEvent
