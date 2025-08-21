import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '../feature/event/eventSlice';
import { useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const [input, setInput] = useState({
        name: '', category: '', date: '', venue: ''
    }) 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
   

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addEvent(input))

        navigate('/Events')
        
    }

    return (
        <div className="container mx-auto my-36 mt-100">
            <div className="card shadow-lg p-5 border">     
                <div className='text-center'>
                <h1>Add Events </h1>
                 </div>           
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Event Name</label>
                        <input type="text" name="name" id='name' value={input.name} onChange={handleChange} className="form-control" placeholder="Enter event name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Category</label>
                        <select name="category" id='category' value={input.category} onChange={handleChange} className="form-select" required>
                            <option value="">-- Select Category --</option>
                            <option value="Music">Music</option>
                            <option value="Dance">Dance</option>
                            <option value="Tech">Tech</option>
                            <option value="Sports">Sports</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Date</label>
                        <input type="date" name="date" id='date' value={input.date} onChange={handleChange} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Venue</label>
                        <input type="text" name="venue" id='venue' value={input.venue} onChange={handleChange} className="form-control" placeholder="Enter venue" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning px-4 fw-bold shadow-sm">Add Event</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEvent
