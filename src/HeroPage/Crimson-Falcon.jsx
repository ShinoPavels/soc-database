import React from 'react';

const CrimsonFalcon = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Crimson Falcon</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Crimson-Falcon-Profile.webp" alt="Crimson Falcon" title='Crimson Falcon' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Jump</td>
                <td className="border border-gray-500 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">HP</td>
                <td className="border border-gray-500 px-4 py-2">3287</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1343</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">426</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">939</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">426</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">156</td>
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
                <td className="border border-gray-500 px-4 py-2">Crimson Falcon</td>
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
                <td className="border border-gray-500 px-4 py-2">K.A. Scout</td>
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
                <td className="border border-gray-500 px-4 py-2">Seeker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Iria, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Crimson-Falcon Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Crimson Falcon Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Ghost-On-The-Battlefield.webp" alt="Ghost on the Battlefield" title='Ghost on the Battlefield'></img>
                <h1>Ghost on the Battlefield :
                    <h2>Gains [Jump]. When attacking enemies from the [side or behind], deals 30% more DMG. After defeating the target, can move again by 3 tiles.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Flurry-of-Stabs.webp" alt="Flurry of Stabs" title='Flurry of Stabs'></img>
                <h1>Flurry of Stabs :
                    <h2>(Physical DMG) Deals 45% DMG 3 times. When attacking, Crit increases by 20%.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Inspiration-of-Comrades.webp" alt="Inspiration of Comrades" title='Inspiration of Comrades'></img>
                <h1>Inspiration of Comrades :
                    <h2>(Passive) At the start of the turn, if there are 2 or more allies Within 2 tiles around the character, gains [▲DMG 2] for 1 turn. When hit by an active attack, if there are 2 or more allies within 2 tiles around the character, decreases DMG taken by 20%.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Ambush.webp" alt="Ambush" title='Ambush'></img>
                <h1>Ambush :
                    <h2>(Passive) When performing an active attack, if the target is [Unharmed], deals 20% Physical DMG. When performing a [back attack] on [unharmed] targets, additionally inflicts [🛇Passive Skills] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Precise-Strike.webp" alt="Precise Strike" title='Precise Strike'></img>
                <h1>Precise Strike :
                    <h2>(Passive) When performing an active attack, Crit increases by 15%. If the character performs a [back attack], Crit increases by 40%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Lock-On.webp" alt="Lock-On" title='Lock-On'></img>
                <h1>Lock-On :
                    <h2>(Passive) At the start of the turn, inflicts [P.DEF 2] on the enemy with the highest P.ATK within a 6-tile radius around the character for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Fleeing-Hare.webp" alt="Fleeing Hare" title='Fleeing Hare'></img>
                <h1>Fleeing Hare :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [▲Move 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Vital-Guard.webp" alt="Vital Guard" title='Vital Guard'></img>
                <h1>Vital Guard :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, if the characteris [Dying], gains [Dodge] for 1 turn. Can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Shadow-Gait.webp" alt="Shadow Gait" title='Shadow Gait'></img>
                <h1>Shadow Gait :
                    <h2>(Support) [Instant] Teleports behind the enemy and steals 1 random [Attribute Buff] from the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Battle-Fever.webp" alt="Battle Fever" title='Battle Fever'></img>
                <h1>Battle Fever :
                    <h2>(Passive) After initiating an Active Attack, the character takes 15% less DMG. Dealing a Crit DMG additionally decreases DMG taken by 25% for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 50% Pyhsical DMG 2 times and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Crimson-Falcon\Powerful-Attack.webp" alt="Powerful Attack" title='Powerful Attack'></img>
                <h1>Powerful Attack :
                    <h2>(Basic Attack) Deals 55% Physical DMG 2 times.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrimsonFalcon;
