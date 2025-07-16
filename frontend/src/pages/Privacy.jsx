import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At TravelMate, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and payment information</li>
                  <li>Travel preferences and history</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>IP addresses</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Usage data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Process and manage your bookings</li>
                <li>Provide customer support</li>
                <li>Send administrative information</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our services</li>
                <li>Protect against fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>Service providers and partners</li>
                <li>Legal authorities when required by law</li>
                <li>Third-party payment processors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2 text-gray-700">
                <p>Email: privacy@travelmate.com</p>
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

export default Privacy