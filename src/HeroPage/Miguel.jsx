import React from 'react';

const Miguel = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Miguel</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Miguel\Miguel-Profile.webp" alt="Miguel" title='Miguel' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 2</td>
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
                <td className="border border-gray-500 px-4 py-2">2796</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1255</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">441</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">883</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">111</td>
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
                <td className="border border-gray-500 px-4 py-2">Miguel</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">米格尔</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Oyama Rikiya</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Mercenary Captain</td>
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
                <td className="border border-gray-500 px-4 py-2">Watcher</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Papal States, Drifter, Discipline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        Miguel is the cunning, treacherous and decisive mercenary leader.
<br></br><br></br>
In order to satisfy his own interests, Miguel will take actions that ignore any bottom line. In his eyes, evil is commonplace. As long as the investment is enough, Miguel can ruthlessly destroy the so-called beauty in people’s eyes.
        </p>
      </div>

      {/* Miguel Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Miguel Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Miguel-Skill.png' alt='Miguel Skill'></img>
        </p>
      </div>

      {/* Miguel Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Miguel Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Miguel-Build.webp' alt='Miguel Skill'></img>
        </p>
      </div>

      {/* Miguel Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Miguel Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Miguel\Swiftness-Trait.webp" alt="Swiftness" title='Swiftness'></img>
                <h1>Swiftness :
                    <h2>Increases Miguel’s ATK by 15%, he can jump over allies, enemies, neutral characters, and items without consuming [Movement]. The effect can be activated up to 3 times per round. Before using a [Skill], if the has jumped, he recovers 1 NRG, up to 1 time per round. After Jumping, before using a [skill], he inflicts [Scorch] on the target for each instance of Physical DMG dealt.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Brutal-Kick.webp" alt="Brutal Kick" title='Brutal Kick'></img>
                <h1>Brutal Kick :
                    <h2>Single-target attack. Miguel deals 100% DMG and knocks the target back by 2 tiles. Inflicts [▼Move 2] on the target. The effect lasts for 2 turns. The activates [Pursuit], which deals 50% DMG and knocks the target back by 1 tile.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Healers-Bane.webp" alt="Healer’s Bane" title='Healer’s Bane'></img>
                <h1>Healer’s Bane :
                    <h2>(Passive) Before a Single-target attack, gains a 50% Chance to inflict [🛇Healing Received] on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Intuition.webp" alt="Intuition" title='Intuition'></img>
                <h1>Intuition :
                    <h2>(Passive) Takes 20% less [ranged DMG].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Flaming-Shot.webp" alt="Flaming Shot" title='Flaming Shot'></img>
                <h1>Flaming Shot :
                    <h2>(Physical DMG) Deals 70% [AoE DMG] to 1 enemy within a cross-shaped range around the Character and deals 40% [Fire] [AoE DMG] to all enemies Within 1 tile around the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Bounty-Hunting.webp" alt="Bounty Hunting" title='Bounty Hunting'></img>
                <h1>Bounty Hunting :
                    <h2>(Support) Miguel locks onto 1 enemy for 3 turns. Whoever defeats the target recovers 2 NRG. Before allies land an active attack on the marked enemy, they gain 2 random [Level 2 Buff] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Protective-Razor.webp" alt="Protective Razor" title='Protective Razor'></img>
                <h1>Protective Razor :
                    <h2>(Reaction) Before receiving a melee attack from the [front or side], Miguel performs [Strike Back] and inflicts 2 random [Level 2 Attribute Debuffs], dealing 50% physical DMG to the enemy. The effect lasts for 2 turns and this skill can be activated once per round.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Highland-Advantage.webp" alt="Highland Advantage" title='Highland Advantage'></img>
                <h1>Highland Advantage :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. When attacked by an enemy from [Lowland], the DMG taken is additionally decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Blinding-Powder.webp" alt="Blinding Powder" title='Blinding Powder'></img>
                <h1>Blinding Powder :
                    <h2>(Support) [Instant] Miguel inflicts [Blind] and [▼DMG 2], on all enemies within a 3×2 area in the target direction, lasting for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\World-Drifter.webp" alt="World Drifter" title='World Drifter'></img>
                <h1>World Drifter :
                    <h2>(Leader’s Aura) For all [Drifter] allies in battle, increases ATK by 15% and DEF by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Filthy-Blade.webp" alt="Filthy Blade" title='Filthy Blade'></img>
                <h1>Filthy Blade :
                    <h2>(Basic Attack) Single-target attack Miguel deals 100% [Melee Physical DMG]. When it becomes a [Back Attack], DMG dealt is increased by an additional 20%. His attack also inflicts 2 [Level 2 Attribute Debuffs] on the target. The effect lasts for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Fire-Bomb.webp" alt="Fire Bomb" title='Fire Bomb'></img>
                <h1>Fire Bomb :
                    <h2>(Basic Attack) Miguel fires a [Curved Shot] at the target tile, dealing 80% [Fire] [AoE Physical DMG].</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Place-Trap.webp" alt="Place Trap" title='Place Trap'></img>
                <h1>Place Trap :
                    <h2>(Support) After placing a [Beast Trap], the character can move again by 2 tiles and inherit the remaining Movement.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Miguel\Mourner.webp" alt="Mourner" title='Mourner'></img>
                <h1>Mourner :
                    <h2>(Physical DMG) Miguel targets the 2nd, 3rd, and 4th tiles in the specified direction, with eachof his hits dealing 40% [Fire] [AoE DMG] to enemies within a 3×3 area.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Miguel;
