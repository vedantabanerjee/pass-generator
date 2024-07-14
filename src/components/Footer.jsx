import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} vedanta
        </p>
        <div className='flex'>
        <p className='text-gray-300 pr-10'>version 1.0.3</p>
          <a
            href="https://github.com/vedantabanerjee/pass-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-400 transition duration-300 pr-5"
          >
            <FaGithub className="mr-2" />
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;