import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Terms = () => {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions govern your use of the TravelMate website and services. By accessing or using our website, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Responsibilities</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">Acceptable Use</h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                </p>

                <h3 className="text-xl font-medium text-gray-900">Prohibited Activities</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Using the service for any unlawful purpose</li>
                  <li>Attempting to gain unauthorized access</li>
                  <li>Transmitting malicious software</li>
                  <li>Collecting user information without consent</li>
                  <li>Impersonating another person</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Booking Policies</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">Payments</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>All prices are in USD unless otherwise stated</li>
                  <li>Payment is required at the time of booking</li>
                  <li>We accept major credit cards and PayPal</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900">Cancellations</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Free cancellation up to 48 hours before the tour</li>
                  <li>50% refund for cancellations 24-48 hours before the tour</li>
                  <li>No refund for cancellations less than 24 hours before the tour</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Liability & Disclaimers</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  TravelMate provides the website and services "as is" without any warranty or condition, express, implied or statutory. We do not guarantee the accuracy, completeness, or usefulness of any content.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall TravelMate be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The website and its original content, features, and functionality are owned by TravelMate and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-2 text-gray-700">
                <p>Email: legal@travelmate.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Adventure Street, Travel City, TC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}

export default Terms