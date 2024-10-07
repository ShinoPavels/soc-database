import React from 'react';

const Stormbreaker = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Stormbreaker</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Stormbreaker-Profile.webp" alt="Stormbreaker" title='Stormbreaker' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">1460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">482</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1021</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">361</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">202</td>
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
                <td className="border border-gray-500 px-4 py-2">Stormbreaker</td>
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
                <td className="border border-gray-500 px-4 py-2">Recruited Axeman</td>
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
                <td className="border border-gray-500 px-4 py-2">Breaker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Aggression, Drifter, Sword of Convallaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Stormbreaker Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stormbreaker Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Divine-Storm-Axe.webp" alt="Divine Storm Axe" title='Divine Storm Axe'></img>
                <h1>Divine Storm Axe :
                    <h2>Increases [AoE DMG] by 25%. When defeating any target, casts an attack, dealing 60% Physical DMG to all enemies within 1 tile around the character.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Tearing-Whirlwind.webp" alt="Tearing Whirlwind" title='Tearing Whirlwind'></img>
                <h1>Tearing Whirlwind :
                    <h2>(Physical DMG) Deals 90% [AoE DMG] to all enemies within 1 tile around the character and inflicts [🛇Healing Received] on them, lasting 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Damage-Enhancement.webp" alt="Damage Enhancement" title='Damage Enhancement'></img>
                <h1>Damage Enhancement :
                    <h2>(Support) Grants an ally character [▲ATK 2] and immunity to [Attack Attribute Debuffs], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Toughness.webp" alt="Toughness" title='Toughness'></img>
                <h1>Toughness :
                    <h2>(Passive) Gains immunity to the effect of [Injured] and [Dying].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Inertial-Chop.webp" alt="Inertial Chop" title='Inertial Chop'></img>
                <h1>Inertial Chop :
                    <h2>(Passive) After initiating an Active Attack, deals 20% Physical DMG to all enemies within a 1-tile radius of the character.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Charge-Pursuit.webp" alt="Charge Pursuit" title='Charge Pursuit'></img>
                <h1>Charge Pursuit :
                    <h2>(Physical DMG) [Instant]. Charges at 1 enemy within a cross-shaped range around the character, dealing 30% DMG. Gains immunity to [Preempt].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Storm-Counter.webp" alt="Storm Counter" title='Storm Counter'></img>
                <h1>Storm Counter :
                    <h2>(Reaction) When attacked by [front or side] enemies, decreases the DMG taken by 8% and performs [Strike Back], dealing 45% Physical DMG to all enemies within 1 tile around the character.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Hardening.webp" alt="Hardening" title='Hardening'></img>
                <h1>Hardening :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [DMG Reduction 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Tiger-Charge.webp" alt="Tiger Charge" title='Tiger Charge'></img>
                <h1>Tiger Charge :
                    <h2>(Physical DMG) Selects 1 spot within a cross-shaped range around the character, charges to the location, and deals 60% [AoE DMG] to enemies within a 3×3 area in the target direction, ignoring any blocks. After the attack, the character gains [▲P.DEF 2] and [▲M.DEF 2] for 2 turns	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Execute.webp" alt="Execute" title='Execute'></img>
                <h1>Execute :
                    <h2>(Physical DMG) Deals 120% [AoE DMG] to all enemies in a straight line of 2 tiles in the target direction. If the target is [Injured], inflicts [🛇Resolve] and [🛇Healing Received] before attacking.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Charged-Attack.webp" alt="Charged Attack" title='Charged Attack'></img>
                <h1>Charged Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Stormbreaker\Powerful-Attack.webp" alt="Powerful Attack" title='Powerful Attack'></img>
                <h1>Powerful Attack :
                    <h2>(Basic Attack) Deals 110% Physical DMG.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stormbreaker;
