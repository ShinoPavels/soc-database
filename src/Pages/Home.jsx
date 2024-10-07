import React from 'react';

// Example data for most visited pages or random pages
const mostVisitedPages = [
  { name: 'PvP Tier List', link: '/PvPTierList', imageName: 'pvp-tier-list.jpg' },
  { name: 'PvE Tier List', link: '/PvETierList', imageName: 'pve-tier-list.jpg' },
  { name: 'Weapons', link: '/Weapons', imageName: 'weapons.jpg' },
  { name: 'Trinkets', link: '/Trinkets', imageName: 'trinkets.jpg' },
  // Add more pages as needed
];

const HomePage = () => {
  // Randomly pick 3 pages if no visitation data
  const randomPages = mostVisitedPages
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="w-full px-4 lg:px-12 py-8">
      {/* Title */}
      <section className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">Welcome to SoC Database</h1>
      </section>

      {/* Intro */}
      <section className="text-center mb-16">
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto">
          Discover all the information you need on characters, tier lists, weapons, trinkets, and much more for Sword of Convallaria ! Stay up-to-date with the latest banners, redeem codes, and characters guides.
        </p>
      </section>

      {/* Current Banners */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">Current Banners</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 justify-center">
          <img src="\assets\Banners\Acambe-banner.jpg" alt="Current Banner 1" className="w-full lg:w-1/2 object-cover rounded-lg" />
          <img src="\assets\Banners\Dantalion-Magnus-banner.webp" alt="Current Banner 2" className="w-full lg:w-1/2 object-cover rounded-lg" />
        </div>
      </section>

      {/* Incoming Banners */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">Incoming Banners</h2>
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 justify-center">
          <img src="\assets\Banners\Acambe-banner.jpg" alt="Incoming Banner 1" className="w-full lg:w-1/2 object-cover rounded-lg" />
          <img src="\assets\Banners\Dantalion-Magnus-banner.webp" alt="Incoming Banner 2" className="w-full lg:w-1/2 object-cover rounded-lg" />
        </div>
      </section>

      {/* Redeem Code */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">Current Redeem Code</h2>
        <div className="bg-gray-800 text-center py-6 rounded-lg">
          <p className="text-xl text-yellow-300 font-bold">SOCFORCE</p>
          <p className="text-gray-300">x3,000 Elysium Coins</p>
          <p className="text-xl text-yellow-300 font-bold">SOCCREATOR</p>
          <p className="text-gray-300">x500 Tarot Essence</p>
          <p className="text-xl text-yellow-300 font-bold">SOCTLP</p>
          <p className="text-gray-300">x500 Radiant Powder</p>
          <p className="text-xl text-yellow-300 font-bold">SOCMTASHED</p>
          <p className="text-gray-300">x500 Star Particles</p>
          <p className="text-xl text-yellow-300 font-bold">SOCENLAUNCH</p>
          <p className="text-gray-300">Replete Dining Shelf</p>
          <p className="text-xl text-yellow-300 font-bold">SOCTACTICS</p>
          <p className="text-gray-300">x500 Tarot Essence</p>
          <p className="text-xl text-yellow-300 font-bold">SOCUBER</p>
          <p className="text-gray-300">x500 Star Particles</p>
          <p className="text-xl text-yellow-300 font-bold">SOCBRAXO</p>
          <p className="text-gray-300">x500 Radiant Powder</p>
          <p className="text-xl text-yellow-300 font-bold">SOCDORO</p>
          <p className="text-gray-300">x3,000 Elysium Coins</p>
          <p className="text-xl text-yellow-300 font-bold">SOCMLSTN40K</p>
          <p className="text-gray-300">x1000 Common EXP, Phantom Astrolabe</p>
          <p className="text-xl text-yellow-300 font-bold">SOCSEAGIF82T</p>
          <p className="text-gray-300">x1000 Radiant Powder</p>
          <p className="text-xl text-yellow-300 font-bold">SOCSEAUP13</p>
          <p className="text-gray-300">x1000 Radiant Powder</p>
          <p className="text-xl text-yellow-300 font-bold">SOCSEABRAV27O</p>
          <p className="text-gray-300">x1000 Common EXP</p>
          <p className="text-xl text-yellow-300 font-bold">SOCSEACHEE6R</p>
          <p className="text-gray-300">x1000 Common EXP</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
