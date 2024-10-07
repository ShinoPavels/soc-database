import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <button
        onClick={scrollToTop}
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
