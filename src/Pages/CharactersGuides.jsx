import React from 'react';

const CharactersGuides = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center space-y-12 px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url("/path-to-your-image/construction-background.jpg")',
        }}
      ></div>

      {/* WIP Message */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          We're working hard to bring you this feature! Stay tuned for something
          amazing.
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="relative z-10 w-11/12 md:w-2/3 lg:w-1/2">
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: '40%' }} // Progress bar percentage
          ></div>
        </div>
        <p className="text-center text-gray-400 mt-2">40% complete</p>
      </div>

      {/* Footer Teaser */}
      <div className="relative z-10 text-center">
        <p className="text-sm text-gray-400">
          This page will be ready soon! Keep an eye out for updates.
        </p>
      </div>

      {/* Optional fun element - animated icon */}
      <div className="relative z-10">
        <img
          src="\assets\BerylLoading.webp"
          alt="Teasing icon"
          className="w-32 h-32 animate-bounce"
        />
      </div>
    </div>
  );
};

export default CharactersGuides;
