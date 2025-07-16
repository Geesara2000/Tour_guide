import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'; // Import your sidebar component

const Overview = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/dashboard-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with Fixed Width */}
      <div className="w-64 fixed inset-y-0 left-0">
        <Sidebar />
      </div>

      {/* Main Content with Padding to Avoid Overlap */}
      <div className="flex-1 lg:ml-64 p-8">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { label: 'Total Bookings', value: stats.totalBookings },
                  { label: 'Total Users', value: stats.totalUsers },
                  { label: 'Total Revenue', value: `LKR ${stats.totalRevenue}` },
                ].map((stat, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{stat.label}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-900 font-bold">{stat.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
