import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { apiUrl, imageUrl } from '../pages/http';

function Home() {
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(`${apiUrl}tours`);
        if (!response.ok) throw new Error('Failed to fetch tours');
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTours();
  }, []);

  const totalPages = Math.ceil(tours.length / toursPerPage);
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = tours.slice(indexOfFirstTour, indexOfLastTour);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('featured-tours').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Hero />

      {/* Featured Tours Section */}
      <section id="featured-tours" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src={`${imageUrl+tour.image}`}
                  alt={tour.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.title.toUpperCase()}</h3>
                  <p className="text-gray-600 mb-2">
                     {tour.description.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  

                  <p className={`text-sm font-semibold px-2 inline-flex rounded-full 
                  ${
                    tour.status === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                      {tour.status}
                  </p>
                  <p className="text-sm text-gray-500"><strong>Duration:</strong> {tour.duration}</p>
                  <p className="text-sm text-gray-500"><strong>Location:</strong> {tour.location}</p>
                  <p className="text-sm text-gray-500 mb-4"><strong>Tour Type:</strong> {tour.tour_type}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-900 font-bold">LKR {tour.price}</span>
                    <Link 
                        to={`/tours/${tour.id}`}
                        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        View Details
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-50'
                }`}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-50'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
