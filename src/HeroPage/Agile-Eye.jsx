import React from 'react';

const AgileEye = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Character Name</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Agile-Eye-Profile.webp" alt="Agile Eye" title='Agile Eye' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2707</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1259</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">341</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">903</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">445</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">104</td>
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
                <td className="border border-gray-500 px-4 py-2">Agile Eye</td>
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
                <td className="border border-gray-500 px-4 py-2">Sharp Eyes</td>
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
                <td className="border border-gray-500 px-4 py-2">Vlder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Agile Eye Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agile Eye Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Highland-Archer-Trait.webp" alt="Highland-Archer" title='Highland-Archer'></img>
                <h1>Highland-Archer :
                    <h2>Gains [Climb]. When attacking from [Highland], Crit increases by an additional 30%. Ignores [Dodge].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Place-Trap.webp" alt="Place Trap" title='Place Trap'></img>
                <h1>Place Trap :
                    <h2>(Support) After placing a [Beast Trap], the character can move again by 2 tiles and inherit the remaining Movement.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Powerful-Shot.webp" alt="Powerful Shot" title='Powerful Shot'></img>
                <h1>Powerful Shot :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. When the target is [Healthy], ATK increases by an additional 15%.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Aim.webp" alt="Aim" title='Aim'></img>
                <h1>Aim :
                    <h2>(Support) [Instant] Gains [▲Crit 2] and [Ignore Dodge] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Guerrilla.webp" alt="Guerrilla" title='Guerrilla'></img>
                <h1>Guerrilla :
                    <h2>(Passive) ATK increases by 5%. After attacking, move again by 2 tiles. CD: 2 turns.Mountain Tribes</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Mountain-Tribes.webp" alt="Mountain Tribes" title='Mountain Tribes'></img>
                <h1>Mountain Tribes :
                    <h2>((Passive) When the character is [Unharmed], increases Movement by 1 tile. If the character attacks from [Highland] or moves from one tile to another with a height difference of more than 2 tiles, increases the DMG by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Fleeing-Hare.webp" alt="Fleeing Hare" title='Fleeing Hare'></img>
                <h1>Fleeing Hare :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [▲Move 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Highland-Advantage.webp" alt="Highland Advantage" title='Highland Advantage'></img>
                <h1>Highland Advantage :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. When attacked by an enemy from [Lowland], the DMG taken is additionally decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Anesthetic.webp" alt="Anesthetic" title='Anesthetic'></img>
                <h1>Anesthetic :
                    <h2>(Passive) After attacking, inflicts 1 stack of [Infection] on the target. When actively using [class skill] to hit targets with 5 or more stacks of [Infection], inflicts [Sleep] after attacking. The effect lasts for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Battle-Flag-Of-Vlder.webp" alt="Battle Flag of Vlder" title='Battle Flag of Vlder'></img>
                <h1>Battle Flag of Vlder :
                    <h2>(Leader’s Aura) For all [Vlder] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Surefire-Attack.webp" alt="Surefire Attack" title='Surefire Attack'></img>
                <h1>Surefire Attack :
                    <h2>(Basic Attack) Fires a [Curved Shot] which deals 85% Physical DMG and inflicts [🛇Dodge] on the target for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Agile-Eye\Charged-Attack.webp" alt="Charged Attack" title='Charged Attack'></img>
                <h1>Charged Attack :
                    <h2>(Basic Attack) Fires a [Curved Shot] which deals 85% Physical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgileEye;
