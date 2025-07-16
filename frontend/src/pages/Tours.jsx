import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa'; // Importing the filter icon from react-icons
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { apiUrl, imageUrl } from '../pages/http';

function Tours() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTours, setFilteredTours] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tours from backend
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}tours`);
        if (!response.ok) throw new Error('Failed to fetch tours');
        const data = await response.json();
        setTours(data);
        setFilteredTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Debounced search function
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Search function
  const searchTours = useCallback((query, toursToSearch) => {
    if (!query) return toursToSearch;
    
    const searchTerms = query.toLowerCase().split(' ');
    return toursToSearch.filter(tour => {
      const searchableText = `
        ${tour.title} 
        ${tour.description} 
        ${tour.location} 
        ${tour.type}
      `.toLowerCase();
      
      return searchTerms.every(term => searchableText.includes(term));
    });
  }, []);

  // Filter tours based on selected criteria and search query
  useEffect(() => {
    setIsSearching(true);

    const debouncedFilter = debounce(() => {
      let result = [...tours];

      if (searchQuery) {
        result = searchTours(searchQuery, result);
      }

      if (selectedLocation) {
        result = result.filter(tour => tour.location === selectedLocation);
      }

      if (selectedDuration) {
        result = result.filter(tour => tour.duration.includes(selectedDuration));
      }

      if (selectedType) { // Apply filter for selected type
        result = result.filter(tour => tour.type === selectedType);
      }

      if (sortBy === 'price-low') {
        result.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        result.sort((a, b) => b.price - a.price);
      }

      setFilteredTours(result);
      setIsSearching(false);
    }, 300);

    debouncedFilter();
  }, [searchQuery, selectedLocation, selectedDuration, selectedType, sortBy, searchTours, tours]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedDuration('');
    setSelectedType('');
    setSortBy('');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
          
          {/* Filter Section (Left Side) */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:mr-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600 w-full mb-6 flex items-center justify-center"
            >
              <FaFilter className="mr-2" /> 
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {showFilters && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  {/* Search */}
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tours..."
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />

                  {/* Location */}
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Location</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                    <option value="Matara">Matara</option>
                    <option value="Monaragala">Monaragala</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Vavuniya">Vavuniya</option>
                  </select>

                  {/* Duration */}
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Duration</option>
                    <option value="1 day">1 day</option>
                    <option value="2 days">2 days</option>
                    <option value="3 days">3 days</option>
                  </select>

                  {/* Tour Types */}
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Tour Type</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Beach">Beach</option>
                    <option value="Nature">Nature</option>
                    <option value="Cultural">Cultural</option>
                    {/* Add more tour types */}
                  </select>

                  {/* Sort By */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Sort By</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>

                  {/* Clear Filters Button */}
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-400 w-full"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tours Section (Right Side) */}
          <div className="w-full lg:w-3/4 ">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Available Tours</h1>
              <p className="text-xl text-gray-600">Find your perfect adventure</p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading tours...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">Error: {error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img 
                      src={`${imageUrl + tour.image}`}
                      alt={tour.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.title}</h3>
                      <p className="text-gray-600 mb-2">
                        {tour.description.split(" ").slice(0, 10).join(" ")}...
                      </p>

                      {/* Location, Duration, Type */}
                      <div className="text-gray-500 text-sm mb-4">
                        <p className={`text-sm font-semibold px-2 inline-flex rounded-full 
                          ${
                            tour.status === 'Available' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                              {tour.status}
                        </p>
                        <p><strong>Location:</strong> {tour.location}</p>
                        <p><strong>Duration:</strong> {tour.duration}</p>
                        <p><strong>Type:</strong> {tour.tour_type}</p>
                      </div>

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
            )}

            {!loading && !error && filteredTours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No tours found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tours;
