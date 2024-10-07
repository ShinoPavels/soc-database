import React from 'react';

const Ballista = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Ballista</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Ballista\Ballista-Profile.webp" alt="Ballista" title='Ballista' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2724</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1270</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">382</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">911</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">382</td>
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
                <td className="border border-gray-500 px-4 py-2">Ballista</td>
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
                <td className="border border-gray-500 px-4 py-2">City Destroyer</td>
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
                <td className="border border-gray-500 px-4 py-2">The Union, Agression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Ballista Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ballista Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Concentrate-Trait.webp" alt="Concentrate" title='Concentrate'></img>
                <h1>Concentrate :
                    <h2>The effect is improved to: Increases ATK by 20%. If the character doesn’t deal any DMG during this turn, gains [Concentrate] for 2 turns when on [Standby].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Powerful-Shot.webp" alt="Powerful Shot" title='Powerful Shot'></img>
                <h1>Powerful Shot :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. When the target is [Healthy], ATK increases by an additional 15%.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Penetrating-Arrow.webp" alt="Penetrating Arrow" title='Penetrating Arrow'></img>
                <h1>Penetrating Arrow :
                    <h2>(Passive) After attacking, inflicts [▼P.DEF 2] on the target for 3 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Knights-Glory.webp" alt="Knights Glory" title='Knights Glory'></img>
                <h1>Knight's Glory :
                    <h2>(Support) [Instant] Grants the target [▲ATK 2] for 2 turns. When the targets are from “the Union,” the character gains an additional [Physical Shield] with value equal to 20% of HP.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Catapult.webp" alt="Catapult" title='Catapult'></img>
                <h1>Catapult :
                    <h2>(Physical DMG) Deals 140% DMG to 1 enemy within a cross-shaped range around the character and knocks the target back by 1 tile. Before attacking, the character gains [Shield Break 3].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Scatter.webp" alt="Scatter" title='Scatter'></img>
                <h1>Scatter :
                    <h2>(Physical DMG) Deals 70% [AoE DMG] to all enemies within a 3×3 area in the target direction and inflicts [▼Move 1], lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Defense-Physical.webp" alt="Defense (Physical)" title='Defense (Physical)'></img>
                <h1>Defense (Physical) :
                    <h2>(Reaction) When hit by an active Physical Attack, the DMG taken is decreased by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Highland-Advantage.webp" alt="Protection of Darkness" title='Protection of Darkness'></img>
                <h1>Protection of Darkness :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. When attacked by an enemy from [Lowland], the DMG taken is additionally decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Shattering-Arrow.webp" alt="Shattering Arrow" title='Shattering Arrow'></img>
                <h1>Shattering Arrow :
                    <h2>(Passive) [Basic Attack] ignores 40% of the target’s DEF.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Siege.webp" alt="Siege" title='Siege'></img>
                <h1>Siege :
                    <h2>(Physical DMG) Prepares for 1 turn and gains a [Physical Shield] with value equal to 40% of HP. After casting the skill, deals 160% DMG to all enemies within a 3X6 area in the target direction. Afterward, deals 30% DMG to all enemies Within a 1X3 area in the same direction and knocks them back by 2 tiles. After casting the skill, the character will be afflicted with [Stunned] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Power-Attack.webp" alt="Power Attack" title='Power Attack'></img>
                <h1>Power Attack :
                    <h2>(Basic Attack) Deals 110% Physical DMG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Ballista\Critical-Strike.webp" alt="Invigorating Strike" title='Invigorating Strike'></img>
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

export default Ballista;
