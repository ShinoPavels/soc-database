import React from 'react';

const Nungal = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Nungal</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Nungal\Nungal-Profile.webp" alt="Nungal" title='Nungal' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 5</td>
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
                <td className="border border-gray-500 px-4 py-2">3104</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1562</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">441</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1093</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">539</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">106</td>
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
                <td className="border border-gray-500 px-4 py-2">Nungal</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">伦伽勒</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Aka Akao</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">HM Marksman</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Gender</td>
                <td className="border border-gray-500 px-4 py-2">Female</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Rarity</td>
                <td className="border border-gray-500 px-4 py-2">Legendary</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Role</td>
                <td className="border border-gray-500 px-4 py-2">Destroyer</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Iria, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A member of the Hanged Men and the younger sister of Nergal, she is a shy, introverted and curious girl.
<br></br><br></br>
Nungal was born into a noble family and was orphaned when his family was bloodbathed by political opponents. The brother and sister were raised by Safiyyah. After several years of elite education, Nungal and his brother chose to join the Hanged Men to serve their country.
<br></br><br></br>
Unlike her brother, the girl also has a strong curiosity about life outside of the Hanged Men.
        </p>
      </div>

      {/* Nungal Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nungal Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Nungal-Skill.webp' alt='Nungal Skill'></img>
        </p>
      </div>

      {/* Nungal Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nungal Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Nungal-Build.webp' alt='Nungal Skill'></img>
        </p>
      </div>

      {/* Nungal Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nungal Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Nungal\Luxite-Crossbow-Trait.webp" alt="Luxite Crossbow" title='Luxite Crossbow'></img>
                <h1>Luxite Crossbow :
                    <h2>Changes Nungal’s [Physical DMG] dealt into [Magical DMG] and increases Crit by 15%. For each 1 tile between her and the target (Distance for adjacent tiles counts as 0), DMG increases by 5%, up to 45%. If Nungal does not move before attacking, increases the maximum range by 1 tile. When attacking enemies outside of 5 tiles, she ignores the target’s Reaction Skill, Preempt, and Strike Back.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Powerful-Shot.webp" alt="Powerful Shot" title='Powerful Shot'></img>
                <h1>Powerful Shot :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. When the target is [Healthy], ATK increases by an additional 15%.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Dharana.webp" alt="Dharana" title='Dharana'></img>
                <h1>Dharana :
                    <h2>(Passive) At the start of the turn, if there are no enemies within a 2-tile radius of the character, gains [▲Crit 2] for 1 turn.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Full-Draw.webp" alt="Full Draw" title='Full Draw'></img>
                <h1>Full Draw :
                    <h2>(Support) After using this skill, [basic attack] DMG increases by 30%. At the end of the turn, NRG is not recovered.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Deadly-Aim.webp" alt="Deadly Aim" title='Deadly Aim'></img>
                <h1>Deadly Aim :
                    <h2>(Physical DMG) Single-target attack. Nungal prepares for 1 turn and then deals 160% DMG to the enemy, which ignores [Block]. When attacking enemies with [The Hanged Mens Mark], increases Crit by 60%. [The Hanged Men’s Mark] is cleared after landing a Crit Hit.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Sniping-Stance.webp" alt="Sniping Stance" title='Sniping Stance'></img>
                <h1>Sniping Stance :
                    <h2>(Support) [Instant] Nungal gains [Sniping Stance] and her skill switches to [Moving Stance].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Snipers-Inuition.webp" alt="Sniper’s Intuition" title='Sniper’s Intuition'></img>
                <h1>Sniper’s Intuition :
                    <h2>(Reaction) Decreases the [ranged DMG] taken by 20%. At the start of the turn, if the character is Within the enemy’s [threat range], gains [▲Move 2] for 1 turn. CD: 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Highland-Advantage.webp" alt="Highland Advantage" title='Highland Advantage'></img>
                <h1>Highland Advantage :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. When attacked by an enemy from [Lowland], the DMG taken is additionally decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Shattering-Arrow.webp" alt="Shattering Arrow" title='Shattering Arrow'></img>
                <h1>Shattering Arrow :
                    <h2>(Passive) [Basic Attack] Ignores 40% of the target’s DEF.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Sense-of-Purpose.webp" alt="Sense of Purpose" title='Sense of Purpose'></img>
                <h1>Sense of Purpose :
                    <h2>(Passive) When attacking enemies who have [The Hanged Mens Mark], increases Crit by 30% and Crit DMG by 30%. Additionally, recovers 1 Energy when landing a Crit Hit.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Fatal-Attack.webp" alt="Fatal Attack" title='Fatal Attack'></img>
                <h1>Fatal Attack :
                    <h2>(Basic Attack) Deals 100% physical DMG and increases Crit DMG by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Marking-Bullet.webp" alt="Marking Bullet" title='Marking Bullet'></img>
                <h1>Marking Bullet :
                    <h2>(Basic Attack) Single-target attack. Nungal deals 85% physical DMG and inflicts [▼Move 1] and [The Hanged Mens Mark] for 2 turns.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Quick-Reload.webp" alt="Quick Reload" title='Quick Reload'></img>
                <h1>Quick Reload :
                    <h2>(Support) [Instant] Nungal recovers 3 Energy and reduces skill CD by 1 turn. For 3 turns, [Deadly Aim] does not need to prepare for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Nungal\Eagle-Eye.webp" alt="Eagle Eye" title='Eagle Eye'></img>
                <h1>Eagle Eye :
                    <h2>(Support) [Instant] [Basic Attack] Range increases by 1 tile. P.ATK increases by 10%. Before attacking, gains the [Highland] advantage for 3 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nungal;
