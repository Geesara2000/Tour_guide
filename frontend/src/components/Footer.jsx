import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 border-t text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">PiyapathTravels</h3>
            <p className="mb-4">
              Your trusted partner in adventure and discovery. We make extraordinary travel experiences accessible to everyone.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PIYAPTH/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/piyapath_travels/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.012 7.053.07 3.002.248.248 3.002.07 7.053.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.947.178 4.051 2.932 6.805 6.983 6.983 1.279.058 1.688.07 4.947.07 3.259 0 3.668-.012 4.947-.07 4.051-.178 6.805-2.932 6.983-6.983.058-1.279.07-1.688.07-4.947 0-3.259-.012-3.668-.07-4.947-.178-4.051-2.932-6.805-6.983-6.983C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 10.152a3.99 3.99 0 100-7.98 3.99 3.99 0 000 7.98zM18.406 4.594a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-blue-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-300">Terms & Conditions</Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Colombo, Sri Lanka
              </p>
              <p className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94701747477" className="hover:text-blue-100">+94 70 174 7477</a>
              </p>
              <p className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:piyapath.travels@gmail.com" className="hover:text-blue-300">piyapath.travels@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p>© {currentYear} PiyapathTravels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
