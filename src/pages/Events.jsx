import { useSelector } from 'react-redux'
import EventTable from '../Componenets/EventTable';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const data = useSelector((state) => {
    return state.reducer.list
  } );
  
  const navigate = useNavigate();

  return (
    
    <div className='container mx-auto '>
      <div className='pt-40 flex justify-between my-4'>
        <div><h1 className='font-bold text-4xl'>Events Data</h1></div>
        <button 
          type='button' 
          className='text-white bg-orange-500 hover-bg-orange-800 focus:ring-4 focus:ring-ornage-300 font-medium p-2 rounded-md' 
          onClick={() => navigate('/add-event')}
        >
          + Add Event
        </button>
      </div>
      <EventTable data={data} />
    </div>
  )
}

export default Events
