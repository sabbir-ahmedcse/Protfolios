import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto text-center">
        {/* Name & Copyright */}
        <p className="text-lg">
          © {new Date().getFullYear()} <span className="font-bold">SABBIR AHMED</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/sabbir-ahmedcse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabbir-ahmedcse/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/MdSabbirRumon2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
