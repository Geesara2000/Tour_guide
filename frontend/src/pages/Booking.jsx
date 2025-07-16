import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {  imageUrl, userToken } from './http';
import { toast } from 'react-toastify';

function Booking() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookingData, setBookingData] = useState({
    tour_id: tourId || '',
    date: '',
    name: '',
    email: '',
    phone: ''
  });

  // Fetch tour details
  useEffect(() => {
    if (!tourId) {
      setError("Invalid tour ID.");
      setLoading(false);
      return;
    }

    const fetchTour = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/tours/${tourId}`);
        if (!response.ok) throw new Error('Failed to fetch tour data');
        const data = await response.json();
        setTour(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [tourId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handlePrevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userToken()}`,
        },
        body: JSON.stringify(bookingData)
      });
      const result = await response.json();
      console.log(result)

      if (!response.ok) throw new Error('Booking failed');
      toast.success(result.message);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center text-gray-500">Loading tour details...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!tour) return <div className="text-center text-red-500">Tour not found</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tour.title}</h2>
          <img src={`${imageUrl + tour.image}`} alt={tour.title} className="w-full h-48 object-cover rounded-lg mb-4" />

          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Date</h3>
              <input
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleNextStep}
                disabled={!bookingData.date}
                className="w-full mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Confirm Booking</h3>
              <form onSubmit={handleSubmit}>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                  required
                />
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                  required
                />
                <label className="block mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                  required
                />
                <div className="border-t pt-4 text-gray-700">
                  <p>Tour: {tour.title}</p>
                  <p>Date: {bookingData.date}</p>
                  <p className="text-xl font-bold text-blue-900">
                    Total: ${tour.price || "N/A"}
                  </p>
                </div>
                <div className="flex justify-between mt-6">
                  <button type="button" onClick={handlePrevStep} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg">
                    Back
                  </button>
                  <button type="submit" className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-600">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Booking;
