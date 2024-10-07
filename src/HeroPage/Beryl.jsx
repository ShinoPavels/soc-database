import React from 'react';

const Beryl = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Beryl</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Beryl\Beryl-Profile.webp" alt="Beryl" title='Beryl' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 1</td>
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
                <td className="border border-gray-500 px-4 py-2">3239</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1115</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">449</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1599</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">660</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">122</td>
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
                <td className="border border-gray-500 px-4 py-2">Beryl</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">贝拉 (Bèilā)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Kuno Misaki</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Genius !</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal States, Aggression, Sword of Convallaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A genius little Sorceress. Beryl is as talkative and curious as she is quirky, and is very passionate about Luxite research.
<br></br><br></br>
From an early age, Beryl underwent human Luxite experiments, which stunted her physical and mental growth. This is why she appears far younger than her actual age. After an accident occurred where she was able to escape, she became a wandering Sorceress-sought after by the Papal States for her strong affinity for Luxite research.
<br></br><br></br>
She decided to settle in to the Town of Convallaria, of which she is very fond. She opened a Luxite Workshop to continue her research, and is constantly pursuing her desire to solve the (mysteries of the world).
        </p>
      </div>

      {/* Beryl Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beryl Overview</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Beryl-Skill.webp' alt='Beryl Skill'></img>
        </p>
      </div>

      {/* Beryl Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beryl Build</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Beryl-Build.webp' alt='Beryl Build'></img>
        </p>
      </div>

      {/* Beryl Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beryl Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Beryl\Im-a-Genius!-Trait.webp" alt="I’m a Genius!" title='I’m a Genius!'></img>
                <h1>I’m a Genius! :
                    <h2>Increases M.ATK by 25%. At the start of the turn, has a 100% chance to gain 1 random [Level 2 Buff], which lasts for 3 turns, and additionally recovers 1 NRG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Chuu-Chuu-Chuu!.webp" alt="Chuu Chuu Chuu!" title='Chuu Chuu Chuu!'></img>
                <h1>Chuu Chuu Chuu! :
                    <h2>(Magical DMG) Gains [Armor Piercing] before attacking, then deals 50% DMG to the target 3 times.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Wall-of-Flame.webp" alt="Wall of Flame" title='Wall of Flame'></img>
                <h1>Wall of Flame :
                    <h2>(Magical DMG) Selects 1 spot within a cross-shaped range around the character, deals 70% [AoE DMG] to all enemies in a horizontal row of 5 tiles, and changes the tiles into [Burning]. The effect lasts for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Casual-Search.webp" alt="Casual Search" title='Casual Search'></img>
                <h1>Casual Search :
                    <h2>(Support) [Instant] skill. Gains 1 random [Luxite Skill]. The skill remains available for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\ATK-Boost.png" alt="ATK Boost" title='ATK Boost'></img>
                <h1>ATK Boost :
                    <h2>(Support) Grants [▲ATK 2] to all allies within the target location and grants immunity to [Attack Attribute Debuffs], lasting for 2 turns.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\NRG-Restauration.webp" alt="NRG Restoration" title='NRG Restoration'></img>
                <h1>NRG Restoration :
                    <h2>(Passive) At the end of the turn, recovers an additional 1 NRG. If NRG is less than 1, recovers an additional 1 NRG.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Firewalking.webp" alt="Firewalking" title='Firewalking'></img>
                <h1>Firewalking :
                    <h2>(Reaction) Become immune to [Scorch] and [Burning] tiles. When on a [Burning] tile, the DMG taken is decreased by 10%. At the end of the turn, recovers 20% of the character’s HP.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Cutie.webp" alt="Cutie" title='Cutie'></img>
                <h1>Cutie :
                    <h2>(Reaction) Decreases [Ranged DMG] taken by 25% and [AoE DMG] taken by 40%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Flaming-Meteor.webp" alt="Flaming Meteor" title='Flaming Meteor'></img>
                <h1>Flaming Meteor :
                    <h2>(Magical DMG) Prepares for 1 turn. Once casting the skill, deals 140% [Fire] [AoE DMG] to all enemies within 3 tiles around the target, and [skips the turn].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Try-This!.webp" alt="Try This!" title='Try This!'></img>
                <h1>Try This! :
                    <h2>(Healing) Heals other allies within 3 tiles around the character, restoring 10% HP and 2 NRG.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Scorching-Attack.webp" alt="Scorching-Attack" title='Scorching-Attack'></img>
                <h1>Scorching-Attack :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [Scorch] on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\Bang!.webp" alt="Bang!" title='Bang!'></img>
                <h1>Bang! :
                    <h2>(Basic Attack) Single-target attack. Deals Physical DMG equal to 80% of the character’s M.ATK. There is a 30% chance to inflict [Stunned] for 1 turn.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\BOOOOOM!.webp" alt="BOOOOOM!" title='BOOOOOM!'></img>
                <h1>BOOOOOM! :
                    <h2>(Magical DMG) Cannot move before performing this skill. Randomly attacks enemies within 2 tiles 5 times, probably not the same target. Every hit deals 30% [Fire] [AoE DMG] to all enemies within 1 tile of the target, with a 50% chance of inflicting [Scorch].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Beryl\First-Aid.webp" alt="First Aid" title='First Aid'></img>
                <h1>First Aid :
                    <h2>(Healing) Single-target healing. Heals 80% HP.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Beryl;
