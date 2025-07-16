import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { apiUrl, imageUrl } from '../pages/http';

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await fetch(`${apiUrl}tours/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch tour details');
        }
        const data = await response.json();
        setTour(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <img src={`${imageUrl}${tour.image}`} alt={tour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              {tour.title}
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Price</h3>
              <p className="text-3xl font-bold text-blue-900">${tour.price}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-3xl font-bold text-blue-900">{tour.location}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-3xl font-bold text-blue-900">{tour.duration}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Size</h3>
              <p className="text-3xl font-bold text-blue-900">6-12</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{tour.description}</p>
            <Link
              to={`/booking/${tour.id}`}
              className="inline-block px-8 py-4 bg-blue-900 text-white rounded-xl hover:bg-blue-600 transition-colors shadow-md text-lg font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
