import React from "react";
import "./style.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light pt-5 px-6">
      <div className="container mx-auto">
        <div className="row text-center text-md-start">
          
          {/* Popular Locations */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="font-bold">POPULAR LOCATIONS</h5>
            <ul className="list-unstyled text-gray-600">
              <li><a href="#">Kolkata</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Pune</a></li>
            </ul>
          </div>

          {/* Trending Locations */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="font-bold">TRENDING LOCATIONS</h5>
            <ul className="list-unstyled text-gray-600">
              <li><a href="#">Bhubaneshwar</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Chandigarh</a></li>
              <li><a href="#">Nashik</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="font-bold">ABOUT US</h5>
            <ul className="list-unstyled text-gray-600">
              <li><a href="#">Tech@Art-station</a></li>
            </ul>
          </div>

          {/* OLX Info */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="font-bold">Art-station</h5>
            <ul className="list-unstyled text-gray-600">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Legal & Privacy</a></li>
              <li><a href="#">Vulnerability Program</a></li>
            </ul>
          </div>

          {/* Social Media & Apps */}
          <div className="col-12 text-center mt-4">
            <h5 className="font-bold">FOLLOW US</h5>
            <div className="d-flex justify-content-center gap-3 text-gray-700">
              <FaFacebookF size={20} className="cursor-pointer" />
              <FaInstagram size={20} className="cursor-pointer" />
              <FaTwitter size={20} className="cursor-pointer" />
              <FaPlay size={20} className="cursor-pointer" />
            </div>
            <div className="mt-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36 cursor-pointer"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
