import React from 'react';

const Simona = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Simona</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Simona\Simona-Profile.webp" alt="Simona" title='Simona' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 0.5</td>
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
                <td className="border border-gray-500 px-4 py-2">2952</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1026</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1453</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">474</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">271</td>
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
                <td className="border border-gray-500 px-4 py-2">Simona</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">	Marina Inoue</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Ice Knight</td>
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
                <td className="border border-gray-500 px-4 py-2">Watcher</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">The Union, Discipline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        Simona was born into the Yinglin family, a noble family of knights, and she was also a powerful Ice Knight.
<br></br><br></br>
She is young, energetic and aggressive. She enters the political arena in order to satisfy her family’s expectations and change the political ideals of the Knights Alliance system. However, because her political ideas seriously shaken the rule of the old knights, she was ostracized by the old nobles and was secretly demoted to join the opposition.
<br></br><br></br>
And the ambition has never faded from Simona’s heart. In her opinion, winning Iria’s fruit of victory can just stop the rotten mouths of the old guys, and use it as a step to lay a more solid foundation for the path she has chosen.
        </p>
      </div>

      {/* Simona Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simona Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Simona-Skill.webp' alt='Simona Skill'></img>
        </p>
      </div>

      {/* Simona Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simona Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Simona-Build.webp' alt='Simona Skill'></img>
        </p>
      </div>

      {/* Simona Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simona Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Simona\Winter-is-Coming-Trait.webp" alt="Winter is Coming" title='Winter is Coming'></img>
                <h1>Winter is Coming :
                    <h2>Increases Simona’s ATK and DEF. When she has a [Shield], ATK and DEF are additionally increased by 10% and she becomes immune to [Attribute Debuffs]. At the start of the turn, she gains [Armor of Ice]. If she is [Dying] after being attacked, she immediately gains [Armor of Ice]. Can be activated up to 1 time per battle. [Unlock Ascended Skin].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Ice-Lance.webp" alt="Ice Lance" title='Ice Lance'></img>
                <h1>Ice Lance :
                    <h2>(Magical DMG) Single-target attack. Deals 130% DMG and inflicts [▼SPD 1] and [▼Move 1] for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Icy-Blast.webp" alt="Icy Blast" title='Icy Blast'></img>
                <h1>Icy Blast :
                    <h2>(Magical DMG)
                    Deals 75% [AoE DMG] to the first enemy in each line within a 2×3 area, inflicting [▼SPD 1] and [▼Move 1] for 2 turns. Knocks the targets back by 2 tiles. CD: 3 turns, 2 NRG.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Ice-Cone.webp" alt="Ice Cone" title='Ice Cone'></img>
                <h1>Ice Cone :
                    <h2>(Magical DMG) Selects a location and deals 80% [Ice] [AoE DMG] to all enemies within a 1-tile radius of the target location.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Ice-Assault.webp" alt="Ice Assault" title='Ice Assault'></img>
                <h1>Ice Assault :
                    <h2>(Magical DMG) [Instant] Simona selects 1 tile within a cross-shaped range around her and charges to the location, attacking all enemies along the line. She deals [Ice] DMG equal to 100% of the [Physical Shield] value. Simona gains [Warrior of Frost] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Ice-made-Armor.webp" alt="Ice-made Armor" title='Ice-made Armor'></img>
                <h1>Ice-made Armor :
                    <h2>(Support) Simona selects a target direction, and all allies within a 3×4 area in that direction and all allies within the 3 tiles to the left and right of the tile occupied by Simona gain [Armor of Ice] and [Regeneration 1] for 2 turns. If she already had [Armor of Ice], decreases NRG consumption by 1 point.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Iceshards.webp" alt="Iceshards" title='Iceshards'></img>
                <h1>Iceshards :
                    <h2>(Reaction) After her [Armor of Ice] is destroyed, Simona deals 50% Magical DMG to all enemies within 2 tiles of her and inflicts [▼Move 3] on the target for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Protection-of-Ice.webp" alt="Protection of Ice" title='Protection of Ice'></img>
                <h1>Protection of Ice :
                    <h2>(Reaction) When hit by an active attack from an enemy with [▼Move], the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Flash-Freezing.webp" alt="Ice-made Sword" title='Ice-made Sword'></img>
                <h1>Ice-made Sword :
                    <h2>(Magical DMG) Single-target attack Deals 80% DMG and inflicts [▼Move 3] for 2 turns. If the targets have [▼Move], additionally inflicts [Frozen] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Battle-Flag-of-the-Union.webp" alt="Battle Flag of the Union" title='Battle Flag of the Union'></img>
                <h1>Battle Flag of the Union :
                    <h2>(Leader’s Aura) For all [The Union] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Ice-made-Sword.webp" alt="Ice-made Sword" title='Ice-made Sword'></img>
                <h1>Ice-made Sword :
                    <h2>(Magical DMG) Single-target attack. Simona deals 110% DMG. If she is attacking enemies with [▼Move], or who are currently on [Frosty] tiles, the DMG she deals is increased by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Ice-Attack.webp" alt="Ice Attack" title='Ice Attack'></img>
                <h1>Ice Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [▼Move 1] on [Healthy] targets, lasting for 1 turn.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Winter-Doomsday.webp" alt="Winter Doomsday" title='Winter Doomsday'></img>
                <h1>Winter Doomsday :
                    <h2>(Magical DMG) Simona selects 1 tile within a cross-shaped range around her, and deals 70% [Ice] DMG to all enemies within a 5×3 area in the target direction. Simona summons an [Ice Wall] in the 3 center tiles. If a tile is occupied, she inflicts [Frozen] on the target for 1 turn. Pre-cooldown: 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Simona\Will-to-Survive.webp" alt="Will to Survive" title='Will to Survive'></img>
                <h1>Will to Survive :
                    <h2>(Passive) If the character is [Dying] at the start of the turn, recovers 50% HP and 2 NRG. Effect CD: 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Simona;
