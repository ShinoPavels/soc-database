import React from 'react';

const Abyss = () => {
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Abyss</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Abyss\Abyss-Profile.webp" alt="Abyss" title='Abyss' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3050</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">934</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">373</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1334</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">747</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">270</td>
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
                <td className="border border-gray-500 px-4 py-2">Abyss</td>
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
                <td className="border border-gray-500 px-4 py-2">Dawn Maidsevant</td>
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
                <td className="border border-gray-500 px-4 py-2">Destroyer</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Drifter, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Abyss Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Abyss Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Depression-Trait.webp" alt="Depression" title='Depression'></img>
                <h1>Depression :
                    <h2>The effect is improved to: Increases M.ATK by 15%. At the end of the turn, locks onto 2 random enemies within a 4-tile radius of the character to inflict 1 random [Level 2 Attribute Debuffs] for 2 turns.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Erosion.webp" alt="Erosion" title='Erosion'></img>
                <h1>Erosion :
                    <h2>(Magical DMG) Single-target attack Deals 85% DMG and inflicts 2 random [Level 2 Attribute Debuffs] on the target for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Hypnosis.webp" alt="Hypnosis" title='Hypnosis'></img>
                <h1>Hypnosis :
                    <h2>(Magical DMG) Single-target attack Deals 35% DMG and inflicts [Sleep] for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Dark-Withering.webp" alt="Dark Withering" title='Dark Withering'></img>
                <h1>Dark Withering :
                    <h2>(Magical DMG) Inflicts [Life Loss] equal to 50% of M.ATK to all enemies within a 2-tile radius of the target and inflicts [▼Healing Received], lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\NRG-Restoration.webp" alt="NRG Restoration" title='NRG Restoration'></img>
                <h1>NRG Restoration :
                    <h2>(Passive) At the end of the turn, recovers an additional 1 NRG. If NRG is less than 1, recovers another 1 NRG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Corruption.webp" alt="Corruption" title='Corruption'></img>
                <h1>Corruption :
                    <h2>(Passive) At the end of the turn, inflicts 2 random [Level 1 Attribute Debuffs] on 1 random enemy within a 3-tile radius of the character, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Defense-Ranged-Attack.webp" alt="Defense (Ranged Attack)" title='Defense (Ranged Attack)'></img>
                <h1>Defense (Ranged Attack) :
                    <h2>(Reaction) When hit by a ranged attack, the DMG taken is decreased by 25%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Protection-of-Darkness.webp" alt="Protection of Darkness" title='Protection of Darkness'></img>
                <h1>Protection of Darkness :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Before being hit by an active attack, for every [Debuff] on the attacker, decreases DMG taken by an additional 10%, up to 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Dark-Ripple.webp" alt="Dark Ripple" title='Dark Ripple'></img>
                <h1>Dark Ripple :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [🛇Passive Skills] and [🛇Reaction Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Crumbled-Order.webp" alt="Crumbled Order" title='Crumbled Order'></img>
                <h1>Crumbled Order :
                    <h2>(Leader’s Aura) For all [Drifter] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Sealing-Attack.webp" alt="Sealing Attack" title='Sealing Attack'></img>
                <h1>Sealing Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [🛇Passive Skills] on [Injured] targets before attacking, lasting for 2 turns.Invigorating Strike</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Abyss\Invigorating-Strike.webp" alt="Invigorating Strike" title='Invigorating Strike'></img>
                <h1>Invigorating Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and additionally recovers 1 NRG.</h2>
                </h1>
                </td>

            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Abyss;
