import React from 'react';

const FlameSorceress = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Flame-Sorceress</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Flame-Sorceress-Profile.webp" alt="Flame Sorceress" title='Flame Sorceress' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3050</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1047</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">354</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1493</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">671</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">119</td>
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
                <td className="border border-gray-500 px-4 py-2">Flame Sorceress</td>
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
                <td className="border border-gray-500 px-4 py-2">Witch of Fire</td>
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
                <td className="border border-gray-500 px-4 py-2">Drifter, Aggression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Flame Sorceress Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Flame Sorceress Skills</h2>
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
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Flame-Sorceress-Trait.webp" alt="Flame Sorceress" title='Flame Sorceress'></img>
                <h1>Flame Sorceress :
                    <h2>Increases ATK by 15%. At the end of the turn, locks onto 2 random enemies within a 4-tile radius of the character to inflict [Scorch].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Fireball.webp" alt="Fireball" title='Fireball'></img>
                <h1>Fireball :
                    <h2>(Magical DMG) Single-target attack Deals 125% DMG and inflicts [Scorch] for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Fire-Pillar.webp" alt="Fire Pillar" title='Fire Pillar'></img>
                <h1>Fire Pillar :
                    <h2>(Magical DMG) Selects a location and deals 70% [Fire] [AoE DMG] to all enemies within a 1-tile radius of the target location.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\High-Morale.webp" alt="High Morale" title='High Morale'></img>
                <h1>High Morale :
                    <h2>(Passive) When [Healthy], increases ATK by 10%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Blazing.webp" alt="Blazing" title='Blazing'></img>
                <h1>Blazing :
                    <h2>(Passive) At the end of the turn, inflicts [Scorch] on 1 random [Injured] enemy within a 3-tile radius of the character, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Wind-Rider.webp" alt="Wind Rider" title='Wind Rider'></img>
                <h1>Wind Rider :
                    <h2>(Support) Grants [▲Move 2] and Immunity to [▼Move] to all allies within a 2-tile radius of the target location, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Firewalking.webp" alt="Firewalking" title='Firewalking'></img>
                <h1>Firewalking :
                    <h2>(Reaction) Become immune to [Scorch] and [Burning] tiles. When on a [Burning] tile, the DMG taken is decreased by 10%. At the end of the turn, recovers 20% of the character’s HP.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>
              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Defense-Ranged-Attack.webp" alt="Defense (Ranged Attack)" title='Defense (Ranged Attack)'></img>
                <h1>Defense (Ranged Attack) :
                    <h2>(Reaction) When hit by a ranged attack, the DMG taken is decreased by 25%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Incinerating-Formation.webp" alt="Incinerating Formation" title='Incinerating Formation'></img>
                <h1>Incinerating Formation :
                    <h2>(Magical DMG) Prepares for 1 turn and deals 85% [Fire] [AoE DMG] to all enemies within 1 tile around the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Pyroblast.webp" alt="Pyroblast" title='Pyroblast'></img>
                <h1>Pyroblast :
                    <h2>(Magical DMG) Single-target attack. Deals 170% DMG. If the target has [Scorch], the DMG dealt increases to 200%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Charged-Attack.webp" alt="Charged Attack" title='Charged Attack'></img>
                <h1>Charged Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Flame-Sorceress\Scorching-Attack.webp" alt="Scorching Attack" title='Scorching Attack'></img>
                <h1>Scorching Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [Scorch] on the target for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlameSorceress;
