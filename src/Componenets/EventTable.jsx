import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteEvent } from "../feature/event/eventSlice";
import { useEffect } from "react";

const EventTable = ({ data }) => {
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteEvent(id))
  }
  

  return (
    <>
      <section >
        <div className="container relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-700">

            <thead className="text-xs text-gray-700 uppercase bg-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Venue
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Tickets
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {
                data.length > 0 ? data.map((evnt) => {
                  return <tr key={evnt.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {evnt.name}
                    </td>
                    <td className="px-6 py-4">
                      {evnt.category}
                    </td>
                    <td className="px-6 py-4">
                      {evnt.date}
                    </td>
                    <td className="px-6 py-4">
                      {evnt.venue}
                    </td>
                    {/* <td className="px-6 py-4">
                      {evnt.tickets}
                    </td> */}
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-semibold">Active</span>
                    </td>
                    <td className="px-6 py-4 flex gap-3">
                       <Link
                        to={`/edit-event/${evnt.id}`}
                        className="font-medium text-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        className="font-medium text-red-600"
                        onClick={() => handleDelete(evnt.id)} >
                        Delete
                      </button>
                    </td>
                  </tr>
                }) : <tr>
                  <td colSpan={7} className="p-5 text-center text-2xl font-bold">No Data Found</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default EventTable
