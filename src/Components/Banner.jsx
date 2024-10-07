import React from 'react';

const Banner = () => {
  return (
    <div className="w-full h-auto">
      {/* Different images based on screen size */}
      <img
        src="\assets\banners.png"
        alt="Large screen banner"
        className="hidden lg:block w-full h-auto"
      />
      <img
        src="\assets\banners.png"
        alt="Medium screen banner"
        className="hidden md:block lg:hidden w-full h-auto"
      />
      <img
        src="\assets\banner-sm.png"
        alt="Small screen banner"
        className="block md:hidden w-full h-auto"
      />
    </div>
  );
};

export default Banner;
