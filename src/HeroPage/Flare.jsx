import React from 'react';

const Flare = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Flare</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Flare\Flare-Profile.webp" alt="Flare" title='Flare' className=''></img>

        </div>
        
      </div>
      

      {/* Responsive Tables Container */}
      <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
        {/* Stats Table */}
        <div className="flex-1 h-full">
          <h2 className="text-2xl font-semibold mb-4">Stats</h2>
          <table className="w-full h-full table-auto border-collapse border border-gray-500">
            <tbody>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Rank</td>
                <td className="border border-gray-500 px-4 py-2">Tier 6</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Move</td>
                <td className="border border-gray-500 px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Jump</td>
                <td className="border border-gray-500 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">HP</td>
                <td className="border border-gray-500 px-4 py-2">2899</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1298</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">445</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">911</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">482</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">211</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Character Info Table */}
        <div className="flex-1 h-full">
          <h2 className="text-2xl font-semibold mb-4">Character Info</h2>
          <table className="w-full h-full table-auto border-collapse border border-gray-500">
            <tbody>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Name</td>
                <td className="border border-gray-500 px-4 py-2">Flare</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Light Knight</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Gender</td>
                <td className="border border-gray-500 px-4 py-2">Female</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Rarity</td>
                <td className="border border-gray-500 px-4 py-2">Epic</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Role</td>
                <td className="border border-gray-500 px-4 py-2">Watcher</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">The Union</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Flare Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Flare Skills</h2>
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr>
              <th className="px-4 py-2">Skill</th>
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Skill</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-gray-800 align-left'>
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Dazzling-Light-Trait.webp" alt="Dazzling Light" title='Dazzling Light'></img>
                <h1>Dazzling Light :
                    <h2>Gains [Block]. The character can also block [Magical Attacks]. P.ATK is increased by 15%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Cure-Blow.webp" alt="Cure Blow" title='Cure Blow'></img>
                <h1>Cure Blow :
                    <h2>(Physical DMG) Single-target attack Deals 100% DMG and heals all allies within a 3-tile radius around the character by 40% of P.ATK.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Suppressive-Blow.webp" alt="Suppressive Blow" title='Suppressive Blow'></img>
                <h1>Suppressive Blow :
                    <h2>(Physical DMG) Single-target attack. Deals 110% DMG and inflicts [🛇Reaction Skills], [🛇Active Skills], and [🛇Passive Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Blessing.webp" alt="Blessing" title='Blessing'></img>
                <h1>Blessing :
                    <h2>(Healing) Heals all allies within a 2-tile radius of the target. Recovers 30% of HP and converts 2 random [Debuffs] into [Level 1 Buffs] , lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Dedication.webp" alt="Dedication" title='Dedication'></img>
                <h1>Dedication :
                    <h2>(Passive) After initiating an Active Attack, the character recovers 15% HP for all other allies within a 2-tile radius.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Survivalist.webp" alt="Survivalist" title='Survivalist'></img>
                <h1>Survivalist :
                    <h2>(Passive) If the character is [Dying] after being attacked, recovers 25% as HP. Can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Battlefield-Healing.webp" alt="Battlefield Healing" title='Battlefield Healing'></img>
                <h1>Battlefield Healing :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, heals the ally with the lowest HP percentage within a 2-tile radius of the character by 100% of M.DEF.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Front-Defense.webp" alt="Front Defense" title='Front Defense'></img>
                <h1>Front Defense :
                    <h2>(Reaction) When hit by an active attack from the [front], the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Battle-Flag-of-the-Union.webp" alt="Battle Flag of the Union" title='Battle Flag of the Union'></img>
                <h1>Battle Flag of the Union :
                    <h2>(Leader’s Aura) For all [The Union] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Thunderbolt-Assault.webp" alt="Thunderbolt Assault" title='Thunderbolt Assault'></img>
                <h1>Thunderbolt Assault :
                    <h2>(Physical DMG) Deals 75% [AoE DMG] to all enemies within a 2-tile radius around the character and dispels 2 [Buffs].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Feverish-Attack.webp" alt="Feverish Attack" title='Feverish Attack'></img>
                <h1>Feverish Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and gains 20% [Life Steal].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Flare\Merciful-Strike.webp" alt="Merciful Strike" title='Merciful Strike'></img>
                <h1>Merciful Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases the effect of the next healing skill by 15%.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Flare;
