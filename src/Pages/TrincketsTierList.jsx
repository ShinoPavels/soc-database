import React from 'react';
import { Link } from 'react-router-dom';

const TrincketsTierList = () => {
  // Tier and category labels
  const tiers = ["T0", "T1", "T2", "T3", "T4", "T5"];

  return (
    <div className="text-white p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-darkgreen-500">
        Trinckets Tier List
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg">
          <tbody>
            {tiers.map((tier, tierIndex) => (
              <tr key={tierIndex}>
                <td
                  className={`border border-gray-700 px-4 py-3 lg:px-6 lg:py-4 text-sm lg:text-base text-center bg-gradient-to-br from-purple-600 to-indigo-600`}
                >
                  {tier}
                </td>
                
                      {tier === 'T0' ? (
                        <>
                        <div className='flex'>
                          <div className="card">
                            <Link to='/TrincketPage/AugustsOldNotes'><img src="public\assets\Gear-Legendary\Augusts-Old-Notes-Cd.webp" alt="Augusts Old Notes" className="image" /></Link>
                            <p className="unit-name">Augusts Old Notes</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/DisasterBottle'><img src="public\assets\Gear-Gold-or-Below\Disaster-Bottle-Cd.webp" alt="Disaster Bottle" className="image" /></Link>
                            <p className="unit-name">Disaster Bottle</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/FlyingBladeArmGuard'><img src="public\assets\Gear-Legendary\Flying-Blade-Arm-Guard-Cd.webp" alt="Flying Blade Arm Guard" className="image" /></Link>
                            <p className="unit-name">Flying Blade Arm Guard</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/HuntersIntuition'><img src="public\assets\Gear-Legendary\Hunters-Intuition-Cd.webp" alt="Hunter\'s-Intuition" className="image" /></Link>
                            <p className="unit-name">Hunter's Intuition</p>
                          </div>
                          
                        </div>
                        </>
                      
                      ) : tier === 'T1' ? (
                        <>
                        <div className='flex'>
                          <div className="card">
                            <Link to='/TrincketPage/BerserkIncense'><img src="public\assets\Gear-Legendary\Berserk-Incense-Cd.webp" alt="Berserk Incense" className="image" /></Link>
                            <p className="unit-name">Berserk Incense</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/EvergreenPendent'><img src="public\assets\Gear-Gold-or-Below\Evergreen-Pendent-Cd.webp" alt="Evergreen Pendent" className="image" /></Link>
                            <p className="unit-name">Evergreen Pendent</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/FancyHat'><img src="public\assets\Gear-Legendary\Fancy-Hat-Cd.webp" alt="Fancy Hat" className="image" /></Link>
                            <p className="unit-name">Fancy Hat</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/LuxiteGreatshield'><img src="public\assets\Gear-Legendary\Luxite-Greatshield-Cd.webp" alt="Luxite Greatshield" className="image" /></Link>
                            <p className="unit-name">Luxite Greatshield</p>
                          </div>
                          
                        </div>
                        </>
                      
                      ) : tier === 'T2' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/TrincketPage/TrueLens'><img src="public\assets\Gear-Legendary\True-Lens-Cd.webp" alt="True Lens" className="image" /></Link>
                            <p className="unit-name">True Lens</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/BurningFlint'><img src="public\assets\Gear-Legendary\Burning-Flint-Cd.webp" alt="Burning Flint" className="image" /></Link>
                            <p className="unit-name">Burning Flint</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/SpringPill'><img src="public\assets\Gear-Legendary\Spring-Pill-Cd.webp" alt="Spring Pill" className="image" /></Link>
                            <p className="unit-name">Spring Pill</p>
                          </div>
                          
                        </div>
                          </>
                      
                      ) : tier === 'T3' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/TrincketPage/CoolingPowder'><img src="public\assets\Gear-Legendary\Cooling-Powder-Cd.webp" alt="Cooling Powder" className="image" /></Link>
                            <p className="unit-name">Cooling Powder</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/OriginHourglass'><img src="public\assets\Gear-Legendary\Origin-Hourglass-Cd.webp" alt="Origin-Hourglass" className="image" /></Link>
                            <p className="unit-name">Origin Hourglass</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/ShroudOfVoid'><img src="public\assets\Gear-Legendary\Shroud-of-Void-Cd.webp" alt="Shroud of Void" className="image" /></Link>
                            <p className="unit-name">Shroud of Void</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/SpaceTimeRing'><img src="public\assets\Gear-Legendary\Space-Time-Ring-Cd.webp" alt="Space Time Ring" className="image" /></Link>
                            <p className="unit-name">Space Time Ring</p>
                          </div>
                        
                        </div>
                          </>
                      
                      ) : tier === 'T4' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/TrincketPage/CoexistArmor'><img src="public\assets\Gear-Gold-or-Below\Coexist-Armor-Cd.webp" alt="Coexist Armor" className="image" /></Link>
                            <p className="unit-name">Coexist Armor</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/InkTotem'><img src="public\assets\Gear-Gold-or-Below\Ink-Totem-Cd.webp" alt="Ink Totem" className="image" /></Link>
                            <p className="unit-name">Ink Totem</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/MysteriousDeflexionDevice'><img src="public\assets\Gear-Legendary\Mysterious-Deflexion-Device-Cd.webp" alt="Mysterious Deflexion Device" className="image" /></Link>
                            <p className="unit-name">Mysterious Deflexion Device</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/RejectionMask'><img src="public\assets\Gear-Gold-or-Below\Rejection-Mask-Cd.webp" alt="Rejection Mask" className="image" /></Link>
                            <p className="unit-name">Rejection Mask</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/UniqueCoat'><img src="public\assets\Gear-Gold-or-Below\Unique-Coat-Cd.webp" alt="Unique Coat" className="image" /></Link>
                            <p className="unit-name">Unique Coat</p>
                          </div>

                        </div>
                          </>
                      
                      ) : tier === 'T5' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/TrincketPage/MistNecklace'><img src="public\assets\Gear-Gold-or-Below\Mist-Necklace-Cd.webp" alt="Mist Necklace" className="image" /></Link>
                            <p className="unit-name">Mist Necklace</p>
                          </div>
                          <div className="card">
                            <Link to='/TrincketPage/SpringTonic'><img src="public\assets\Gear-Gold-or-Below\Spring-Tonic-Cd.png" alt="Spring Tonic" className="image" /></Link>
                            <p className="unit-name">Spring Tonic</p>
                          </div>
                          
                        </div>
                          </>
                      
                      ) : (
                        <span></span>
                      )}
                    
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrincketsTierList;
