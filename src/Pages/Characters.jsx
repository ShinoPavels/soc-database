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
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/AbyssCd.webp',
      link: '/Characters/Abyss',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Drifter, Fortitude'],
    },
    {
      name: 'Acambe',
      imgSrc: 'public/assets/HeroCd-Incoming/AcambeCd.webp',
      link: '/Characters/Acambe',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Drifter'],
    },
    {
      name: 'Agatha',
      imgSrc: 'public/assets/HeroCd-Incoming/AgathaCd.webp',
      link: '/Characters/Agatha',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Drifter'],
    },
    {
      name: 'Agile Eye',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/Agile-EyeCd.webp',
      link: '/Characters/Agile-Eye',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Vlder'],
    },
    {
      name: 'Alexei',
      imgSrc: 'public/assets/HeroCd-Out-legendary/AlexeiCd.webp',
      link: '/Characters/Alexei',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Drifter, Aggression'],
    },
    {
      name: 'Angel',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/AngelCd.webp',
      link: '/Characters/Angel',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['	Papal States, Aggression'],
    },
    {
      name: 'Auguste',
      imgSrc: 'public/assets/HeroCd-Incoming/AugustCd.webp',
      link: '/Characters/Auguste',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['The Union, Aggression'],
    },
    {
      name: 'Ballista',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/BallistaCd.webp',
      link: '/Characters/Ballista',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['The Union, Aggression'],
    },
    {
      name: 'Beryl',
      imgSrc: 'public/assets/HeroCd-Out-legendary/BerylCd.webp',
      link: '/Characters/Beryl',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Papal States, Aggression, Sword of Convallaria'],
    },
    {
      name: 'Blade',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/BladeCd.webp',
      link: '/Characters/Blade',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['Papal States'],
    },
    {
      name: 'Butterfly',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/ButterflyCd.webp',
      link: '/Characters/Butterfly',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Vlder, Alacrity'],
    },
    {
      name: 'Candlelight',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/CandlelightCd.webp',
      link: '/Characters/Candlelight',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Iria'],
    },
    {
      name: 'Caris',
      imgSrc: 'public/assets/HeroCd-Incoming/CarisCd.webp',
      link: '/Characters/Caris',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Papal States'],
    },
    {
      name: 'Cocoa',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/CocoaCd.webp',
      link: '/Characters/Cocoa',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Vlder, Fortitude'],
    },
    {
      name: 'Col',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/ColCd.webp',
      link: '/Characters/Col',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Papal States, Drifter, Alacrity'],
    },
    {
      name: 'Crimson Falcon',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/Crimson-FalconCd.webp',
      link: '/Characters/Crimson-Falcon',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Dantalion',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/DantalionCd.webp',
      link: '/Characters/Dantalion',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Iria, Fortitude'],
    },
    {
      name: 'Divine Grace',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/Divine-GraceCd.webp',
      link: '/Characters/Divine-Grace',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Papal States, Discipline'],
    },
    {
      name: 'Edda',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/EddaCd.webp',
      link: '/Characters/Edda',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Iria, Drifter, Discipline'],
    },
    {
      name: 'Enforcer',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/EnforcerCd.webp',
      link: '/Characters/Enforcer',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Faycal',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/FaycalCd.webp',
      link: '/Characters/Faycal',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Sword of Convallaria, Iria, Alacrity'],
    },
    {
      name: 'Flame Sorceress',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/Flame-SorceressCd.webp',
      link: '/Characters/Flame-Sorceress',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Drifter, Aggression'],
    },
    {
      name: 'Flare',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/FlareCd.webp',
      link: '/Characters/Flare',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['The Union'],
    },
    {
      name: 'Garcia',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/GarciaCd.webp',
      link: '/Characters/Garcia',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Papal States, Fortitude'],
    },
    {
      name: 'Gloria',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/GloriaCd.webp',
      link: '/Characters/Gloria',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'Guzman',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/GuzmanCd.webp',
      link: '/Characters/Guzman',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Aggression, Drifter'],
    },
    {
      name: 'Hasna',
      imgSrc: 'public/assets/HeroCd-Incoming/HasnaCd.webp',
      link: '/Characters/Hasna',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Drifter'],
    },
    {
      name: 'Homa',
      imgSrc: 'public/assets/HeroCd-Incoming/HomaCd.webp',
      link: '/Characters/Homa',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Drifter, Aggression'],
    },
    {
      name: 'Iggy',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/IggyCd.webp',
      link: '/Characters/Iggy',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Vlder, Alacrity'],
    },
    {
      name: 'Inanna',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/InannaCd.webp',
      link: '/Characters/Inanna',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Iria, Discipline, Sword of Convallaria'],
    },
    {
      name: 'K.A. Light Conjurer',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/K.A.-Light-ConjurerCd.webp',
      link: '/Characters/Ka-Light-Conjurer',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Rare',
      factions: ['Iria'],
    },
    {
      name: 'Lash',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/LashCd.webp',
      link: '/Characters/Lash',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Papal States, Aggression'],
    },
    {
      name: 'Layla',
      imgSrc: 'public/assets/HeroCd-Incoming/LaylaCd.webp',
      link: '/Characters/Layla',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria'],
    },
    {
      name: 'Leonide',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/LeonideCd.webp',
      link: '/Characters/Leonide',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Papal States'],
    },
    {
      name: 'Lightning',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/LightningCd.webp',
      link: '/Characters/Lightning',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'LilyWill',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/LilyWillCd.webp',
      link: '/Characters/LilyWill',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Vlder, Alacrity'],
    },
    {
      name: 'Magnus',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/MagnusCd.webp',
      link: '/Characters/Magnus',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria, Fortitude'],
    },
    {
      name: 'Maitha',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/MaithaCd.webp',
      link: '/Characters/Maitha',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria, Sword of Convallaria'],
    },
    {
      name: 'Might',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/MightCd.webp',
      link: '/Characters/Might',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Epic',
      factions: ['The Union, Discipline'],
    },
    {
      name: 'Miguel',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/MiguelCd.webp',
      link: '/Characters/Miguel',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Papal States, Drifter, Discipline'],
    },
    {
      name: 'Momo',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/MomoCd.webp',
      link: '/Characters/Momo',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Vlder, Fortitude, Sword of Convallaria'],
    },
    {
      name: 'Nergal',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/NergalCd.webp',
      link: '/Characters/Nergal',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Night Raven',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/Night-RavenCd.webp',
      link: '/Characters/Night-Raven',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Epic',
      factions: ['Iria'],
    },
    {
      name: 'Nightingale',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/NightingaleCd.webp',
      link: '/Characters/Nightingale',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Epic',
      factions: ['Drifter'],
    },
    {
      name: 'NonoWill',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/NonoWillCd.webp',
      link: '/Characters/NonoWill',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['	Vlder, Aggression, Sword of Convallaria'],
    },
    {
      name: 'Nungal',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/NungalCd.webp',
      link: '/Characters/Nungal',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Iria, Alacrity'],
    },
    {
      name: 'Pamina',
      imgSrc: 'public/assets/HeroCd-Incoming/PaminaCd.webp',
      link: '/Characters/Pamina',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Iria'],
    },
    {
      name: 'Papal Pikeman',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/Papal-PikemanCd.webp',
      link: '/Characters/Papal-Pikeman',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Rare',
      factions: ['Papal States'],
    },
    {
      name: 'Rawiyah',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/RawiyahCd.webp',
      link: '/Characters/Rawiyah',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Legendary',
      factions: ['Sword of Convallaria, Iria, Alacrity'],
    },
    {
      name: 'Safiyyah',
      imgSrc: 'public/assets/HeroCd-Incoming/SafiyyahCd.webp',
      link: '/Characters/Safiyyah',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Iria'],
    },
    {
      name: 'Samantha',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/SamanthaCd.webp',
      link: '/Characters/Samantha',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Papal States, Aggression'],
    },
    {
      name: 'Schacklulu',
      imgSrc: 'public/assets/HeroCd-Incoming/SchackluluCd.webp',
      link: '/Characters/Schacklulu',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Legendary',
      factions: ['Vlder'],
    },
    {
      name: 'Simona',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/SimonaCd.webp',
      link: '/Characters/Simona',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['The Union, Discipline'],
    },
    {
      name: 'Stinger',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/StingerCd.webp',
      link: '/Characters/Stinger',
      classIcon: 'public/assets/Class-Icon/SeekerIcon.webp',
      class: 'Seeker',
      rarity: 'Epic',
      factions: ['Iria'],
    },
    {
      name: 'Stormbreaker',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/StormbreakerCd.webp',
      link: '/Characters/Stormbreaker',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Epic',
      factions: ['Aggression, Drifter, Sword of Convallaria'],
    },
    {
      name: 'Suppression',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/SuppressionCd.webp',
      link: '/Characters/Suppression',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Epic',
      factions: ['Fortitude, Papal States'],
    },
    {
      name: 'Taair',
      imgSrc: 'public/assets/HeroCd-Incoming/TaairCd.webp',
      link: '/Characters/Taair',
      classIcon: 'public/assets/Class-Icon/WatcherIcon.webp',
      class: 'Watcher',
      rarity: 'Legendary',
      factions: ['Papal States'],
    },
    {
      name: 'Teadon',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/TeadonCd.webp',
      link: '/Characters/Teadon',
      classIcon: 'public/assets/Class-Icon/DefenderIcon.webp',
      class: 'Defender',
      rarity: 'Legendary',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'Tempest',
      imgSrc: 'public/assets/HeroCd-Out-gold-or-below/TempestCd.webp',
      link: '/Characters/Tempest',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
      class: 'Breaker',
      rarity: 'Epic',
      factions: ['The Union, Fortitude'],
    },
    {
      name: 'Tristan',
      imgSrc: 'public/assets/HeroCd-Incoming/TristanCd.webp',
      link: '/Characters/Tristan',
      classIcon: 'public/assets/Class-Icon/DestroyerIcon.webp',
      class: 'Destroyer',
      rarity: 'Legendary',
      factions: ['Aggression, The Union'],
    },
    {
      name: 'Xavier',
      imgSrc: 'public/assets/HeroCd-Out-Legendary/XavierCd.webp',
      link: '/Characters/Xavier',
      classIcon: 'public/assets/Class-Icon/BreakerIcon.webp',
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
      <div className="text-white grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-10 gap-6 justify-center mx-4 sm:mx-8 lg:mx-16 m-10">
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
