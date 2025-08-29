import { useSelector } from 'react-redux'
import EventTable from '../Componenets/EventTable';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Events = () => {
  const data = useSelector((state) => {
    return state.reducer.list
  });

  const [search, setSearch] = useState({ name: "", category: "" });
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    const key = e.target.id;
    const newSearch = { ...search, [key]: value };
    setSearch(newSearch);
  }

  useEffect(() => {
    const filtered = data.filter((event) => {
      const matchesName = event.name.toLowerCase().includes(search.name.toLowerCase());
      const matchesCategory = search.category.trim() === "" || ((event.category || "").toLowerCase().includes(search.category.toLowerCase()));

      return matchesName && matchesCategory;
    });
    setFilteredData(filtered);
  }, [search, data]);

  return (
    <div className='container mx-auto '>
      <div className='pt-40 flex justify-between my-4'>
        <div><h1 className='font-bold text-4xl'>Events Data</h1></div>
        <button  type='button' className='text-white bg-orange-500 hover-bg-orange-800 focus:ring-4 focus:ring-ornage-300 font-medium p-2 rounded-md'
          onClick={() => navigate('/add-event')} >
          + Add Event
        </button>
      </div>

      <div className='flex gap-4 my-4'>
        <input  id='name'  type='text' placeholder='Search by name'  value={search.name} onChange={handleSearch} className='border p-2 rounded ' />
        <input id='category'  type='text' placeholder='Search by category'  value={search.category}  onChange={handleSearch}  className='border p-2 rounded'
        />
      </div>

      <EventTable data={filteredData} />
    </div>
  )
}

export default Events
