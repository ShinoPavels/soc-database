import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Characters from './Pages/Characters'; // Import other pages you create
import Abyss from './HeroPage/Abyss';
import Acambe from './HeroPage/Acambe';
import Agatha from './HeroPage/Agatha';
import AgileEye from './HeroPage/Agile-Eye';
import Alexei from './HeroPage/Alexei';
import Angel from './HeroPage/Angel';
import Auguste from './HeroPage/Auguste';
import Ballista from './HeroPage/Ballista';
import Beryl from './HeroPage/Beryl';
import Butterfly from './HeroPage/Butterfly';
import Candlelight from './HeroPage/Candlelight';
import Caris from './HeroPage/Caris';
import Cocoa from './HeroPage/Cocoa';
import Col from './HeroPage/Col';
import CrimsonFalcon from './HeroPage/Crimson-Falcon';
import Dantalion from './HeroPage/Dantalion';
import DivineGrace from './HeroPage/Divine-Grace';
import Edda from './HeroPage/Edda';
import Enforcer from './HeroPage/Enforcer';
import Faycal from './HeroPage/Faycal';
import FlameSorceress from './HeroPage/Flame-Sorceress';
import Flare from './HeroPage/Flare';
import Garcia from './HeroPage/Garcia';
import Gloria from './HeroPage/Gloria';
import Guzman from './HeroPage/Guzman';
import Hasna from './HeroPage/Hasna';
import Homa from './HeroPage/Homa';
import Iggy from './HeroPage/Iggy';
import Inanna from './HeroPage/Inanna';
import Lash from './HeroPage/Lash';
import Layla from './HeroPage/Layla';
import Leonide from './HeroPage/Leonide';
import Lightning from './HeroPage/Lightning';
import LilyWill from './HeroPage/LilyWill';
import Magnus from './HeroPage/Magnus';
import Maitha from './HeroPage/Maitha';
import Might from './HeroPage/Might';
import Miguel from './HeroPage/Miguel';
import Momo from './HeroPage/Momo';
import Nergal from './HeroPage/Nergal';
import NightRaven from './HeroPage/Night-Raven';
import Nightingale from './HeroPage/Nightingale';
import NonoWill from './HeroPage/NonoWill';
import Nungal from './HeroPage/Nungal';
import Pamina from './HeroPage/Pamina';
import PapalPikeman from './HeroPage/Papal-Pikeman';
import Rawiyah from './HeroPage/Rawiyah';
import Safiyyah from './HeroPage/Safiyyah';
import Samantha from './HeroPage/Samantha';
import Schacklulu from './HeroPage/Schacklulu';
import Simona from './HeroPage/Simona';
import Stinger from './HeroPage/Stinger';
import Stormbreaker from './HeroPage/Stormbreaker';
import Suppression from './HeroPage/Suppression';
import Taair from './HeroPage/Taair';
import Teadon from './HeroPage/Teadon';
import Tempest from './HeroPage/Tempest';
import Tristan from './HeroPage/Tristan';
import Xavier from './HeroPage/Xavier';
import KaLightConjurer from './HeroPage/Ka-Light-Conjurer';
import PvPTierList from './Pages/PvPTierList';
import PvETierList from './Pages/PvETierList';
import Banner from './Components/Banner';
import WeaponsTierList from './Pages/WeaponsTierList';
import TrincketsTierList from './Pages/TrincketsTierList';
import Weapons from './Pages/Weapons';
import Trinckets from './Pages/Trinckets';
import Blade from './HeroPage/Blade';
import DiffusingPrism from './WeaponPage/DiffusingPrism';
import AntimagicAxe from './WeaponPage/AntimagicAxe';
import ArmorPiercingSpear from './WeaponPage/ArmorPiercingSpear';
import BalancerHeavyAxe from './WeaponPage/BalancerHeavyAxe';
import BrutalAxe from './WeaponPage/BrutalAxe';
import CeremonialKnife from './WeaponPage/CeremonialKnife';
import CornucopiaAxe from './WeaponPage/CornucopiaAxe';
import CornucopiaBlade from './WeaponPage/CornucopiaBlade';
import CornucopiaLongbow from './WeaponPage/CornucopiaLongbow';
import CornucopiaSpear from './WeaponPage/CornucopiaSpear';
import CornucopiaStaff from './WeaponPage/CornucopiaStaff';
import DenialHammer from './WeaponPage/DenialHammer';
import DoomsdayScythe from './WeaponPage/DoomsdayScythe';
import DoubleHeadedHalberd from './WeaponPage/DoubleHeadedHalberd';
import DualDagger from './WeaponPage/DualDagger';
import EverBurningEdge from './WeaponPage/EverBurningEdge';
import FeastAxe from './WeaponPage/FeastAxe';
import FocusStaff from './WeaponPage/FocusStaff';
import GazingOrb from './WeaponPage/GazingOrb';
import GuardiansWill from './WeaponPage/GuardiansWill';
import HollowAxe from './WeaponPage/HollowAxe';
import IrianCombatBow from './WeaponPage/IrianCombatBow';
import LongbowOfMartyrs from './WeaponPage/LongbowOfMartyrs';
import MeleeMegaCrossbow from './WeaponPage/MeleeMegaCrossbow';
import MeteorLine from './WeaponPage/MeteorLine';
import NamelessStaff from './WeaponPage/NamelessStaff';
import NewbornBlade from './WeaponPage/NewbornBlade';
import PendantHalberd from './WeaponPage/PendantHalberd';
import ReorganizedCube from './WeaponPage/ReorganizedCube';
import SenatorsSwiftSword from './WeaponPage/SenatorsSwiftSword';
import SkeletonSpear from './WeaponPage/SkeletonSpear';
import SkeletonStaff from './WeaponPage/SkeletonStaff';
import SpiteBroom from './WeaponPage/SpiteBroom';
import StarRaidCrossbow from './WeaponPage/StarRaidCrossbow';
import StarrySkyHeritage from './WeaponPage/StarrySkyHeritage';
import SteelCrossbow from './WeaponPage/SteelCrossbow';
import TheSilentGuard from './WeaponPage/TheSilentGuard';
import TuningHammer from './WeaponPage/TuningHammer';
import VoidStab from './WeaponPage/VoidStab';
import WhaleHunter from './WeaponPage/WhaleHunter';
import BeheadingMachete from './WeaponPage/BeheadingMachete';
import AugustsOldNotes from './TricketPage/AugustsOldNotes';
import BerserkIncense from './TricketPage/BerserkIncense';
import BurningFlint from './TricketPage/BurningFlint';
import CoexistArmor from './TricketPage/CoexistArmor';
import CoolingPowder from './TricketPage/CoolingPowder';
import CrystalBurstArmor from './TricketPage/CrystalBurstArmor';
import DisasterBottle from './TricketPage/DisasterBottle';
import EvergreenPendent from './TricketPage/EvergreenPendent';
import ExplodingCrystal from './TricketPage/ExplodingCrystal';
import FancyHat from './TricketPage/FancyHat';
import FlyingBladeArmGuard from './TricketPage/FlyingBladeArmGuard';
import HuntersIntuition from './TricketPage/HuntersIntuition';
import InkTotem from './TricketPage/InkTotem';
import LuxiteGreatshield from './TricketPage/LuxiteGreatshield';
import MavericksCloak from './TricketPage/MavericksCloak';
import MistNecklace from './TricketPage/MistNecklace';
import MysteriousDeflexionDevice from './TricketPage/MysteriousDeflexionDevice';
import MysteryGuardian from './TricketPage/MysteryGuardian';
import OriginHourglass from './TricketPage/OriginHourglass';
import RejectionMask from './TricketPage/RejectionMask';
import ShroudOfVoid from './TricketPage/ShroudOfVoid';
import SpaceTimeRing from './TricketPage/SpaceTimeRing';
import SpringPill from './TricketPage/SpringPill';
import ThornyRing from './TricketPage/ThornyRing';
import TrueLens from './TricketPage/TrueLens';
import UniqueCoat from './TricketPage/UniqueCoat';
import SpringTonic from './TricketPage/SpringTonic';
import Tarot from './Pages/Tarot';
import TarotTierList from './Pages/TarotTierList';
import CharactersGuides from './Pages/CharactersGuides';
import Builder from './Pages/Builder';
import HomePage from './Pages/Home';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen flex flex-col">
        <Header />
        <Banner />
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content area, routed pages */}
          <div className="flex-1 p-8 mt-16">
            <Routes>

              <Route path="/" element={<HomePage />} />

              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/Abyss" element={<Abyss />} /> {/* Route for Abyss */}
              <Route path="/characters/Acambe" element={<Acambe />} />
              <Route path="/characters/Agatha" element={<Agatha />} />
              <Route path="/characters/Agile-Eye" element={<AgileEye />} />
              <Route path="/characters/Alexei" element={<Alexei />} />
              <Route path="/characters/Angel" element={<Angel />} />
              <Route path="/characters/Auguste" element={<Auguste />} />
              <Route path="/characters/Ballista" element={<Ballista />} />
              <Route path="/characters/Beryl" element={<Beryl />} />
              <Route path="/characters/Blade" element={<Blade />} />
              <Route path="/characters/Butterfly" element={<Butterfly />} />
              <Route path="/characters/Candlelight" element={<Candlelight />} />
              <Route path="/characters/Caris" element={<Caris />} />
              <Route path="/characters/Cocoa" element={<Cocoa />} />
              <Route path="/characters/Col" element={<Col />} />
              <Route path="/characters/Crimson-Falcon" element={<CrimsonFalcon />} />
              <Route path="/characters/Dantalion" element={<Dantalion />} />
              <Route path="/characters/Divine-Grace" element={<DivineGrace />} />
              <Route path="/characters/Edda" element={<Edda />} />
              <Route path="/characters/Enforcer" element={<Enforcer />} />
              <Route path="/characters/Faycal" element={<Faycal />} />
              <Route path="/characters/Flame-Sorceress" element={<FlameSorceress />} />
              <Route path="/characters/Flare" element={<Flare />} />
              <Route path="/characters/Garcia" element={<Garcia />} />
              <Route path="/characters/Gloria" element={<Gloria />} />
              <Route path="/characters/Guzman" element={<Guzman />} />
              <Route path="/characters/Hasna" element={<Hasna />} />
              <Route path="/characters/Homa" element={<Homa />} />
              <Route path="/characters/Iggy" element={<Iggy />} />
              <Route path="/characters/Inanna" element={<Inanna />} />
              <Route path="/characters/Ka-Light-Conjurer" element={<KaLightConjurer />} />
              <Route path="/characters/Lash" element={<Lash />} />
              <Route path="/characters/Layla" element={<Layla />} />
              <Route path="/characters/Leonide" element={<Leonide />} />
              <Route path="/characters/Lightning" element={<Lightning />} />
              <Route path="/characters/LilyWill" element={<LilyWill />} />
              <Route path="/characters/Magnus" element={<Magnus />} />
              <Route path="/characters/Maitha" element={<Maitha />} />
              <Route path="/characters/Might" element={<Might />} />
              <Route path="/characters/Miguel" element={<Miguel />} />
              <Route path="/characters/Momo" element={<Momo />} />
              <Route path="/characters/Nergal" element={<Nergal />} />
              <Route path="/characters/Night-Raven" element={<NightRaven />} />
              <Route path="/characters/Nightingale" element={<Nightingale />} />
              <Route path="/characters/NonoWill" element={<NonoWill />} />
              <Route path="/characters/Nungal" element={<Nungal />} />
              <Route path="/characters/Pamina" element={<Pamina />} />
              <Route path="/characters/Papal-Pikeman" element={<PapalPikeman />} />
              <Route path="/characters/Rawiyah" element={<Rawiyah />} />
              <Route path="/characters/Safiyyah" element={<Safiyyah />} />
              <Route path="/characters/Samantha" element={<Samantha />} />
              <Route path="/characters/Schacklulu" element={<Schacklulu />} />
              <Route path="/characters/Simona" element={<Simona />} />
              <Route path="/characters/Stinger" element={<Stinger />} />
              <Route path="/characters/Stormbreaker" element={<Stormbreaker />} />
              <Route path="/characters/Suppression" element={<Suppression />} />
              <Route path="/characters/Taair" element={<Taair />} />
              <Route path="/characters/Teadon" element={<Teadon />} />
              <Route path="/characters/Tempest" element={<Tempest />} />
              <Route path="/characters/Tristan" element={<Tristan />} />
              <Route path="/characters/Xavier" element={<Xavier />} />
              
              <Route path="/PvPTierList" element={<PvPTierList />} />
              <Route path="/PvETierList" element={<PvETierList />} />
              <Route path="/Weapons" element={<Weapons/>} />
              <Route path="/WeaponPage/AntimagicAxe" element={<AntimagicAxe/>} />
              <Route path="/WeaponPage/ArmorPiercingSpear" element={<ArmorPiercingSpear/>} />
              <Route path="/WeaponPage/BalancerHeavyAxe" element={<BalancerHeavyAxe/>} />
              <Route path="/WeaponPage/BeheadingMachete" element={<BeheadingMachete/>} />
              <Route path="/WeaponPage/BrutalAxe" element={<BrutalAxe/>} />
              <Route path="/WeaponPage/CeremonialKnife" element={<CeremonialKnife/>} />
              <Route path="/WeaponPage/CornucopiaAxe" element={<CornucopiaAxe/>} />
              <Route path="/WeaponPage/CornucopiaBlade" element={<CornucopiaBlade/>} />
              <Route path="/WeaponPage/CornucopiaLongbow" element={<CornucopiaLongbow/>} />
              <Route path="/WeaponPage/CornucopiaSpear" element={<CornucopiaSpear/>} />
              <Route path="/WeaponPage/CornucopiaStaff" element={<CornucopiaStaff/>} />
              <Route path="/WeaponPage/DenialHammer" element={<DenialHammer/>} />
              <Route path="/WeaponPage/DiffusingPrism" element={<DiffusingPrism/>} />
              <Route path="/WeaponPage/DoomsdayScythe" element={<DoomsdayScythe/>} />
              <Route path="/WeaponPage/DoubleHeadedHalberd" element={<DoubleHeadedHalberd/>} />
              <Route path="/WeaponPage/DualDagger" element={<DualDagger/>} />
              <Route path="/WeaponPage/EverBurningEdge" element={<EverBurningEdge/>} />
              <Route path="/WeaponPage/FeastAxe" element={<FeastAxe/>} />
              <Route path="/WeaponPage/FocusStaff" element={<FocusStaff/>} />
              <Route path="/WeaponPage/GazingOrb" element={<GazingOrb/>} />
              <Route path="/WeaponPage/GuardiansWill" element={<GuardiansWill/>} />
              <Route path="/WeaponPage/HollowAxe" element={<HollowAxe/>} />
              <Route path="/WeaponPage/IrianCombatBow" element={<IrianCombatBow/>} />
              <Route path="/WeaponPage/LongbowOfMartyrs" element={<LongbowOfMartyrs/>} />
              <Route path="/WeaponPage/MeleeMegaCrossbow" element={<MeleeMegaCrossbow/>} />
              <Route path="/WeaponPage/MeteorLine" element={<MeteorLine/>} />
              <Route path="/WeaponPage/NamelessStaff" element={<NamelessStaff/>} />
              <Route path="/WeaponPage/NewbornBlade" element={<NewbornBlade/>} />
              <Route path="/WeaponPage/PendantHalberd" element={<PendantHalberd/>} />
              <Route path="/WeaponPage/ReorganizedCube" element={<ReorganizedCube/>} />
              <Route path="/WeaponPage/SenatorsSwiftSword" element={<SenatorsSwiftSword/>} />
              <Route path="/WeaponPage/SkeletonSpear" element={<SkeletonSpear/>} />
              <Route path="/WeaponPage/SkeletonStaff" element={<SkeletonStaff/>} />
              <Route path="/WeaponPage/SpiteBroom" element={<SpiteBroom/>} />
              <Route path="/WeaponPage/StarRaidCrossbow" element={<StarRaidCrossbow/>} />
              <Route path="/WeaponPage/StarrySkyHeritage" element={<StarrySkyHeritage/>} />
              <Route path="/WeaponPage/SteelCrossbow" element={<SteelCrossbow/>} />
              <Route path="/WeaponPage/TheSilentGuard" element={<TheSilentGuard/>} />
              <Route path="/WeaponPage/TuningHammer" element={<TuningHammer/>} />
              <Route path="/WeaponPage/VoidStab" element={<VoidStab/>} />
              <Route path="/WeaponPage/WhaleHunter" element={<WhaleHunter/>} />

              <Route path="/WeaponsTierList" element={<WeaponsTierList />} />

              <Route path="/Trinckets" element={<Trinckets />} />
              <Route path="/TrincketPage/AugustsOldNotes" element={<AugustsOldNotes/>} />
              <Route path="/TrincketPage/BerserkIncense" element={<BerserkIncense/>} />
              <Route path="/TrincketPage/BurningFlint" element={<BurningFlint/>} />
              <Route path="/TrincketPage/CoexistArmor" element={<CoexistArmor/>} />
              <Route path="/TrincketPage/CoolingPowder" element={<CoolingPowder/>} />
              <Route path="/TrincketPage/CrystalBurstArmor" element={<CrystalBurstArmor/>} />
              <Route path="/TrincketPage/DisasterBottle" element={<DisasterBottle/>} />
              <Route path="/TrincketPage/EvergreenPendent" element={<EvergreenPendent/>} />
              <Route path="/TrincketPage/ExplodingCrystal" element={<ExplodingCrystal/>} />
              <Route path="/TrincketPage/FancyHat" element={<FancyHat/>} />
              <Route path="/TrincketPage/FlyingBladeArmGuard" element={<FlyingBladeArmGuard/>} />
              <Route path="/TrincketPage/HuntersIntuition" element={<HuntersIntuition/>} />
              <Route path="/TrincketPage/InkTotem" element={<InkTotem/>} />
              <Route path="/TrincketPage/LuxiteGreatshield" element={<LuxiteGreatshield/>} />
              <Route path="/TrincketPage/MavericksCloak" element={<MavericksCloak/>} />
              <Route path="/TrincketPage/MistNecklace" element={<MistNecklace/>} />
              <Route path="/TrincketPage/MysteriousDeflexionDevice" element={<MysteriousDeflexionDevice/>} />
              <Route path="/TrincketPage/MysteryGuardian" element={<MysteryGuardian/>} />
              <Route path="/TrincketPage/OriginHourglass" element={<OriginHourglass/>} />
              <Route path="/TrincketPage/RejectionMask" element={<RejectionMask/>} />
              <Route path="/TrincketPage/ShroudOfVoid" element={<ShroudOfVoid/>} />
              <Route path="/TrincketPage/SpaceTimeRing" element={<SpaceTimeRing/>} />
              <Route path="/TrincketPage/SpringPill" element={<SpringPill/>} />
              <Route path="/TrincketPage/SpringTonic" element={<SpringTonic/>} />
              <Route path="/TrincketPage/ThornyRing" element={<ThornyRing/>} />
              <Route path="/TrincketPage/TrueLens" element={<TrueLens/>} />
              <Route path="/TrincketPage/UniqueCoat" element={<UniqueCoat/>} />
              
              <Route path="/TrincketsTierList" element={<TrincketsTierList />} />
              <Route path="/Tarot" element={<Tarot />} />
              <Route path="/TarotTierList" element={<TarotTierList />} />

              <Route path="/CharactersGuides" element={<CharactersGuides />} />
              <Route path="/Builder" element={<Builder />} />

            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
