import React from 'react';
import { FaSmile, FaShoppingCart, FaTruck } from 'react-icons/fa';
import journey from '../assets/images/journey.gif';
import mission from '../assets/images/mission.gif';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 bg-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">About Us</h2>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={journey}
            alt="Our Journey"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Journey</h3>
            <p className="text-gray-700">
              Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Our team is dedicated to ensuring that every shopping experience with us is a positive one.
            </p>
            <p className="text-gray-700 mt-4">
              Our journey began with a simple idea: to make it easier for people to find the products they need without having to leave the comfort of their homes. Over the years, we have grown into a trusted online retailer with a wide range of products, from electronics to home goods and everything in between.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              We believe in the power of community and strive to create a shopping environment that is not only convenient but also enjoyable. Our customers are at the heart of everything we do, and we are constantly working to improve our offerings based on your feedback.
            </p>
            <p className="text-gray-700 mt-4">
              Thank you for choosing us for your shopping needs. We look forward to serving you and helping you find exactly what you're looking for.
            </p>
          </div>
          <img
            src={mission}
            alt="Our Mission"
            className="w-full md:w-1/2 rounded-lg shadow-md order-1 md:order-2"
          />
        </div>
        
        <div className="flex flex-col md:flex-row justify-around text-center">
          <div className="flex flex-col items-center p-6">
            <FaSmile className="text-6xl text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-800">Customer Satisfaction</h4>
            <p className="text-gray-600 mt-2">We strive to exceed your expectations.</p>
          </div>
          <div className="flex flex-col items-center p-6">
            <FaShoppingCart className="text-6xl text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-800">Quality Products</h4>
            <p className="text-gray-600 mt-2">Only the best products for you.</p>
          </div>
          <div className="flex flex-col items-center p-6">
            <FaTruck className="text-6xl text-blue-600 mb-4" />
            <h4 className="text-xl font-bold text-gray-800">Fast Shipping</h4>
            <p className="text-gray-600 mt-2">Get your orders quickly and safely.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
