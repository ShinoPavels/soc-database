import React from 'react';

const Nightingale = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Nightingale</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Nightingale-Profile.webp" alt="Nightingale" title='Nightingale' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2878</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">836</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">361</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1193</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">606</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">78</td>
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
                <td className="border border-gray-500 px-4 py-2">Nightingale</td>
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
                <td className="border border-gray-500 px-4 py-2">Pharmacist</td>
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
                <td className="border border-gray-500 px-4 py-2">Drifter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Nightingale Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nightingale Skills</h2>
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
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Volunteer-Trait.webp" alt="Volunteer" title='Volunteer'></img>
                <h1>Volunteer :
                    <h2>[AoE DMG] taken is decreased by 30%. If other allies within 6 tiles around the character are [Dying], increases Movement by 2 tiles and SPD by 200. At the start of the turn, the CD of all skills is decreased by 2 turn.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\First-Aid.webp" alt="First Aid" title='First Aid'></img>
                <h1>First Aid :
                    <h2>(Healing) Single-target healing. Heals 80% HP.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Bandage.webp" alt="Bandage" title='Bandage'></img>
                <h1>Bandage :
                    <h2>(Healing) [Instant]. Single-target healing. Heals 30% HP.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Weapon-Eroder.webp" alt="Weapon Eroder" title='Weapon Eroder'></img>
                <h1>Weapon Eroder :
                    <h2>(Piercing DMG) Single-target attack Deals [Piercing DMG] equal to 30% of the target’s HP and then inflicts [▼ATK 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Regenerate.webp" alt="Regenerate" title='Regenerate'></img>
                <h1>Regenerate :
                    <h2>(Passive) At the end of the turn, heals the ally with the lowest HP percentage within a 3-tile radius around the character by 20% of M.ATK.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Tranquilizer.webp" alt="Tranquilizer" title='Tranquilizer'></img>
                <h1>Tranquilizer :
                    <h2>(Support) [Instant] Inflicts [Sleep] on the target for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Protection-of-Light.webp" alt="Protection of Light" title='Protection of Light'></img>
                <h1>Protection of Light :
                    <h2>(Reaction) When hit by an active single- target attack, the DMG taken is decreased by 30%. This effect can be activated 1 time per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Endure.webp" alt="Endure" title='Endure'></img>
                <h1>Endure :
                    <h2>(Reaction) Takes 50% less [DoT].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Painkiller.webp" alt="Painkiller" title='Painkiller'></img>
                <h1>Painkiller :
                    <h2>(Healing) [Instant] Heals the target for 20% HP and grants [Regeneration 2] and [DMG Reduction 3] for 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Burning-Grenade.webp" alt="Burning Grenade" title='Burning Grenade'></img>
                <h1>Burning Grenade :
                    <h2>(Piercing DMG) Deals [Piercing DMG] equal to 10% of the target’s HP to all enemies within 1 tile around the target tile and changes the tiles into [Burning] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Merciful-Strike.webp" alt="Merciful Strike" title='Merciful Strike'></img>
                <h1>Merciful Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the effect of the next healing skill by 15%, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Nightingale\Silencing-Attack.webp" alt="Silencing Attack" title='Silencing Attack'></img>
                <h1>Silencing Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [🛇Active Skills] on [Injured] targets before attacking, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nightingale;
