import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify'

const Contact = ()  => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [agreed, setAgreed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the privacy policy');
      return;
    }
    
    // Handle form submission here
    try {
      const response = await axios.post(`http://localhost:5000/contact`, formData);
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setAgreed(false);
        toast.success('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#ecf4fd] py-12 px-4 sm:px-6 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your surveillance capabilities? Contact us today to schedule a demo or learn more about Aksha
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-[#ecf4fd] rounded-3xl border-3 border-gray-300 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Book your 1:1 Demo now</h2>

            <div className='w-full border-2 border-gray-300 mb-10'></div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </a>{' '}
                  and consent to the processing of my data
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Send
              </button>
            </div>
          </div>

          {/* Right Column - Location and Contact Info */}
          <div className="space-y-8">
            {/* Find Us Section */}
            <div className="bg-[#ecf4fd] rounded-lg border-3 border-gray-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Find Us</h3>
                </div>
                
                {/* Map/Image placeholder */}
                <div className="mb-4 h-48 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-2 bg-blue-500 bg-opacity-50 rounded-full flex items-center justify-center">
                        <MapPin className="h-8 w-8" />
                      </div>
                      <p className="text-sm font-medium">Interactive Map View</p>
                    </div>
                  </div>
                  {/* Network pattern overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="cyan" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      <circle cx="200" cy="100" r="30" fill="none" stroke="cyan" strokeWidth="2"/>
                      <circle cx="200" cy="100" r="4" fill="cyan"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      3, VIJAY SALES - BANER, Ideas to Impacts Building, Pollod Farm Lane,
                    </p>
                    <p className="text-sm text-gray-600">
                      Near, Baner Rd, Pune, Maharashtra 411045
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#ecf4fd] rounded-lg border-3 border-gray-300 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-2" />
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Us at</p>
                    <p className="text-sm text-gray-600">aksha@algoanalytics.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Call us at</p>
                    <p className="text-sm text-gray-600">xxxxxxxxxx</p>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Support Hours</p>
                    <p className="text-sm text-gray-600">Monday-Friday: 9:30am -8pm</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-4">Connect With Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;