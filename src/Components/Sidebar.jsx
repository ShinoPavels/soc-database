import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false); // State to track dragging
  const [startY, setStartY] = useState(0); // State to track starting Y position
  const [scrollTop, setScrollTop] = useState(0); // State to track sidebar's scrollTop

  // Close the sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      toggleSidebar(false); // Close sidebar
    }
  };

  // Enable click outside to close the sidebar
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle mouse down for drag scrolling (desktop)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY); // Set the starting Y position
    setScrollTop(sidebarRef.current.scrollTop); // Set the starting scrollTop value
    e.preventDefault();
  };

  // Handle mouse move for drag scrolling (desktop)
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Only move if dragging
    const deltaY = startY - e.clientY; // Calculate the difference in Y positions
    sidebarRef.current.scrollTop = scrollTop + deltaY; // Update the scroll position
    e.preventDefault();
  };

  // Handle mouse up to stop drag scrolling (desktop)
  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging when mouse is released
  };

  // Handle touch start for drag scrolling (mobile)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY); // Set the starting Y position for touch
    setScrollTop(sidebarRef.current.scrollTop); // Set the starting scrollTop value for touch
  };

  // Handle touch move for drag scrolling (mobile)
  const handleTouchMove = (e) => {
    if (!isDragging) return; // Only move if dragging
    const deltaY = startY - e.touches[0].clientY; // Calculate the difference in Y positions
    sidebarRef.current.scrollTop = scrollTop + deltaY; // Update the scroll position
  };

  // Handle touch end to stop drag scrolling (mobile)
  const handleTouchEnd = () => {
    setIsDragging(false); // Stop dragging when touch ends
  };

  // Add the event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <aside
      ref={sidebarRef}
      className={`${
        isOpen ? 'w-64 backdrop-blur-lg' : 'w-16'
      } fixed top-0 left-0 h-full bg-transparent z-20 transition-all duration-300 overflow-hidden`} // overflow-hidden ensures no visible scrollbars
      onMouseDown={handleMouseDown} // Attach the mouse down event
      onTouchStart={handleTouchStart} // Attach the touch start event
    >
      <div className="px-4 py-8 flex flex-col space-y-4">
        {/* Toggle button */}
        <button
          onClick={() => toggleSidebar(!isOpen)}
          className="text-white p-2 focus:outline-none"
        >
          {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>

        {/* Sidebar Links */}
        {isOpen && (
          <nav className="space-y-4 text-white">
            <Link to="/" className="block py-2 hover:bg-gray-800 rounded-md">
              Home
            </Link>
            <Link
              to="/characters"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Characters
            </Link>
            <Link
              to="/PvPTierList"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              PvP Tier List
            </Link>
            <Link
              to="/PvETierList"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              PvE Tier List
            </Link>
            <Link
              to="/Weapons"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Weapons
            </Link>
            <Link
              to="/WeaponsTierList"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Weapons Tier List
            </Link>
            <Link
              to="/Trinckets"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Trinckets
            </Link>
            <Link
              to="/TrincketsTierList"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Trinckets Tier List
            </Link>
            <Link to="/tarot" className="block py-2 hover:bg-gray-800 rounded-md">
              Tarot
            </Link>
            <Link to="/TarotTierList" className="block py-2 hover:bg-gray-800 rounded-md">
              Tarot Tier List
            </Link>
            <Link
              to="/CharactersGuides"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Characters Guides
            </Link>
            <Link
              to="/Builder"
              className="block py-2 hover:bg-gray-800 rounded-md"
            >
              Builder
            </Link>
          </nav>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
