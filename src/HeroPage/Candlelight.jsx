import React from 'react';

const Candlelight = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Candlelight</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Candlelight\Candlelight-Profile.webp" alt="Candlelight" title='Candlelight' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2941</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">820</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">434</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1174</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">535</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">93</td>
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
                <td className="border border-gray-500 px-4 py-2">Candlelight</td>
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
                <td className="border border-gray-500 px-4 py-2">H.M Intelligence Officer</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria, Discipline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Candlelight Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Candlelight Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Candlelight-Trait.webp" alt="Depression" title='Depression'></img>
                <h1>Depression :
                    <h2>Before being attacked, inflict [Hanged Man Mark], which lasts for 2 rounds. When friendly troops within 5 grids of the player are attacked, if the attacker has the [Hanged Man Mark], the damage received is reduced by 20%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Light-of-Judgment.webp" alt="Light of Judgment" title='Light of Judgment'></img>
                <h1>Light of Judgment :
                    <h2>(Magic Damage) Single target attack, causing 140% damage. After the attack, the team with the lowest HP percentage on the field is healed, with the healing amount equal to 50% of the skill holder’s magic attack value.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Soul-Soothing.webp" alt="Soul Soothing" title='Soul Soothing'></img>
                <h1>Soul Soothing :
                    <h2>(Healing) Heal the target with a healing amount equal to 75% of the magic attack value.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\PDEF-Command.webp" alt="P. DEF Command" title='P. DEF Command'></img>
                <h1>P. DEF Command :
                    <h2>(Aura) Increases the physical defense of other friendly forces within 2 squares of itself by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Potential-Stimulation.webp" alt="Potential Stimulation" title='Potential Stimulation'></img>
                <h1>Potential Stimulation :
                    <h2>(Support) Allows the target to gain [▲Attack 2], [▲Physical Defense 2] and [▲Magic Defense 2], dispels and makes all [Attribute Debuffs], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Light-of-the-Heart.webp" alt="Light of the Heart" title='Light of the Heart'></img>
                <h1>Light of the Heart :
                    <h2>(Support) [Instant], restore 1 energy point to all allies within 3 squares of the target range.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Reluctantly.webp" alt="Reluctantly" title='Reluctantly'></img>
                <h1>Reluctantly :
                    <h2>(Reaction) When attacked, damage taken is reduced by 8. [Injured] state, the damage received is reduced by 20%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Energy-Recovery.webp" alt="Energy Recovery" title='Energy Recovery'></img>
                <h1>Energy Recovery :
                    <h2>(Reaction) When attacked, damage taken is reduced by 8%. After being actively attacked by the enemy, 1 energy is restored.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Wanted.webp" alt="Wanted" title='Wanted'></img>
                <h1>Wanted :
                    <h2>(Healing) Applies [Hanged Man Mark], [▼Speed ​​2], lasts for 2 rounds, treats all friendly forces within 4 squares of the target, the treatment amount is 65% of the magic attack value, and gains [▲Move 1], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Special-Mission.webp" alt="Special Mission" title='Special Mission'></img>
                <h1>Special Mission :
                    <h2>(Support) Restore 4 energy points to the target friendly unit and gain [▲Attack 2], [▲Magic Defense 2], [▲Physical Defense 2], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Sealing-Attack.webp" alt="Sealing Attack" title='Sealing Attack'></img>
                <h1>Sealing Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [🛇Passive Skills] on [Injured] targets before attacking, lasting for 2 turns.Frenzy Attack</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Candlelight\Frenzy-Attack.webp" alt="Frenzy Attack" title='Frenzy Attack'></img>
                <h1>Frenzy Attack :
                    <h2>(Normal attack) Deals 80% magic damage and generates 20% [Life Drain].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Candlelight;
