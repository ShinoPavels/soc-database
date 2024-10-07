import React from 'react';

const DivineGrace = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Divine Grace</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Divine Grace-Profile.webp" alt="Divine Grace" title='Divine Grace' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2751</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1207</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">394</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">863</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">491</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">94</td>
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
                <td className="border border-gray-500 px-4 py-2">Divine Grace</td>
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
                <td className="border border-gray-500 px-4 py-2">Glorious Crossbowman</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal States, Discipline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Divine Grace Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Divine Grace Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Crossbow-Of-Blessing-Trait.webp" alt="Crossbow of Blessing" title='Crossbow of Blessing'></img>
                <h1>Crossbow of Blessing :
                    <h2>Increases P.ATK by 15%. The character additionally deals 35% more DMG when having 3 or more [Buffs].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Knock-Back-Shot.webp" alt="Erosion" title='Erosion'></img>
                <h1>Erosion :
                    <h2>(Physical DMG) Deals 135% DMG to 1 enemy within a cross-shaped range around the character and knocks them back by 2 tiles.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Flaming-Shot.webp" alt="Flaming Shot" title='Flaming Shot'></img>
                <h1>Flaming Shot :
                    <h2>(Physical DMG) Deals 70% [AoE DMG] to 1 enemy within a cross-shaped range around the character and deals 40% [Fire] [AoE DMG] to all enemies within 1 tile around the target.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Cover-Shoot.webp" alt="Cover Shoot" title='Cover Shoot'></img>
                <h1>Cover Shoot :
                    <h2>(Support) Performs [Assisting Attack] against all enemies Within 4 tiles of the character, dealing 80% DMG. The skill can be used up to 2 times per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\The-Protected.webp" alt="The Protected" title='The Protected'></img>
                <h1>The Protected :
                    <h2>(Passive) The character gains 15% bonus ATK and 30% bonus DEF while not affected by any [Debuff] and affected by at least 3 [Buffs].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Light-of-Sanctuary.webp" alt="Light of Sanctuary" title='Light of Sanctuary'></img>
                <h1>Light of Sanctuary :
                    <h2>(Support) [Instant] Single-target Healing. Restores 25% of the target’s HP. If the target is [Unharrned], the effect changes, which grants [▲DMG 2] and [▲M.DEF 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Defense-AoE.webp" alt="Defense (AoE)" title='Defense (AoE)'></img>
                <h1>Defense (AoE) :
                    <h2>(Reaction) When hit by an Active AoE Attack, the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Strength-Activation.webp" alt="Strength Activation" title='Strength Activation'></img>
                <h1>Strength Activation :
                    <h2>(Reaction) Increases the healing received by 10%. When receiving healing, gains [▲DMG 2] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Storm-Sniper.webp" alt="Storm Sniper" title='Storm Sniper'></img>
                <h1>Storm Sniper :
                    <h2>(Physical DMG) Deals 120% DMG to 1 enemy Within a cross-shaped range around the character. For each tile between the character and the target (Distance for Adjacent Tiles counts as 0), deals 10% more DMG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Crit-Command.webp" alt="Crit Command" title='Crit Command'></img>
                <h1>Crit Command :
                    <h2>(Aura) Increases Crit by 20% for other allies within 2 tiles around the character.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Fatal-Attack.webp" alt="Fatal Attack" title='Fatal Attack'></img>
                <h1>Fatal Attack :
                    <h2>(Basic Attack) Deals 100% physical DMG and increases Crit DMG by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Divine Grace\Critical-Strike.webp" alt="Invigorating Strike" title='Invigorating Strike'></img>
                <h1>Invigorating Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases Crit by 15% before attacking.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DivineGrace;
