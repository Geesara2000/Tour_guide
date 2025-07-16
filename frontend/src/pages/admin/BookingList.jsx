import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { adminToken, apiUrl } from '../http';
import Sidebar from '../../components/Sidebar';

function ShowBookings() {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from backend
  const fetchBookings = async () => {
    const response = await fetch(apiUrl + 'admin/bookinglist',{
      headers: {
                Authorization: `Bearer ${adminToken()}`,
              },
    });
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Handle booking deletion
  const handleDelete = async (id) => {
    const response = await fetch(apiUrl + `bookings/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setBookings(bookings.filter(booking => booking.id !== id));
    }
  };

  return (
    <div className="flex">
      <Sidebar /> {/* Add Sidebar */}
      <div className="flex-1 lg:ml-64 p-8"> {/* Add left margin for large screens */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Booking List</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-900">
                <tr>
                  <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Booking ID</th>
                  <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tour</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Booking Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Total Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Phone</th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map(booking => (
                  <tr key={booking.id}>
                    <td className="px-2 py-4 whitespace-nowrap">{booking.id}</td>
                    <td className="px-2 py-4 whitespace-nowrap">{booking.tour.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{booking.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(booking.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">LKR {booking.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{booking.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{booking.phone}</td>
              
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

export default ShowBookings;
