import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Weapons = () => {
  // State variables for search, filters, and reset button
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('Rarity');
  const [filtersApplied, setFiltersApplied] = useState(false);

  const WeaponPage = [
    {
      name: 'Antimagic Axe',
      imgSrc: '/assets/Gear-Gold-or-Below/Antimagic-Axe-Cd.webp',
      link: '/WeaponPage/AntimagicAxe',
      rarity: 'Epic',
    },
    
    {
      name: 'Armor Piercing Spear',
      imgSrc: '/assets/Gear-Gold-or-Below/Armor-Piercing-Spear-Cd.webp',
      link: '/WeaponPage/ArmorPiercingSpear',
      rarity: 'Epic',
    },
    
    {
      name: 'Balancer Heavy Axe',
      imgSrc: '/assets/Gear-Gold-or-Below/Balancer-Heavy-Axe-Cd.webp',
      link: '/WeaponPage/BalancerHeavyAxe',
      rarity: 'Epic',
    },
    
    {
      name: 'Beheading Machete',
      imgSrc: '/assets/Gear-Legendary/Beheading-Machete-Cd.png',
      link: '/WeaponPage/BeheadingMachete',
      rarity: 'Legendary',
    },
    
    {
      name: 'Brutal Axe',
      imgSrc: '/assets/Gear-Legendary/Brutal-Axe-Cd.webp',
      link: '/WeaponPage/BrutalAxe',
      rarity: 'Legendary',
    },
    
    {
      name: 'Ceremonial Knife',
      imgSrc: '/assets/Gear-Gold-or-Below/Ceremonial-Knife-Cd.webp',
      link: '/WeaponPage/CeremonialKnife',
      rarity: 'Epic',
    },
    
    {
      name: 'Cornucopia Axe',
      imgSrc: '/assets/Gear-Legendary/Cornucopia-Axe-Cd.webp',
      link: '/WeaponPage/CornucopiaAxe',
      rarity: 'Legendary',
    },
    
    {
      name: 'Cornucopia Blade',
      imgSrc: '/assets/Gear-Legendary/Cornucopia-Dagger-Cd.webp',
      link: '/WeaponPage/CornucopiaBlade',
      rarity: 'Legendary',
    },
    
    {
      name: 'Cornucopia Longbow',
      imgSrc: '/assets/Gear-Legendary/Cornucopia-Longbow-Cd.webp',
      link: '/WeaponPage/CornucopiaLongbow',
      rarity: 'Legendary',
    },
    
    {
      name: 'Cornucopia Spear',
      imgSrc: '/assets/Gear-Legendary/Cornucopia-Spear-Cd.webp',
      link: '/WeaponPage/CornucopiaSpear',
      rarity: 'Legendary',
    },
    
    {
      name: 'Cornucopia Staff',
      imgSrc: '/assets/Gear-Legendary/Cornucopia-Staff-Cd.webp',
      link: '/WeaponPage/CornucopiaStaff',
      rarity: 'Legendary',
    },
    
    {
      name: 'Denial Hammer',
      imgSrc: '/assets/Gear-Legendary/Denial-Hammer-Cd.webp',
      link: '/WeaponPage/DenialHammer',
      rarity: 'Legendary',
    },
    
    {
      name: 'Diffusing Prism',
      imgSrc: '/assets/Gear-Legendary/Diffusing-Prism-Cd.webp',
      link: '/WeaponPage/DiffusingPrism',
      rarity: 'Legendary',
    },
    
    {
      name: 'Doomsday Scythe',
      imgSrc: '/assets/Gear-Legendary/Doomsday-Scythe-Cd.webp',
      link: '/WeaponPage/DoomsdayScythe',
      rarity: 'Legendary',
    },
    
    {
      name: 'Double Headed Halberd',
      imgSrc: '/assets/Gear-Legendary/Double-Headed-Halberd-Cd.webp',
      link: '/WeaponPage/DoubleHeadedHalberd',
      rarity: 'Legendary',
    },
    
    {
      name: 'Dual-Dagger',
      imgSrc: '/assets/Gear-Gold-or-Below/Dual-Dagger-Cd.webp',
      link: '/WeaponPage/DualDagger',
      rarity: 'Epic',
    },
    
    {
      name: 'Ever-Burning Edge',
      imgSrc: '/assets/Gear-Legendary/EverBurning-Edge-Cd.webp',
      link: '/WeaponPage/EverBurningEdge',
      rarity: 'Legendary',
    },
    
    {
      name: 'Feast Axe',
      imgSrc: '/assets/Gear-Legendary/Feast-Axe-Cd.webp',
      link: '/WeaponPage/FeastAxe',
      rarity: 'Legendary',
    },
    
    {
      name: 'Focus Staff',
      imgSrc: '/assets/Gear-Legendary/Focus-Staff-Cd.webp',
      link: '/WeaponPage/FocusStaff',
      rarity: 'Legendary',
    },
    
    {
      name: 'Gazing Orb',
      imgSrc: '/assets/Gear-Gold-or-Below/Gazing-Orb-Cd.webp',
      link: '/WeaponPage/GazingOrb',
      rarity: 'Epic',
    },
    
    {
      name: 'Guardian\'s Will',
      imgSrc: '/assets/Gear-Legendary/Guardians-Will-Cd.webp',
      link: '/WeaponPage/GuardiansWill',
      rarity: 'Legendary',
    },
    
    {
      name: 'Hollow Axe',
      imgSrc: '/assets/Gear-Legendary/Hollow-Axe-Cd.webp',
      link: '/WeaponPage/HollowAxe',
      rarity: 'Legendary',
    },
    
    {
      name: 'Irian Combat Bow',
      imgSrc: '/assets/Gear-Legendary/Iria-Combat-Bow-Cd.webp',
      link: '/WeaponPage/IrianCombatBow',
      rarity: 'Legendary',
    },
    
    {
      name: 'Longbow of Martyrs',
      imgSrc: '/assets/Gear-Legendary/Longbow-of-Martyrs-Cd.webp',
      link: '/WeaponPage/LongbowOfMartyrs',
      rarity: 'Legendary',
    },
    
    {
      name: 'Melee Mega Crossbow',
      imgSrc: '/assets/Gear-Legendary/Melee-Mega-Crossbow-Cd.webp',
      link: '/WeaponPage/MeleeMegaCrossbow',
      rarity: 'Legendary',
    },
    
    {
      name: 'Meteor Line',
      imgSrc: '/assets/Gear-Legendary/Meteor-Line-Cd.webp',
      link: '/WeaponPage/MeteorLine',
      rarity: 'Legendary',
    },

    {
      name: 'Nameless Staff',
      imgSrc: '/assets/Gear-Legendary/Nameless-Staff-Cd.webp',
      link: '/WeaponPage/NamelessStaff',
      rarity: 'Legendary',
    },
    
    {
      name: 'Newborn Blade',
      imgSrc: '/assets/Gear-Legendary/Newborn-Blade-Cd.webp',
      link: '/WeaponPage/NewbornBlade',
      rarity: 'Legendary',
    },
    
    {
      name: 'Pendant Halberd',
      imgSrc: '/assets/Gear-Legendary/Pendant-Halberd-Cd.webp',
      link: '/WeaponPage/PendantHalberd',
      rarity: 'Legendary',
    },
    
    {
      name: 'Reorganized Cube',
      imgSrc: '/assets/Gear-Legendary/Reorganized-Cube-Cd.webp',
      link: '/WeaponPage/ReorganizedCube',
      rarity: 'Legendary',
    },
    
    {
      name: 'Senator\'s Swift Sword',
      imgSrc: '/assets/Gear-Legendary/Senators-Swift-Sword-Cd.webp',
      link: '/WeaponPage/SenatorsSwiftSword',
      rarity: 'Legendary',
    },
    
    {
      name: 'Skeleton Spear',
      imgSrc: '/assets/Gear-Legendary/Skeleton-Spear-Cd.webp',
      link: '/WeaponPage/SkeletonSpear',
      rarity: 'Legendary',
    },
    
    {
      name: 'Skeleton Staff',
      imgSrc: '/assets/Gear-Legendary/Skeleton-Staff-Cd.webp',
      link: '/WeaponPage/SkeletonStaff',
      rarity: 'Legendary',
    },
    
    {
      name: 'Spite Broom',
      imgSrc: '/assets/Gear-Legendary/Spite-Broom-Cd.webp',
      link: '/WeaponPage/SpiteBroom',
      rarity: 'Legendary',
    },
    
    {
      name: 'Star-Raid Crossbow',
      imgSrc: '/assets/Gear-Legendary/Star-Raid-Crossbow-Cd.webp',
      link: '/WeaponPage/StarRaidCrossbow',
      rarity: 'Legendary',
    },
    
    {
      name: 'Starry Sky Heritage',
      imgSrc: '/assets/Gear-Legendary/Stary-Sky-Heritage-Cd.webp',
      link: '/WeaponPage/StarrySkyHeritage',
      rarity: 'Legendary',
    },
    
    {
      name: 'Steel Crossbow',
      imgSrc: '/assets/Gear-Gold-or-Below/Steel-Crossbow-Cd.webp',
      link: '/WeaponPage/SteelCrossbow',
      rarity: 'Epic',
    },
    
    {
      name: 'The-Silent-Guard',
      imgSrc: '/assets/Gear-Legendary/The-Silent-Guard-Cd.webp',
      link: '/WeaponPage/TheSilentGuard',
      rarity: 'Legendary',
    },
    
    {
      name: 'Tuning Hammer',
      imgSrc: '/assets/Gear-Legendary/Tuning-Hammer-Cd.webp',
      link: '/WeaponPage/TuningHammer',
      rarity: 'Legendary',
    },
    
    {
      name: 'Void Stab',
      imgSrc: '/assets/Gear-Legendary/Void-Stab-Cd.webp',
      link: '/WeaponPage/VoidStab',
      rarity: 'Legendary',
    },

    {
      name: 'Whale Hunter',
      imgSrc: '/assets/Gear-Legendary/Whale-Hunter-Cd.webp',
      link: '/WeaponPage/WhaleHunter',
      rarity: 'Legendary',
    },
    
  ];

  // Filter functions
  const filteredWeaponPage = WeaponPage.filter((character) => {
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
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-50">Weapons Lists:</h1>
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

      {/* WeaponPage List */}
      <div className="text-white grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-12 gap-6 justify-center mx-4 sm:mx-8 lg:mx-16 m-10">
        {filteredWeaponPage.map((character, index) => (
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

export default Weapons;
