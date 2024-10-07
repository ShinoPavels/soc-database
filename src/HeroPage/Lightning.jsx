import React from 'react';

const Lightning = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Lightning</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Lightning-Profile.webp" alt="Lightning" title='Lightning' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3329</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1323</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">511</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">923</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">361</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">166</td>
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
                <td className="border border-gray-500 px-4 py-2">Lightning</td>
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
                <td className="border border-gray-500 px-4 py-2">Assault Knight</td>
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
                <td className="border border-gray-500 px-4 py-2">Th Union, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Lightning Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Lightning Skills</h2>
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
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Disdain-Trait.webp" alt="Disdain" title='Disdain'></img>
                <h1>Disdain :
                    <h2>Increases P.ATK by 15% and P.DEF by 15%. At the end of the turn, if the character is [Healthy] and within the foe’s threat range, gains [Disdain]. Effect: Decreases DMG taken by 30% for 1 turn. Effect CD: 2 turns.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Phantom-Storm.webp" alt="Phantom Storm" title='Phantom Storm'></img>
                <h1>Phantom Storm :
                    <h2>(Physical DMG) Deals 75% DMG to all enemies within a 3×4 area in the target direction and inflicts [▼ATK 1] and [▼Move 1], lasting for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Will-to-Survive.webp" alt="Will to Survive" title='Will to Survive'></img>
                <h1>Will to Survive :
                    <h2>(Passive) If the character is [Dying] at the start of the turn, recovers 50 % HP and 2 NRG. Effect CD: 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Knights-Glory.webp" alt="Knight’s Glory" title='Knight’s Glory'></img>
                <h1>Knight’s Glory :
                    <h2>(Support) [Instant] Grants the target [▲ATK 2] for 2 turns. When the targets are from “The Union”, the character gains an additional [Physical Shield] with value equal to 20% of HP.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Crit-Command.webp" alt="Crit Command" title='Crit Command'></img>
                <h1>Crit Command :
                    <h2>(Aura) Increases Crit by 20% for other allies within 2 tiles around the character.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Battle-Fever.webp" alt="Battle Fever" title='Battle Fever'></img>
                <h1>Battle Fever :
                    <h2>(Passive) After initiating an Active Attack, the character takes 15% less DMG. Dealing a Crit DMG additionally decreases DMG taken by 25% for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Front-Defense.webp" alt="Front Defense" title='Front Defense'></img>
                <h1>Front Defense :
                    <h2>(Reaction) When hit by an active attack from the [Front], the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Hardening.webp" alt="Hardening" title='Hardening'></img>
                <h1>Hardening :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8 %. After being attacked, the character gains [DMG Reduction 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Gale-Dance.webp" alt="Gale Dance" title='Gale Dance'></img>
                <h1>Gale Dance :
                    <h2>(Physical DMG) Deals 75% [AoE DMG] to all enemies within a 2-tile radius around the character. Before attacking, gains [▲Crit 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Lightning.webp" alt="Lightning" title='Lightning'></img>
                <h1>Lightning :
                    <h2>(Passive) Increases SPD by 50 points. Increases Crit by 50% if moved more than 3 tiles before attacking.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Lightning\Feverish-Attack.webp" alt="Feverish Attack" title='Feverish Attack'></img>
                <h1>Feverish Attack :
                    <h2>(Basic attack) Deals 100% Physical DMG and gains 20% [Life Steal].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lightning;
