import React from 'react';

const Garcia = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Garcia</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Garcia\Garcia-Profile.webp" alt="Garcia" title='Garcia' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 3</td>
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
                <td className="border border-gray-500 px-4 py-2">3215</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1396</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">979</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">395</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">176</td>
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
                <td className="border border-gray-500 px-4 py-2">Garcia</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">	嘉西娅</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Oozora Naomi</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Judge of Papal</td>
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
                <td className="border border-gray-500 px-4 py-2">Seeker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Papal States, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A rebellious young woman who serves as a Judge in the Papal State of Rodinia. Like Samantha, she was an orphan who grew up in the halls of the head church and was handpicked to join their elite forces after demonstrating remarkable ability. Since then, she has served in her role with a ruthless efficiency in dispatching the Sanctuary’s enemies.
<br></br><br></br>
However, her accomplishments mean little compared to her craving for Samantha’s attention. Her obsessive love for her senior has led her astray as a Judge as she pursues a different idol.
        </p>
      </div>

      {/* Garcia Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Garcia Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Garcia-Skill.png' alt='Garcia Skill'></img>
        </p>
      </div>

      {/* Garcia Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Garcia Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Garcia-Build.webp' alt='Garcia Build'></img>
        </p>
      </div>

      {/* Garcia Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Garcia Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Garcia\Executioner-Trait.webp" alt="Executioner" title='Executioner'></img>
                <h1>Executioner :
                    <h2>At the start of the turn, Garcia gains 1 stack of [Rotational Acceleration], up to 9 stacks. When reaching 3 stacks, increases Crit by 30%. When reaching 6 stacks, increases Crit DMG by 30%. When having 9 stacks, ignores the target’s [Block] and 40% of DEF. At the start of the battle, she gains 2 stacks of [Rotational Acceleration].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Execution-Time.webp" alt="Execution Time" title='Execution Time'></img>
                <h1>Execution Time :
                    <h2>(Physical DMG) Single-target attack Garcia deals 120% DMG. She gains 1 stack of [Rotational Acceleration] when defeating the target. If she has l3 stacks of [Rotational Acceleration] before attacking, her DMG is increased by 45%.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Lock-On.webp" alt="Lock-On" title='Lock-On'></img>
                <h1>Lock-On :
                    <h2>(Passive) At the start of the turn, inflicts [▼DEF 2] on the enemy with the highest P.ATK Within a 6-tile radius around the character for 1 turn.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Battle-Fever.webp" alt="Battle Fever" title='Battle Fever'></img>
                <h1>Battle Fever :
                    <h2>(Passive) After initiating an Active Attack, the character takes 15% less DMG. Dealing a Crit DMG additionally decreases DMG taken by 25% for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Hookshot.webp" alt="Hookshot" title='Hookshot'></img>
                <h1>Hookshot :
                    <h2>(Debuff) [Instant]. Selects 1 enemy within a cross-shaped range around the character, drags them to the character, and inflicts [🛇Reaction Skills] for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Taste-of-Blood.webp" alt="Taste of Blood" title='Taste of Blood'></img>
                <h1>Taste of Blood :
                    <h2>(Support) [Instant] Garcia dispels 3 [Debuffs] on herself, recovers 30% HP, and gains [Potential Burst], lasting for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Fatal-Reaping.webp" alt="Fatal Reaping" title='Fatal Reaping'></img>
                <h1>Fatal Reaping :
                    <h2>(Reaction) Performs [Assisting Attack] if any enemy within 3 tiles of a cross- shaped range around the character is [Dying] after being attacked by the character’ 5 allies. The Assisting Attack deals [Piercing DMG] equal to 50% of the targets’ lost HP. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Spinning-Blade.webp" alt="Spinning Blade" title='Spinning Blade'></img>
                <h1>Spinning Blade :
                    <h2>(Physical DMG) [Instant] Garcia selects 1 enemy within a cross-shaped range around her and drags them to her side, dealing 70% DMG and recovering 2. NRG when defeating any target.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Lone-Ranger.webp" alt="Lone Ranger" title='Lone Ranger'></img>
                <h1>Lone Ranger :
                    <h2>(Passive) When there are no allies within 2 tiles around the character, ATK and DEF increase by 8%, and Crit increases by 10%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Painful-Cutting.webp" alt="Painful Cutting" title='Painful Cutting'></img>
                <h1>Painful Cutting :
                    <h2>(Basic Attack) Single-target attack. Garcia deals 33% Physical DMG 3 times. When used against an [Injured] target, Crit is increased by 25%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>
              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Sealing-Attack.webp" alt="Sealing Attack" title='Sealing Attack'></img>
                <h1>Sealing Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [🛇Passive Skills] on [Injured] targets before attacking, lasting for 2 turns.Painful Cutting</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Gale-Dance.webp" alt="Gale Dance" title='Gale Dance'></img>
                <h1>Gale Dance :
                    <h2>(Physical DMG) Deals 75% [AoE DMG] to all enemies within a 2-tile radius around the character. Before attacking, gains [▲Crit 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Garcia\Hidden-Executioner.webp" alt="Hidden Executioner" title='Hidden Executioner'></img>
                <h1>Hidden Executioner :
                    <h2>(Passive) If there is no ally within 1 tile of the target before attacking, inflicts [Isolate] and [🛇Dodge] on the target. The effects last for 2 turns and can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Garcia;
