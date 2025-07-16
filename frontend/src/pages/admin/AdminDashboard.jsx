import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import Overview from './Overview';
import TourManage from './TourManage';
import BookingList from './BookingList';
import Sidebar from '../../components/Sidebar';


function AdminDashboard() {
  const navigate = useNavigate();
 const [activeTab, setActiveTab] = useState('overview'); 
  
  

 

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case 'overview':
  //       return (<Overview/>);
  //     case 'tours':
  //       return (<TourManage/>);
  //     case 'bookings':
  //       return (<BookingList/>);
  //     default:
  //       return null;
  //   }
  // };

  return (
    // <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
    //   {/* Sidebar */}
      
    //   <div className={`fixed inset-y-0 left-0 bg-blue-900 text-white w-64 md:static transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 z-50`}>
    //     <div className="p-4">
    //       <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          
    //     </div>
    //     <div className="absolute bottom-0 w-full p-4">
    //       <button
    //         onClick={logoutUser}
    //         className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </div>

    //   {/* Main Content */}
    //   {/* <div className="flex-1 p-6 md:ml-64">
    //     <div className="mb-6 flex justify-between items-center">
    //       <button
    //         onClick={() => setShowSidebar(!showSidebar)}
    //         className="md:hidden p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
    //       >
    //         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //         </svg>
    //       </button>
    //       <h1 className="text-2xl font-bold text-gray-900">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
    //     </div>
    //     {renderContent()}
    //   </div> */}
    // </div>
    <Sidebar/>
  );
}

export default AdminDashboard;
