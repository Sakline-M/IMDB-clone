import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" dark:text-white p-6 max-w-6xl mx-auto w-full h-full flex flex-col justify-end">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Details */}
        <div>
          <h3 className="text-lg font-bold mb-3">About developer</h3>
          <p className="text-sm">
            We are committed to providing the best services to our customers.
            Our mission is to deliver premium products with top-notch customer
            support.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <ul className="text-sm">
            <li>Email: info@pixelwebmakers.com</li>
            <li>whatsapp: +880 1714-461547</li>
            <li>High Tech park, Rajshahi, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </a>
            <a
              href="www.linkedin.com/in/sakline-mostak-672b63285"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024 Roni. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
