// Show.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminToken, apiUrl } from '../../http';
import Sidebar from '../../../components/Sidebar';

function Show() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    const response = await fetch(apiUrl + 'tours');
    const data = await response.json();
    setTours(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(apiUrl + `tours/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json",
          Accept: "application/json",
        Authorization: `Bearer ${adminToken()}`,
      }
    });
    if (response.ok) {
      setTours(tours.filter(tour => tour.id !== id));
    }
  };

  return (
    <div className="flex">
      <Sidebar/> {/* Add Sidebar */}
      <div className="flex-1 lg:ml-64 p-8"> {/* Add left margin for large screens */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Tour List</h2>
            <Link to="/admin/tours/create" className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Add New Tour
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Id</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tour</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tours.map(tour => (
                  <tr key={tour.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">LKR {tour.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.duration}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{tour.tour_type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        tour.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {tour.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/admin/tours/edit/${tour.id}`} className="text-blue-900 hover:text-blue-600 mr-4">Edit</Link>
                      <button onClick={() => handleDelete(tour.id)} className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
