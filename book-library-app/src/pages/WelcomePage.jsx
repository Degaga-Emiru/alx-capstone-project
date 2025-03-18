import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Importing  motion from framer-motion this used to animation for paragraph , head and button
import welcomeBackground from "../assets/welcome-background.jpeg";

const WelcomePage = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-white"
      style={{
        backgroundImage: `url(${welcomeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // to make the background image is fixed when scrolling vertical
      }} >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-4xl text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Discover a World of Knowledge at Your Fingertips
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
          transition={{ duration: 1, delay: 0.5 }} // Duration and delay
          className="text-base md:text-lg mb-6" >
          Welcome to Book Library! A gateway to endless knowledge and imagination. Whether you’re a curious learner, an avid reader, or a casual browser, our library helps you explore millions of books effortlessly. Search, borrow, and enjoy your favorite books anytime, anywhere. From timeless classics to the latest bestsellers, your reading journey begins here. Discover, learn, and grow with us.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-md hover:bg-blue-600 focus:outline-none"
        >  Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomePage;
