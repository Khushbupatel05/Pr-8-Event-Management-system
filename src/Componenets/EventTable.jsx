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
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  return <tr key={evnt.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                        className="font-medium text-blue-600 dark:text-blue-500"
                      >
                        Edit
                      </Link>
                      <button
                        className="font-medium text-red-600 dark:text-red-500 "
                        onClick={() => handleDelete(evnt.id)} >
                        Delete
                      </button>
                    </td>
                  </tr>
                }) : <tr className="dark:bg-orange-600">
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
