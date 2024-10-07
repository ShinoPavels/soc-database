import React from 'react';

const Teadon = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Teadon</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Teadon\Teadon-Profile.webp" alt="Teadon" title='Teadon' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3660</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1330</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">681</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">933</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">295</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">235</td>
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
                <td className="border border-gray-500 px-4 py-2">Teadon</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">泰登 (Tàidēng)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Inoue Kazuhiko</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Guarding Knight</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Gender</td>
                <td className="border border-gray-500 px-4 py-2">Male</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Rarity</td>
                <td className="border border-gray-500 px-4 py-2">Legendary</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Role</td>
                <td className="border border-gray-500 px-4 py-2">Defender</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">The Union, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A gentle, easy-going, warm and steady senior knight, Gloria’s teacher and adjutant.
<br></br><br></br>
Teadon is a subordinate knight serving the Roland family. He was once the most trusted comrade-in-arms of Gloria’s father. After Gloria’s father died, Teadon resigned from the military and took on the responsibility of taking care of and educating her, protecting her safety.
<br></br><br></br>
Teadon participated in the investigation of the Wave City incident as Gloria’s adjutant. He looked forward to Gloria’s growth with a father’s attitude, and was also worried about the danger she was about to face.


        </p>
      </div>

      {/* Teadon Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teadon Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Teadon-Skill.webp' alt='Teadon Skill'></img>
        </p>
      </div>

      {/* Teadon Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teadon Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Teadon-Build.webp' alt='Teadon Skill'></img>
        </p>
      </div>

      {/* Teadon Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Teadon Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Teadon\Battle-Tested-Shield-Trait.webp" alt="Battle Tested Shield" title='Battle Tested Shield'></img>
                <h1>Battle Tested Shield :
                    <h2>Gains [Block]. At the end of the turn, becomes [Alert] to the 3 tiles within a row in the target direction, dealing 100% [Physical AoE DMG]. When actively using other [Alert] skills, ATK increases by an additional 40%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Defensive-Stance.webp" alt="Defensive Stance" title='Defensive Stance'></img>
                <h1>Defensive Stance :
                    <h2>(Support) [Instant] Gains a [Physical Shield] equal to 25% of HP and [Block Enhancement] for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Intimidate.webp" alt="Intimidate" title='Intimidate'></img>
                <h1>Intimidate :
                    <h2>(Passive) At the end of the turn, inflicts [▼ATK 2] on the enemy with the highest P.ATK within a 4-tile radius around the character for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Knock-out-Blow.webp" alt="Knock-out Blow" title='Knock-out Blow'></img>
                <h1>Knock-out Blow :
                    <h2>(Physical DMG) Single-target attack. Deals 85% DMG and inflicts [Stunned] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Fierce-Assault.webp" alt="Fierce Assault" title='Fierce Assault'></img>
                <h1>Fierce Assault :
                    <h2>(Physical DMG) Single-target attack. Deals 100% DMG. Also deals DMG equal to the character’s [Physical Shield] value, up to 200% of the character’s P.ATK.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Hit-and-Run-Tactics.webp" alt="Hit-and-Run Tactics" title='Hit-and-Run Tactics'></img>
                <h1>Hit-and-Run Tactics :
                    <h2>(Physical DMG) Attacks all enemies in a 3×3 area in the target direction, dealing 50% [AoE DMG] and inflicting [▼Move 1] and [Vulnerable 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Thick-Shield.webp" alt="Thick Shield" title='Thick Shield'></img>
                <h1>Thick Shield :
                    <h2>(Reaction) At the start of the battle, grants the character a [Physical Shield] equal to 35% HP. While having [Physical Shield], increases the chance of [Block] to 100%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [Front or Side], [Strike Back] if the attacker is within range, dealing 70% of Basic Attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Array-Command.webp" alt="Array Command" title='Array Command'></img>
                <h1>Array Command :
                    <h2>(Passive) At the end of the turn, if the character didn’t attack, grants [▲P.DEF 2] and [▲M.DEF 2] to all allies within a 1-tile radius around the character. Lasts for 2 turns.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Shield-of-Punishment.webp" alt="Shield of Punishment" title='Shield of Punishment'></img>
                <h1>Shield of Punishment :
                    <h2>(Support) Becomes [Alert] to 3 tiles around the character, dealing 100% DMG and inflicting [Stunned] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Powerful-Attack.webp" alt="Powerful Attack" title='Powerful Attack'></img>
                <h1>Powerful Attack :
                    <h2>(Basic Attack) Deals 110% Physical DMG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Ice-Attack.webp" alt="Ice Attack" title='Ice Attack'></img>
                <h1>Ice Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▼Move 1] on [Healthy] targets, lasting for 1 turn.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Impregnable-Shield.webp" alt="Impregnable Shield" title='Impregnable Shield'></img>
                <h1>Impregnable Shield :
                    <h2>(Support) Bestows a [Physical Shield] equal to 150% P.DEF; all allies within a 3-tile radius around the character gain a [Physical Shield] equal to 100% of the skill holder’s P.DEF. None of the shields can be dispelled, all effects last for 2 turns, and the [Trait] effect cannot be interrupted during this period.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Teadon\Will-to-Survive.webp" alt="Will to Survive" title='Will to Survive'></img>
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

export default Teadon;
