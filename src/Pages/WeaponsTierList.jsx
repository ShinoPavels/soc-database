import React from 'react';
import { Link } from 'react-router-dom';

const WeaponsTierList = () => {
  // Tier and category labels
  const tiers = ["T0", "T1", "T2", "T3", "T4", "T5"];

  return (
    <div className="text-white p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500">
        Weapons Tier List
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
                            <Link to='/WeaponPage/NewbornBlade'><img src="\assets\Gear-Legendary\Newborn-Blade-Cd.webp" alt="NewbornBlade" className="image" /></Link>
                            <p className="unit-name">Newborn Blade</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/VoidStab'><img src="\assets\Gear-Legendary\Void-Stab-Cd.webp" alt="Void Stab" className="image" /></Link>
                            <p className="unit-name">Void Stab</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/HollowAxe'><img src="\assets\Gear-Legendary\Hollow-Axe-Cd.webp" alt="Hollow Axe" className="image" /></Link>
                            <p className="unit-name">Hollow Axe</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/CornucopiaBlade'><img src="\assets\Gear-Legendary\Cornucopia-Dagger-Cd.webp" alt="Cornucopia Blade" className="image" /></Link>
                            <p className="unit-name">Cornucopia Blade</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/TuningHammer'><img src="\assets\Gear-Legendary\Tuning-Hammer-Cd.webp" alt="Tuning Hammer" className="image" /></Link>
                            <p className="unit-name">Tuning Hammer</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/BrutalAxe'><img src="\assets\Gear-Legendary\Brutal-Axe-Cd.webp" alt="Brutal Axe" className="image" /></Link>
                            <p className="unit-name">Brutal Axe</p>
                          </div>
                        </div>
                        </>
                      
                      ) : tier === 'T1' ? (
                        <>
                        <div className='flex'>
                          <div className="card">
                            <Link to='/WeaponPage/StarRaidCrossbow'><img src="\assets\Gear-Legendary\Star-Raid-Crossbow-Cd.webp" alt="Star-Raid Crossbow" className="image" /></Link>
                            <p className="unit-name">Star-Raid Crossbow</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/SpiteBroom'><img src="\assets\Gear-Legendary\Spite-Broom-Cd.webp" alt="Resentment Broom" className="image" /></Link>
                            <p className="unit-name">Spite Broom</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/NewbornBlade'><img src="\assets\Gear-Legendary\Longbow-of-Martyrs-Cd.webp" alt="Longbow of Martyrs" className="image" /></Link>
                            <p className="unit-name">Longbow of Martyrs</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/FocusStaff'><img src="\assets\Gear-Legendary\Focus-Staff-Cd.webp" alt="Focus Wand" className="image" /></Link>
                            <p className="unit-name">Focus Staff</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/StarrySkyHeritage'><img src="\assets\Gear-Legendary\Stary-Sky-Heritage-Cd.webp" alt="Starry Sky Heritage" className="image" /></Link>
                            <p className="unit-name">Starry Sky Heritage</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/DoubleHeadedHalberd'><img src="\assets\Gear-Legendary\Double-Headed-Halberd-Cd.webp" alt="Double-Sided Halberd" className="image" /></Link>
                            <p className="unit-name">Double-Headed Halberd</p>
                          </div>
                        </div>
                        </>
                      
                      ) : tier === 'T2' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/WeaponPage/TheSilentGuard'><img src="\assets\Gear-Legendary\The-Silent-Guard-Cd.webp" alt="The Silent Guard" className="image" /></Link>
                            <p className="unit-name">The Silent Guard</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/PendantHalberd'><img src="\assets\Gear-Legendary\Pendant-Halberd-Cd.webp" alt="Pendant Halberd" className="image" /></Link>
                            <p className="unit-name">Pendant Halberd</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/SkeletonSpear'><img src="\assets\Gear-Legendary\Skeleton-Spear-Cd.webp" alt="Skeleton Spear" className="image" /></Link>
                            <p className="unit-name">Skeleton Spear</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/MeteorLine'><img src="\assets\Gear-Legendary\Meteor-Line-Cd.webp" alt="Meteor Line" className="image" /></Link>
                            <p className="unit-name">Meteor Line</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/DiffusingPrism'><img src="\assets\Gear-Legendary\Diffusing-Prism-Cd.webp" alt="Diffusing Prism" className="image" /></Link>
                            <p className="unit-name">Diffusing Prism</p>
                          </div>
                        </div>
                          </>
                      
                      ) : tier === 'T3' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/WeaponPage/FeastAxe'><img src="\assets\Gear-Legendary\Feast-Axe-Cd.webp" alt="Feast Axe" className="image" /></Link>
                            <p className="unit-name">Feast Axe</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/NamelessStaff'><img src="\assets\Gear-Legendary\Nameless-Staff-Cd.webp" alt="Nameless Staff" className="image" /></Link>
                            <p className="unit-name">Nameless Staff</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/SenatorsSwiftSword'><img src="\assets\Gear-Legendary\Senators-Swift-Sword-Cd.webp" alt="Senator Swift Sword" className="image" /></Link>
                            <p className="unit-name">Senator's Swift Sword</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/CornucopiaStaff'><img src="\assets\Gear-Legendary\Cornucopia-Staff-Cd.webp" alt="Cornucopia Staff" className="image" /></Link>
                            <p className="unit-name">Cornucopia Staff</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/IrianCombatBow'><img src="\assets\Gear-Legendary\Iria-Combat-Bow-Cd.webp" alt="Irian Combat Bow" className="image" /></Link>
                            <p className="unit-name">Irian Combat Bow</p>
                          </div>
                        </div>
                          </>
                      
                      ) : tier === 'T4' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/WeaponPage/MeleeMegaCrossbow'><img src="\assets\Gear-Legendary\Melee-Mega-Crossbow-Cd.webp" alt="Melee Mega Crossbow" className="image" /></Link>
                            <p className="unit-name">Melee Mega Crossbow</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/WhaleHunter'><img src="\assets\Gear-Legendary\Whale-Hunter-Cd.webp" alt="Whale Hunter" className="image" /></Link>
                            <p className="unit-name">Whale Hunter</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/BeheadingMachete'><img src="\assets\Gear-Legendary\Beheading-Machete-Cd.png" alt="Beheading Machete" className="image" /></Link>
                            <p className="unit-name">Beheading Machete</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/GuardiansWill'><img src="\assets\Gear-Legendary\Guardians-Will-Cd.webp" alt="Guardian's WIll" className="image" /></Link>
                            <p className="unit-name">Guardian's Will</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/DenialHammer'><img src="\assets\Gear-Legendary\Denial-Hammer-Cd.webp" alt="Denial Hammer" className="image" /></Link>
                            <p className="unit-name">Denial Hammer</p>
                          </div>
                          <div className="card">
                          <Link to='/WeaponPage/SkeletonStaff'><img src="\assets\Gear-Legendary\Skeleton-Staff-Cd.webp" alt="Skeleton Staff" className="image" /></Link>
                            <p className="unit-name">Skeleton Staff</p>
                          </div>
                        </div>
                          </>
                      
                      ) : tier === 'T5' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <Link to='/WeaponPage/CornucopiaAxe'><img src="\assets\Gear-Legendary\Cornucopia-Axe-Cd.webp" alt="Cornucopia-Axe" className="image" /></Link>
                            <p className="unit-name">Cornucopia Axe</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/EverBurningEdge'><img src="\assets\Gear-Legendary\Everburning-Edge-Cd.webp" alt="Ever-Burning Blade" className="image" /></Link>
                            <p className="unit-name">Everburning Edge</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/CornucopiaLongbow'><img src="\assets\Gear-Legendary\Cornucopia-Longbow-Cd.webp" alt="Cornucopia Longbow" className="image" /></Link>
                            <p className="unit-name">Cornucopia Longbow</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/DoomsdayScythe'><img src="\assets\Gear-Legendary\Doomsday-Scythe-Cd.webp" alt="Doomsday Scythe" className="image" /></Link>
                            <p className="unit-name">Doomsday Scythe</p>
                          </div>
                          <div className="card">
                            <Link to='/WeaponPage/CornucopiaSpear'><img src="\assets\Gear-Legendary\Cornucopia-Spear-Cd.webp" alt="Cornucopia Spear" className="image" /></Link>
                            <p className="unit-name">Cornucopia Spear</p>
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

export default WeaponsTierList;
