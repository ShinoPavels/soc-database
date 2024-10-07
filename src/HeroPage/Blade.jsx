import React from 'react';

const Blade = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blade</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Blade\Blade-Profile.webp" alt="Blade" title='Blade' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3261</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1334</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">406</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">934</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">470</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">153</td>
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
                <td className="border border-gray-500 px-4 py-2">Blade</td>
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
                <td className="border border-gray-500 px-4 py-2">Shining Messenger</td>
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
                <td className="border border-gray-500 px-4 py-2">Watcher</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Papal States</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Blade Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Blade Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Blade\Blessed-Arrow-Trait.webp" alt="Blessed Arrow" title='Blessed Arrow'></img>
                <h1>Blessed Arrow :
                    <h2>Performs [Assisting Attack] against all enemies within 3 tiles of the character, dealing 15% Physical DMG and dispelling 1 [Buff]. The skill can be used up to 2 times per round. When the character has 3 or more [Buffs], increases Crit by 30%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Hunting-Impulse.webp" alt="Hunting Impulse" title='Hunting Impulse'></img>
                <h1>Hunting Impulse :
                    <h2>(Physical DMG) Single-target attack Deals 130% DMG. Before attacking, Crit increases by 15%. If the target is defeated, recovers 3 NRG.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Light-Of-Sanctuary.webp" alt="Light of Sanctuary" title='Light of Sanctuary'></img>
                <h1>Light of Sanctuary :
                    <h2>(Magical DMG) Selects 1 spot within a cross-shaped range around the character, deals 70% [AoE DMG] to all enemies in a horizontal row of 5 tiles, and changes the tiles into [Burning]. The effect lasts for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Fancy-Footwork.webp" alt="Fancy Footwork" title='Fancy Footwork'></img>
                <h1>Fancy Footwork :
                    <h2>(Support) Takes 50% less [AoE DMG] and gains 2 [Dodge] attempts for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Ambush.webp" alt="Ambush" title='Ambush'></img>
                <h1>Ambush :
                    <h2>(Passive) When performing an active attack, if the target is [Unharmed], deals 20% Physical DMG. When performing a [Back Attack] on [Unharmed] targets, additionally inflicts [🛇Passive Skills] for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Maneuver.webp" alt="Maneuver" title='Maneuver'></img>
                <h1>Maneuver :
                    <h2>(Passive) After initiating an Active Attack, the character can move again. The distance depends on the remaining Movement.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Strength-Activation.webp" alt="Strength Activation" title='Strength Activation'></img>
                <h1>Strength Activation :
                    <h2>(Reaction) Increases the healing received by 10%. When receiving healing, gains [▲DMG 2] for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Fleeing-Hare.webp" alt="Fleeing Hare" title='Fleeing Hare'></img>
                <h1>Fleeing Hare :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [▲Move 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Shapeless-Lupine-Blade.webp" alt="Shapeless Lupine Blade" title='Shapeless Lupine Blade'></img>
                <h1>Shapeless Lupine Blade :
                    <h2>(Physical DMG) Single-target attack. Deals 150% DMG. When the target is [Injured], increases Crit and Crit DMG by an additional 15% and ignores [Assisting Cover].	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Traceless-Shadow.webp" alt="Traceless Shadow" title='Traceless Shadow'></img>
                <h1>Traceless Shadow :
                    <h2>(Support) Gains 1 [Dodge] for 1 turn. Upon a successful [dodge], teleports to the attacker’s back, dealing 100% Physical DMG, and gains [dodge] again for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Critical-Strike.webp" alt="Critical Strike" title='Critical Strike'></img>
                <h1>Critical Strike :
                    <h2>(Basic Attack) Deals 50% Physical DMG 2 times and increases Crit by 15% before attacking.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Blade\Surefire-Attack.webp" alt="Surefire Attack" title='Surefire Attack'></img>
                <h1>Surefire Attack :
                    <h2>(Basic Attack) Deals 50% Physical DMG 2 times and inflicts [🛇Dodge] on the target for 1 turn.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blade;
