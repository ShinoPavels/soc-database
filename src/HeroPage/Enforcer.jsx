import React from 'react';

const Enforcer = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Enforcer</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Enforcer-Profile.webp" alt="Enforcer" title='Enforcer' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3609</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1548</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">554</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1079</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">445</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">182</td>
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
                <td className="border border-gray-500 px-4 py-2">Enforcer</td>
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
                <td className="border border-gray-500 px-4 py-2">H.M. Warrior</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Gender</td>
                <td className="border border-gray-500 px-4 py-2">Male</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Enforcer Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Enforcer Skills</h2>
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
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Strong-Will.webp" alt="Strong Will" title='Strong Will'></img>
                <h1>Strong Will :
                    <h2>Increases Movement by 1 tile. At the end of the turn, locks onto the closest enemy within a 5-tile radius of the character to inflict [The Hanged Mens Mark]. When attacked by an enemy with [The Hanged Men’s Mark], takes 20% less DMG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Brutal-Blow.webp" alt="Brutal Blow" title='Brutal Blow'></img>
                <h1>Brutal Blow :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. Before attacking, the character gains [▲P.DEF 2] and [▲M.DEF 2] for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\NRG-Depleting-Blow.webp" alt="NRG-Depleting Blow" title='NRG-Depleting Blow'></img>
                <h1>NRG-Depleting Blow :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG and depletes all of the target’s NRG.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Luxite-Dust-Bomb.webp" alt="Luxite-Dust Bomb" title='Luxite-Dust Bomb'></img>
                <h1>Luxite-Dust Bomb :
                    <h2>(Magical DMG) Deals 50% [AoE DMG] to all enemies within a 1-tile radius of the target and inflicts 2 random [Level 1 Attribute Debuffs] on them, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\MDEF-Command.webp" alt="M.DEF Command" title='M.DEF Command'></img>
                <h1>M.DEF Command :
                    <h2>(Aura) Increases M.DEF by 30% for other allies within 2 tiles around the character.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Concussion.webp" alt="Concussion" title='Concussion'></img>
                <h1>Concussion :
                    <h2>(Passive) After attacking, inflicts [▼SPD 3] on the target for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Entrapping.webp" alt="Entrapping" title='Entrapping'></img>
                <h1>Entrapping :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Steals 2 random [Attribute Buffs] from the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Tenacity.webp" alt="Tenacity" title='Tenacity'></img>
                <h1>Tenacity :
                    <h2>(Reaction) When hit by an active attack from a [Counter Role] character, the DMG taken is decreased by 25%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Settlement-of-the-Hanged-Man.webp" alt="Settlement of the Hanged Men" title='Settlement of the Hanged Men'></img>
                <h1>Settlement of the Hanged Men :
                    <h2>(Passive) After an attack, if the target is [Dying] and has [The Hanged Mens Mark], deals an additional [Piercing DMG] equal to 30% of the target‘s HP. When DMG is dealt, the mark will be removed.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Counterattack-Mode.webp" alt="Counterattack Mode" title='Counterattack Mode'></img>
                <h1>Counterattack Mode :
                    <h2>(Support) Adds 20% of P.ATK to P.DEF and M.DEF, increases Strike Back DMG by 50%, gains [Preempt], and increases Strike Back Range by 2 tiles, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Feverish-Attack.webp" alt="Feverish Attack" title='Feverish Attack'></img>
                <h1>Feverish Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and gains 20% [Life Steal].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Enforcer\Disarm-Strike.webp" alt="Disarm Strike" title='Disarm Strike'></img>
                <h1>Disarm Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▲ATK 1] on the target, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enforcer;
