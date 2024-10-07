import React from 'react';

const Angel = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Angel</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Gold-Out\Angel\Angel-Profile.webp" alt="Angel" title='Angel' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">934</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">373</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1334</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">747</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">270</td>
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
                <td className="border border-gray-500 px-4 py-2">Angel</td>
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
                <td className="border border-gray-500 px-4 py-2">Raid Maidservant</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal States, Aggression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Angel Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Angel Skills</h2>
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
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Angel-Trait.webp" alt="Angel" title='Angel'></img>
                <h1>Angel :
                    <h2>The healing effect increases by 15%. After healing an ally, grants 3 random [Level 1 Attribute Buff] to the target for 2 turns.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Healing-Spell.webp" alt="Healing Spell" title='Healing Spell'></img>
                <h1>Healing Spell :
                    <h2>(Healing) Heals the target 100% of M.ATK and dispels 1 [Debuff] on the target.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Sanction.webp" alt="Sanction" title='Sanction'></img>
                <h1>Sanction :
                    <h2>(Magical DMG) Single-target attack. Deals 150% DMG. After attacking, dispels 2 [buffs] on the target.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Light-of-Healing.webp" alt="Light of Healing" title='Light of Healing'></img>
                <h1>Light of Healing :
                    <h2>(Healing) Heals all allies 2 tiles around the target for 60% of the character’s M.ATK and dispels 1 [debuff].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Flagellant.webp" alt="Flagellant" title='Flagellant'></img>
                <h1>Flagellant :
                    <h2>(Passive) Gains 1 stack of [Penance] after taking DMG. Each stack decreases DMG taken by 8%. This effect cannot be dispelled. Additionally recovers 1 NRG if the character has [Penance] stacks at the end of each turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Regenerate.webp" alt="Regenerate" title='Regenerate'></img>
                <h1>Regenerate :
                    <h2>(Passive) At the end of the turn, heals the ally with the lowest HP percentage within a 3-tile radius around the character by 20% of M.ATK.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Endurance-Activation.webp" alt="Endurance Activation" title='Endurance Activation'></img>
                <h1>Endurance Activation :
                    <h2>(Reaction) When receiving healing, gains [DMG Reduction 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Protection-of-Light.webp" alt="Protection of Light" title='Protection of Light'></img>
                <h1>Protection of Light :
                    <h2>(Reaction) When hit by an active single-target attack, the DMG taken is decreased by 30%. This effect can be activated 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\MDEF-Command.webp" alt="MDEF Command" title='MDEF Command'></img>
                <h1>MDEF Command :
                    <h2>(Aura) Increases M.DEF by 30% for other allies within 2 tiles around the character.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\The-Protected.webp" alt="The Protected" title='The Protected'></img>
                <h1>The Protected :
                    <h2>(Passive) The character gains 15% bonus ATK and 30% bonus DEF while not affected by any [debuff] and affected by at least 3 [buffs].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and dispels 2 [buffs] on the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Gold-Out\Angel\Merciful-Strike.webp" alt="Merciful Strike" title='Merciful Strike'></img>
                <h1>Merciful Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the effect of the next healing skill by 15%, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Angel;
