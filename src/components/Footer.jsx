import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
      
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Shopping</h3>
          <p className="text-gray-400">
            Your go-to store for all the latest and greatest products.
          </p>
        </div>

      
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/shop" className="text-gray-400 hover:text-white">
                Shop
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

       
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul>
            <li className="mb-2">
              <a href="/faq" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
            <li className="mb-2">
              <a href="/shipping" className="text-gray-400 hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li className="mb-2">
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

    
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
             <FaWhatsapp/>
            </a>
          </div>
        </div>
      </div>

     
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
