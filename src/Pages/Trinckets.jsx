import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Trinckets = () => {
  // State variables for search, filters, and reset button
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('Rarity');
  const [filtersApplied, setFiltersApplied] = useState(false);

  const TrincketPage = [
    {
      name: 'Augusts Old Notes',
      imgSrc: '/assets/Gear-Legendary/Augusts-Old-Notes-Cd.webp',
      link: '/TrincketPage/AugustsOldNotes',
      rarity: 'Legendary',
    },
    
    {
      name: 'Berserk Incense',
      imgSrc: '/assets/Gear-Legendary/Berserk-Incense-Cd.webp',
      link: '/TrincketPage/BerserkIncense',
      rarity: 'Legendary',
    },
    
    {
      name: 'Burning Flint',
      imgSrc: '/assets/Gear-Legendary/Burning-Flint-Cd.webp',
      link: '/TrincketPage/BurningFlint',
      rarity: 'Legendary',
    },
    
    {
      name: 'Coexist Armor',
      imgSrc: '/assets/Gear-Gold-or-Below/Coexist-Armor-Cd.webp',
      link: '/TrincketPage/CoexistArmor',
      rarity: 'Epic',
    },
    
    {
      name: 'Cooling Powder',
      imgSrc: '/assets/Gear-Legendary/Cooling-Powder-Cd.webp',
      link: '/TrincketPage/CoolingPowder',
      rarity: 'Legendary',
    },
    
    {
      name: 'Crystal Burst Armor',
      imgSrc: '/assets/Gear-Legendary/Crystal-Burst-Armor-Cd.webp',
      link: '/TrincketPage/CrystalBurstArmor',
      rarity: 'Legendary',
    },
    
    {
      name: 'Disaster Bottle',
      imgSrc: '/assets/Gear-Gold-or-Below/Disaster-Bottle-Cd.webp',
      link: '/TrincketPage/DisasterBottle',
      rarity: 'Epic',
    },
    
    {
      name: 'Evergreen Pendent',
      imgSrc: '/assets/Gear-Gold-or-Below/Evergreen-Pendent-Cd.webp',
      link: '/TrincketPage/EvergreenPendent',
      rarity: 'Epic',
    },
    
    {
      name: 'Exploding Crystal',
      imgSrc: '/assets/Gear-Gold-or-Below/Exploding-Crystal-Cd.webp',
      link: '/TrincketPage/ExplodingCrystal',
      rarity: 'Epic',
    },
    

    {
      name: 'Fancy Hat',
      imgSrc: '/assets/Gear-Legendary/Fancy-Hat-Cd.webp',
      link: '/TrincketPage/FancyHat',
      rarity: 'Legendary',
    },
    
    {
      name: 'Flying Blade Arm Guard',
      imgSrc: '/assets/Gear-Legendary/Flying-Blade-Arm-Guard-Cd.webp',
      link: '/TrincketPage/FlyingBladeArmGuard',
      rarity: 'Legendary',
    },
    
    {
      name: 'Hunter\'s-Intuition',
      imgSrc: '/assets/Gear-Legendary/Hunters-Intuition-Cd.webp',
      link: '/TrincketPage/HuntersIntuition',
      rarity: 'Legendary',
    },
    
    {
      name: 'Ink Totem',
      imgSrc: '/assets/Gear-Gold-or-Below/Ink-Totem-Cd.webp',
      link: '/TrincketPage/InkTotem',
      rarity: 'Epic',
    },
    
    {
      name: 'Luxite Greatshield',
      imgSrc: '/assets/Gear-Legendary/Luxite-Greatshield-Cd.webp',
      link: '/TrincketPage/LuxiteGreatshield',
      rarity: 'Legendary',
    },
    
    {
      name: 'Mavericks Cloak',
      imgSrc: '/assets/Gear-Legendary/Mavericks-Cloak-Cd.webp',
      link: '/TrincketPage/MavericksCloak',
      rarity: 'Legendary',
    },
    
    {
      name: 'Mist Necklace',
      imgSrc: '/assets/Gear-Gold-or-Below/Mist-Necklace-Cd.webp',
      link: '/TrincketPage/MistNecklace',
      rarity: 'Epic',
    },
    
    {
      name: 'Mysterious Deflexion Device',
      imgSrc: '/assets/Gear-Legendary/Mysterious-Deflexion-Device-Cd.webp',
      link: '/TrincketPage/MysteriousDeflexionDevice',
      rarity: 'Legendary',
    },
    
    {
      name: 'Mystery Guardian',
      imgSrc: '/assets/Gear-Legendary/Mystery-Guardian-Cd.webp',
      link: '/TrincketPage/MysteryGuardian',
      rarity: 'Legendary',
    },
    
    {
      name: 'Origin Hourglass',
      imgSrc: '/assets/Gear-Legendary/Origin-Hourglass-Cd.webp',
      link: '/TrincketPage/OriginHourglass',
      rarity: 'Legendary',
    },
    
    {
      name: 'Rejection Mask',
      imgSrc: '/assets/Gear-Gold-or-Below/Rejection-Mask-Cd.webp',
      link: '/TrincketPage/RejectionMask',
      rarity: 'Epic',
    },
    
    {
      name: 'Shroud of Void',
      imgSrc: '/assets/Gear-Legendary/Shroud-Of-Void-Cd.webp',
      link: '/TrincketPage/ShroudOfVoid',
      rarity: 'Legendary',
    },
    
    {
      name: 'Space Time Ring',
      imgSrc: '/assets/Gear-Legendary/Space-Time-Ring-Cd.webp',
      link: '/TrincketPage/SpaceTimeRing',
      rarity: 'Legendary',
    },
    
    {
      name: 'Spring Pill',
      imgSrc: '/assets/Gear-Legendary/Spring-Pill-Cd.webp',
      link: '/TrincketPage/SpringPill',
      rarity: 'Legendary',
    },
    
    {
      name: 'Spring Tonic',
      imgSrc: '/assets/Gear-Gold-or-Below/Spring-Tonic-Cd.png',
      link: '/TrincketPage/SpringTonic',
      rarity: 'Epic',
    },
    
    
    {
      name: 'Thorny Ring',
      imgSrc: '/assets/Gear-Gold-or-Below/Thorny-Ring-Cd.webp',
      link: '/TrincketPage/ThornyRing',
      rarity: 'Epic',
    },
    
    {
      name: 'True Lens',
      imgSrc: '/assets/Gear-Legendary/True-Lens-Cd.webp',
      link: '/TrincketPage/TrueLens',
      rarity: 'Legendary',
    },
    
    {
      name: 'Unique Coat',
      imgSrc: '/assets/Gear-Gold-or-Below/Unique-Coat-Cd.webp',
      link: '/TrincketPage/UniqueCoat',
      rarity: 'Epic',
    },
    
  ];

  // Filter functions
  const filteredTrincketPage = TrincketPage.filter((character) => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = selectedRarity === 'Rarity' || character.rarity === selectedRarity;

    return matchesSearch && matchesRarity;
  });

  // Update the state and check if any filters are applied
  const updateFilter = (filter, value) => {
    switch (filter) {
      case 'rarity':
        setSelectedRarity(value);
        break;
      default:
        break;
    }
    setFiltersApplied(value !== 'Rarity');
  };

  // Reset all filters
  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedRarity('Rarity');
    setFiltersApplied(false);
  };

  const getRarityColor = (rarityName) => {
    switch (rarityName) {
      case 'Epic':
        return 'bg-gradient-to-br from-yellow-400 to-orange-500';
      case 'Legendary':
        return 'bg-gradient-to-br from-purple-300 to-purple-900';
    }
  };

  return (
    <main>
      <div className="text-white">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-50">Trinckets Lists:</h1>
      </div>

      {/* Search Bar and Filters */}
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center items-center my-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-60 p-2 text-black rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 bg-gray-800 text-white rounded-md w-full sm:w-auto"
          value={selectedRarity}
          onChange={(e) => updateFilter('rarity', e.target.value)}
        >
          <option value="Rarity">Rarity</option>
          <option value="Legendary">Legendary</option>
          <option value="Epic">Epic</option>
          <option value="Rare">Rare</option>
        </select>

        {/* Reset Button */}
        {filtersApplied && (
          <button
            className="p-2 bg-red-500 text-white rounded-md w-full sm:w-auto mt-2 sm:mt-0"
            onClick={resetAllFilters}
          >
            Reset All
          </button>
        )}
      </div>

      {/* TrincketPage List */}
      <div className="text-white grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-12 gap-6 justify-center mx-4 sm:mx-8 lg:mx-16 m-10">
        {filteredTrincketPage.map((character, index) => (
          <div
            key={index}
            className={`block p-2 max-w-xs mx-auto border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${getRarityColor(character.rarity)}`}
          >
            <Link to={character.link}>
              <img className="mx-auto mt-2" src={character.imgSrc} alt={character.name} title={character.name} />
            </Link>
            <h1 className="text-center my-2 text-sm sm:text-xs font-bold border border-gray-300 bg-gray-600">
              {character.name}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Trinckets;
