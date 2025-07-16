import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { logoutAdmin } = useContext(AuthContext);

  return (
    <>
      {/* Toggle Button (Only on Small Screens) */}
      <button 
        className="fixed top-4 left-4 z-50 text-white bg-blue-600 p-2 rounded-md lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay (only visible when sidebar is open on small screens) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-800 shadow-lg p-6 transform z-50 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:block`}
      >
        {/* Close Button (Only on Small Screens) */}
        <button 
          className="absolute top-4 right-4 text-white lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        <h4 className="text-xl text-white font-semibold mb-4">Admin Dashboard</h4>
        <ul className="space-y-3">
        <li>
            <Link 
              to="/admin/dashboard" 
              className="block text-white hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/tours" 
              className="block text-white hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              TourManage
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/bookinglist" 
              className="block text-white hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              BookingList
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                logoutAdmin();
                setIsOpen(false);
              }}
              className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
