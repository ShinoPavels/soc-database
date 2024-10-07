import React from 'react';

const NightRaven = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Night Raven</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Night-Raven-Profile.webp" alt="Night-Raven" title='Night-Raven' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3394</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">964</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">417</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1375</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">631</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">121</td>
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
                <td className="border border-gray-500 px-4 py-2">Night Raven</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Dark Knight</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Night-Raven Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Night Raven Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Mysterious-Will-Trait.webp" alt="Mysterious Will" title='Mysterious Will'></img>
                <h1>Mysterious Will :
                    <h2>ATK increases by 20%. When attacking an enemy with [The Hanged Mens Mark] DMG increases by 30%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Eroding-Darkness.webp" alt="Eroding Darkness" title='Eroding Darkness'></img>
                <h1>Eroding Darkness :
                    <h2>(Magical DMG) Deals 55% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts 2 random [Level 2 Attribute Debuffs] on them, lasting for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Erosion.webp" alt="Erosion" title='Erosion'></img>
                <h1>Erosion :
                    <h2>(Magical DMG) Single-target attack Deals 85% DMG and inflicts 2 random [Level 2 Attribute Debuffs] on the target for 2 turns.</h2>
                </h1>
                </td>      

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Life-Devourer.webp" alt="Life Devourer" title='Life Devourer'></img>
                <h1>Life Devourer :
                    <h2>(Magical DMG) Single-target attack. Deals 150% DMG. After attacking, gains 45% [Life Steal].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Corruption.webp" alt="Corruption" title='Corruption'></img>
                <h1>Corruption :
                    <h2>(Passive) At the end of the turn, inflicts 2 random [Level 1 Attribute Debuffs] on 1 random enemy within a 3-tile radius of the character, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Settlement-of-the-Hanged-Men.webp" alt="Settlement of the Hanged Men" title='Settlement of the Hanged Men'></img>
                <h1>Settlement of the Hanged Men :
                    <h2>(Passive) After an attack, if the target is [Dying] and has [The Hanged Mens Mark], deals an additional [Piercing DMG] equal to 30% of the target‘s HP. When DMG is dealt, the mark will be removed.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Protection-of-Darkness.webp" alt="Protection of Darkness" title='Protection of Darkness'></img>
                <h1>Protection of Darkness :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Before being hit by an active attack, for every [Debuff] on the attacker, decreases DMG taken by an additional 10%, up to 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Glare.webp" alt="Glare" title='Glare'></img>
                <h1>Glare :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, inflicts [▼DMG 2] on the attacker for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Dark-Ripple.webp" alt="Dark Ripple" title='Dark Ripple'></img>
                <h1>Dark Ripple :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [🛇Passive Skills] and [🛇Reaction Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Darkest-Annihilation.webp" alt="Darkest Annihilation" title='Darkest Annihilation'></img>
                <h1>Darkest Annihilation :
                    <h2>(Magical DMG) Single-target attack Deals 180% DMG. Before attacking, the character gains [Armor Piercing] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Hypnotic-Attack.webp" alt="Hypnotic Attack" title='Hypnotic Attack'></img>
                <h1>Hypnotic Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and grants a 30% chance to inflict [Sleep] on the target for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Night-Raven\Charged-Attack.webp" alt="Charged Attack" title='Charged Attack'></img>
                <h1>Charged Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NightRaven;
