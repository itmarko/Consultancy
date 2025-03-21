import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/3 md:w-7/12 w-full">
            <div className="flex justify-start">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/privacy-policy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="hover:text-gray-400"
                  >
                    Terms And Condition
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-5/12 mt-4 md:mt-0">
            <div className="text-center">
              <ul className="flex justify-center space-x-6">
                <li>
                  <a
                    href="https://www.facebook.com/marko.software"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    <FiFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/itmarko.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/marko-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-500"
                  >
                    <FiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 w-full mt-4 md:mt-0 text-center lg:text-right">
            <p className="text-lg text-gray-400">
              Copyright © {new Date().getFullYear()} Marko. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
