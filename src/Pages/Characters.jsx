import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Characters = () => {
  // State variables for search, filters, and reset button
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('Classes');
  const [selectedRarity, setSelectedRarity] = useState('Rarity');
  const [selectedFaction, setSelectedFaction] = useState('Factions');
  const [filtersApplied, setFiltersApplied] = useState(false);

  const characters = [
    {
      name: 'Abyss',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/AbyssCd.webp',
      link: '/Characters/Abyss',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Drifter, Fortitude'],
    },
    {
      name: 'Acambe',
      imgSrc: '/assets/HeroCd-Incoming/AcambeCd.webp',
      link: '/Characters/Acambe',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Drifter'],
    },
    {
      name: 'Agatha',
      imgSrc: '/assets/HeroCd-Incoming/AgathaCd.webp',
      link: '/Characters/Agatha',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Drifter'],
    },
    {
      name: 'Agile Eye',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/Agile-EyeCd.webp',
      link: '/Characters/Agile-Eye',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Vlder'],
    },
    {
      name: 'Alexei',
      imgSrc: '/assets/HeroCd-Out-legendary/AlexeiCd.webp',
      link: '/Characters/Alexei',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Drifter, Aggression'],
    },
    {
      name: 'Angel',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/AngelCd.webp',
      link: '/Characters/Angel',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['	Papal States, Aggression'],
    },
    {
      name: 'Auguste',
      imgSrc: '/assets/HeroCd-Incoming/AugustCd.webp',
      link: '/Characters/Auguste',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['The Union, Aggression'],
    },
    {
      name: 'Ballista',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/BallistaCd.webp',
      link: '/Characters/Ballista',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['The Union, Aggression'],
    },
    {
      name: 'Beryl',
      imgSrc: '/assets/HeroCd-Out-legendary/BerylCd.webp',
      link: '/Characters/Beryl',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Papal States, Aggression, Sword of Convallaria'],
    },
    {
      name: 'Blade',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/BladeCd.webp',
      link: '/Characters/Blade',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['Papal States'],
    },
    {
      name: 'Butterfly',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/ButterflyCd.webp',
      link: '/Characters/Butterfly',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Vlder, Alacrity'],
    },
    {
      name: 'Candlelight',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/CandlelightCd.webp',
      link: '/Characters/Candlelight',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Iria'],
    },
    {
      name: 'Caris',
      imgSrc: '/assets/HeroCd-Incoming/CarisCd.webp',
      link: '/Characters/Caris',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Papal States'],
    },
    {
      name: 'Cocoa',
      imgSrc: '/assets/HeroCd-Out-Legendary/CocoaCd.webp',
      link: '/Characters/Cocoa',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Vlder, Fortitude'],
    },
    {
      name: 'Col',
      imgSrc: '/assets/HeroCd-Out-Legendary/ColCd.webp',
      link: '/Characters/Col',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Papal States, Drifter, Alacrity'],
    },
    {
      name: 'Crimson Falcon',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/Crimson-FalconCd.webp',
      link: '/Characters/Crimson-Falcon',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Dantalion',
      imgSrc: '/assets/HeroCd-Out-Legendary/DantalionCd.webp',
      link: '/Characters/Dantalion',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Iria, Fortitude'],
    },
    {
      name: 'Divine Grace',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/Divine-GraceCd.webp',
      link: '/Characters/Divine-Grace',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Papal States, Discipline'],
    },
    {
      name: 'Edda',
      imgSrc: '/assets/HeroCd-Out-Legendary/EddaCd.webp',
      link: '/Characters/Edda',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Iria, Drifter, Discipline'],
    },
    {
      name: 'Enforcer',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/EnforcerCd.webp',
      link: '/Characters/Enforcer',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Faycal',
      imgSrc: '/assets/HeroCd-Out-Legendary/FaycalCd.webp',
      link: '/Characters/Faycal',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Sword of Convallaria, Iria, Alacrity'],
    },
    {
      name: 'Flame Sorceress',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/Flame-SorceressCd.webp',
      link: '/Characters/Flame-Sorceress',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Drifter, Aggression'],
    },
    {
      name: 'Flare',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/FlareCd.webp',
      link: '/Characters/Flare',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['The Union'],
    },
    {
      name: 'Garcia',
      imgSrc: '/assets/HeroCd-Out-Legendary/GarciaCd.webp',
      link: '/Characters/Garcia',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Papal States, Fortitude'],
    },
    {
      name: 'Gloria',
      imgSrc: '/assets/HeroCd-Out-Legendary/GloriaCd.webp',
      link: '/Characters/Gloria',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'Guzman',
      imgSrc: '/assets/HeroCd-Out-Legendary/GuzmanCd.webp',
      link: '/Characters/Guzman',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Aggression, Drifter'],
    },
    {
      name: 'Hasna',
      imgSrc: '/assets/HeroCd-Incoming/HasnaCd.webp',
      link: '/Characters/Hasna',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Drifter'],
    },
    {
      name: 'Homa',
      imgSrc: '/assets/HeroCd-Incoming/HomaCd.webp',
      link: '/Characters/Homa',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Drifter, Aggression'],
    },
    {
      name: 'Iggy',
      imgSrc: '/assets/HeroCd-Out-Legendary/IggyCd.webp',
      link: '/Characters/Iggy',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Vlder, Alacrity'],
    },
    {
      name: 'Inanna',
      imgSrc: '/assets/HeroCd-Out-Legendary/InannaCd.webp',
      link: '/Characters/Inanna',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Iria, Discipline, Sword of Convallaria'],
    },
    {
      name: 'K.A. Light Conjurer',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/K.A.-Light-ConjurerCd.webp',
      link: '/Characters/Ka-Light-Conjurer',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Rare',
      factions: ['Iria'],
    },
    {
      name: 'Lash',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/LashCd.webp',
      link: '/Characters/Lash',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Papal States, Aggression'],
    },
    {
      name: 'Layla',
      imgSrc: '/assets/HeroCd-Incoming/LaylaCd.webp',
      link: '/Characters/Layla',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria'],
    },
    {
      name: 'Leonide',
      imgSrc: '/assets/HeroCd-Out-Legendary/LeonideCd.webp',
      link: '/Characters/Leonide',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Papal States'],
    },
    {
      name: 'Lightning',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/LightningCd.webp',
      link: '/Characters/Lightning',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'LilyWill',
      imgSrc: '/assets/HeroCd-Out-Legendary/LilyWillCd.webp',
      link: '/Characters/LilyWill',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Vlder, Alacrity'],
    },
    {
      name: 'Magnus',
      imgSrc: '/assets/HeroCd-Out-Legendary/MagnusCd.webp',
      link: '/Characters/Magnus',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria, Fortitude'],
    },
    {
      name: 'Maitha',
      imgSrc: '/assets/HeroCd-Out-Legendary/MaithaCd.webp',
      link: '/Characters/Maitha',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria, Sword of Convallaria'],
    },
    {
      name: 'Might',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/MightCd.webp',
      link: '/Characters/Might',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Epic',
      factions: ['The Union, Discipline'],
    },
    {
      name: 'Miguel',
      imgSrc: '/assets/HeroCd-Out-Legendary/MiguelCd.webp',
      link: '/Characters/Miguel',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Papal States, Drifter, Discipline'],
    },
    {
      name: 'Momo',
      imgSrc: '/assets/HeroCd-Out-Legendary/MomoCd.webp',
      link: '/Characters/Momo',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Vlder, Fortitude, Sword of Convallaria'],
    },
    {
      name: 'Nergal',
      imgSrc: '/assets/HeroCd-Out-Legendary/NergalCd.webp',
      link: '/Characters/Nergal',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Night Raven',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/Night-RavenCd.webp',
      link: '/Characters/Night-Raven',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Iria'],
    },
    {
      name: 'Nightingale',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/NightingaleCd.webp',
      link: '/Characters/Nightingale',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Drifter'],
    },
    {
      name: 'NonoWill',
      imgSrc: '/assets/HeroCd-Out-Legendary/NonoWillCd.webp',
      link: '/Characters/NonoWill',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['	Vlder, Aggression, Sword of Convallaria'],
    },
    {
      name: 'Nungal',
      imgSrc: '/assets/HeroCd-Out-Legendary/NungalCd.webp',
      link: '/Characters/Nungal',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Pamina',
      imgSrc: '/assets/HeroCd-Incoming/PaminaCd.webp',
      link: '/Characters/Pamina',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Iria'],
    },
    {
      name: 'Papal Pikeman',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/Papal-PikemanCd.webp',
      link: '/Characters/Papal-Pikeman',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Rare',
      factions: ['Papal States'],
    },
    {
      name: 'Rawiyah',
      imgSrc: '/assets/HeroCd-Out-Legendary/RawiyahCd.webp',
      link: '/Characters/Rawiyah',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Sword of Convallaria, Iria, Alacrity'],
    },
    {
      name: 'Safiyyah',
      imgSrc: '/assets/HeroCd-Incoming/SafiyyahCd.webp',
      link: '/Characters/Safiyyah',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Iria'],
    },
    {
      name: 'Samantha',
      imgSrc: '/assets/HeroCd-Out-Legendary/SamanthaCd.webp',
      link: '/Characters/Samantha',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Papal States, Aggression'],
    },
    {
      name: 'Schacklulu',
      imgSrc: '/assets/HeroCd-Incoming/SchackluluCd.webp',
      link: '/Characters/Schacklulu',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Vlder'],
    },
    {
      name: 'Simona',
      imgSrc: '/assets/HeroCd-Out-Legendary/SimonaCd.webp',
      link: '/Characters/Simona',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['The Union, Discipline'],
    },
    {
      name: 'Stinger',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/StingerCd.webp',
      link: '/Characters/Stinger',
      classIcon: '/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['Iria'],
    },
    {
      name: 'Stormbreaker',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/StormbreakerCd.webp',
      link: '/Characters/Stormbreaker',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Epic',
      factions: ['Aggression, Drifter, Sword of Convallaria'],
    },
    {
      name: 'Suppression',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/SuppressionCd.webp',
      link: '/Characters/Suppression',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Epic',
      factions: ['Fortitude, Papal States'],
    },
    {
      name: 'Taair',
      imgSrc: '/assets/HeroCd-Incoming/TaairCd.webp',
      link: '/Characters/Taair',
      classIcon: '/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Papal States'],
    },
    {
      name: 'Teadon',
      imgSrc: '/assets/HeroCd-Out-Legendary/TeadonCd.webp',
      link: '/Characters/Teadon',
      classIcon: '/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'Tempest',
      imgSrc: '/assets/HeroCd-Out-gold-or-below/TempestCd.webp',
      link: '/Characters/Tempest',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Epic',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'Tristan',
      imgSrc: '/assets/HeroCd-Incoming/TristanCd.webp',
      link: '/Characters/Tristan',
      classIcon: '/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Aggression, The Union'],
    },
    {
      name: 'Xavier',
      imgSrc: '/assets/HeroCd-Out-Legendary/XavierCd.webp',
      link: '/Characters/Xavier',
      classIcon: '/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Iria, Fortitude'],
    },
  ];

  // Filter functions
  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'Classes' || character.class === selectedClass;
    const matchesRarity = selectedRarity === 'Rarity' || character.rarity === selectedRarity;
    const matchesFaction = selectedFaction === 'Factions' || character.factions.includes(selectedFaction);

    return matchesSearch && matchesClass && matchesRarity && matchesFaction;
  });

  // Update the state and check if any filters are applied
  const updateFilter = (filter, value) => {
    switch (filter) {
      case 'class':
        setSelectedClass(value);
        break;
      case 'rarity':
        setSelectedRarity(value);
        break;
      case 'faction':
        setSelectedFaction(value);
        break;
      default:
        break;
    }
    setFiltersApplied(value !== 'Classes' || value !== 'Rarity' || value !== 'Factions');
  };

  // Reset all filters
  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedClass('Classes');
    setSelectedRarity('Rarity');
    setSelectedFaction('Factions');
    setFiltersApplied(false);
  };

  // Function to get background color based on class
  const getClassColor = (className) => {
    switch (className) {
      case 'Breaker':
        return 'bg-red-500';
      case 'Defender':
        return 'bg-green-500';
      case 'Seeker':
        return 'bg-blue-500';
      case 'Watcher':
        return 'bg-yellow-500';
      case 'Destroyer':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <main>
      <div className="text-white">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-50">Characters Lists:</h1>
      </div>

      {/* Search Bar and Filters */}
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-2 sm:flex-row sm:space-x-4 justify-center items-center my-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-60 p-2 text-black rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 bg-gray-800 text-white rounded-md w-full sm:w-auto"
          value={selectedClass}
          onChange={(e) => updateFilter('class', e.target.value)}
        >
          <option value="Classes">Classes</option>
          <option value="Breaker">Breaker</option>
          <option value="Seeker">Seeker</option>
          <option value="Defender">Defender</option>
          <option value="Watcher">Watcher</option>
          <option value="Destroyer">Destroyer</option>
        </select>

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

        <select
          className="p-2 bg-gray-800 text-white rounded-md w-full sm:w-auto"
          value={selectedFaction}
          onChange={(e) => updateFilter('faction', e.target.value)}
        >
          <option value="Factions">Factions</option>
          <option value="Aggression">Aggression</option>
          <option value="Alacrity">Alacrity</option>
          <option value="Discipline">Discipline</option>
          <option value="Drifter">Drifter</option>
          <option value="Fortitude">Fortitude</option>
          <option value="Iria">Iria</option>
          <option value="Papal states">Papal States</option>
          <option value="Sword of Convallaria">Sword of Convallaria</option>
          <option value="The Union">The Union</option>
          <option value="Vlder">Vlder</option>
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

      {/* Characters List */}
      <div className="text-white grid grid-cols-1 max-sm:grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-6 justify-center mx-4 sm:mx-8 lg:mx-16 m-10">
        {filteredCharacters.map((character, index) => (
          <div
            key={index}
            className={`block p-2 max-w-xs mx-auto border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${getClassColor(character.class)}`}
          >
            <img src={character.classIcon} alt={character.class} className="w-7 h-7 mx-auto" />
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

export default Characters;
