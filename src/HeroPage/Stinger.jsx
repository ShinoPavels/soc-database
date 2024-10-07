import React from 'react';

const Stinger = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Stinger</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Stinger\Stinger-Profile.webp" alt="Stinger" title='Stinger' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3287</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1323</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">426</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">923</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">426</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">155</td>
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
                <td className="border border-gray-500 px-4 py-2">Stinger</td>
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
                <td className="border border-gray-500 px-4 py-2">Soldier Bee</td>
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
                <td className="border border-gray-500 px-4 py-2">Seeker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Iria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Stinger Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stinger Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Hunters-Will-Trait.webp" alt="Hunter’s Will" title='Hunter’s Will'></img>
                <h1>Hunter’s Will :
                    <h2>At the end of the turn, locks onto the closest enemy within a 3- tile radius of the character, deals 40% Physical DMG, and inflicts [The Hanged Mens Mark]. When attacking an enemy with [The Hanged Men’s Mark], increases DMG by 20%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Shadow-Assault.webp" alt="Shadow Assault" title='Shadow Assault'></img>
                <h1>Shadow Assault :
                    <h2>(Physical DMG) Single-target attack Deals 130% DMG. After attacking, the character gains [Dodge] for 1 turn.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Infected-Dagger.webp" alt="Infected Dagger" title='Infected Dagger'></img>
                <h1>Infected Dagger :
                    <h2>(Physical DMG) Single-target attack. Deals 70% DMG and inflicts 3 stacks of [Infection].	</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Flurry-of-Stabs.webp" alt="Flurry of Stabs" title='Flurry of Stabs'></img>
                <h1>Flurry of Stabs :
                    <h2>(Physical DMG) Deals 45% DMG 3 times. When attacking, Crit increases by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Battle-Fever.webp" alt="Battle Fever" title='Battle Fever'></img>
                <h1>Battle Fever :
                    <h2>(Passive) After initiating an Active Attack, the character takes 15% less DMG. Dealing a Crit DMG additionally decreases DMG taken by 25% for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Settlement-of-the-Hanged-Men.webp" alt="Settlement of the Hanged Men" title='Settlement of the Hanged Men'></img>
                <h1>Settlement of the Hanged Men :
                    <h2>(Passive) After an attack, if the target is [Dying] and has [The Hanged Men’s Mark], deals an additional [Piercing DMG] equal to 30% of the target‘s HP. When DMG is dealt, the mark will be removed..</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Vital-Guard.webp" alt="Vital Guard" title='Vital Guard'></img>
                <h1>Vital Guard :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, if the characteris [Dying], gains [Dodge] for 1 turn. Can be activated up to 1 time per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Luxite-Shrapnel.webp" alt="Luxite Shrapnel" title='Luxite Shrapnel'></img>
                <h1>Luxite Shrapnel :
                    <h2>(Piercing DMG) Deals [Piercing DMG] equal to 10% of the target’s HP to all enemies within 2 tiles around the target and inflicts 3 stacks of [Infection].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Armybane-Blade.webp" alt="Armybane Blade" title='Armybane Blade'></img>
                <h1>Armybane Blade :
                    <h2>(Physical DMG) Single-target attack. Deals 170% DMG. Before attacking, inflicts [Isolate] on the target for 1 turn. After dealing DMG, inflicts [🛇Assist] on the target for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Disarm-Strike.webp" alt="Disarm Strike" title='Disarm Strike'></img>
                <h1>Disarm Strike :
                    <h2>(Basic Attack) Deals 50% Physical DMG 2 times and inflicts [▲ATK 1] on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stinger\Silencing-Attack.webp" alt="Silencing Attack" title='Silencing Attack'></img>
                <h1>Silencing Attack :
                    <h2>(Basic Attack) Deals 50% Physical DMG 2 times and inflicts [🛇Active Skills] on [Injured] targets before attacking for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stinger;
