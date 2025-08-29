import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginDeta } from '../feature/event/eventSlice';

const Login = () => { 
  const [input, setInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch()
  const Navigate = useNavigate();

  
  const isLoggedIn = useSelector((state) => {
    return state.reducer.isLoggedIn
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (isLoggedIn) {
      Navigate("/events")
    }
  }, [isLoggedIn, Navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginDeta(input));  
  }

  return (
   <section className="">
      <div className="justify-center min-h-screen  flex items-center md:h-[90vh] p-3">
        <div className="w-full bg-white rounded-xl shadow-md sm:max-w-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">sign in </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-900"> Username or email </label>
              <input onChange={handleChange} type="email" name="email" id="email" placeholder="Username or email" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-900"> Password </label>
              <input onChange={handleChange} type="password" name="password" id="password" placeholder="Password" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <button type="submit" className="w-full bg-[#db7209] hover:bg-[#de925b] text-white text-sm font-semibold py-3 rounded-sm transition-all duration-300">
              Log In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
