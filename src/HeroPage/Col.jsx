import React from 'react';

const Col = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Col</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Col\Col-Profile.webp" alt="Col" title='Col' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 4</td>
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
                <td className="border border-gray-500 px-4 py-2">3151</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1415</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">449</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">991</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">498</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">163</td>
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
                <td className="border border-gray-500 px-4 py-2">Col</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">	科尔</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Tomita Miyou</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Marked Assassin</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal States, Drifter, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A mysterious assassin belonging to Miguel’s mercenary group. She glides around the battlefield wearing a mask. Col strikes swiftly and lethally, making her a frightening opponent for anyone unlucky enough to be her target. Despite her strange visage, beneath the mask is the face of an innocent child.
<br></br><br></br>
Col was adopted by Miguel when he found her on the verge of death, and she grew up to be a terrifying weapon for his mercenary group due to her extraordinary abilities. Because death is all she knows, Col lacks any sense of how the world works. Her personality is that of a child, and she depends entirely on Miguel for direction.
<br></br><br></br>
While humans are little more than targets for her, she loves small animals-especially cats (like me).
        </p>
      </div>

      {/* Col Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Col Guide</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Col-Skill.webp' alt='Col Skill'></img>
        </p>
      </div>

      {/* Col Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Col Build</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Col-Build.webp' alt='Col Build'></img>
        </p>
      </div>

      {/* Col Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Col Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Col\Killer-Instinct-Trait.webp" alt="Killer Instinct" title='Killer Instinct'></img>
                <h1>Killer Instinct :
                    <h2>Col possesses [Jump]. If there are no allies within 2 tiles around Col, her Physical ATK and Crit increase by 15%. She can [Act Again] after launching an active attack on an enemy from the [side or behind] and defeating them. CD: 1 turn.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Flurry-of-Stabs.webp" alt="Flurry of Stabs" title='Flurry of Stabs'></img>
                <h1>Flurry of Stabs :
                    <h2>(Physical DMG) Deals 45% DMG 3 times. When attacking, Crit increases by 20%.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Ambush.webp" alt="Ambush" title='Ambush'></img>
                <h1>Ambush :
                    <h2>(Passive) When performing an active attack, if the target is [Unharmed], deals 20% Physical DMG. When performing a [back attack] on [unharmed] targets, additionally inflicts [🛇Passive Skills] for 1 turn.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Shadow-Gait.webp" alt="Shadow Gait" title='Shadow Gait'></img>
                <h1>Shadow Gait :
                    <h2>(Support) [Instant] Teleports behind the enemy and steals 1 random [Attribute Buff] from the target.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Assault.webp" alt="Assault" title='Assault'></img>
                <h1>Assault :
                    <h2>(Support) [Instant] Gains [▲Crit 1], [▲Crit DMG 1] and [▲Move 2], for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Mask.webp" alt="Mask" title='Mask'></img>
                <h1>Mask :
                    <h2>(Healing) Col dispels 2 debuffs, recovers 25% HP, and she gains [Invisibility] and [▲Crit 5] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Eerie-Footwork.webp" alt="Eerie Footwork" title='Eerie Footwork'></img>
                <h1>Eerie Footwork :
                    <h2>(Reaction) When [Healthy], after receiving a single-target attack, teleports behind the attacker, initiates a [Strike Back], which deals 70% DMG. Gains [Dodge] for 1 turn. When [Injured], triggers [Dodge]. CD: 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Perfect-Assassin.webp" alt="Perfect Assassin" title='Perfect Assassin'></img>
                <h1>Perfect Assassin :
                    <h2>(Leader’s Aura) For all [Alacrity] allies in battle, increases ATK by 10%, DEF by 20%, Crit by 15%, and Crit DMG by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Omen-of-Death.webp" alt="Omen of Death" title='Omen of Death'></img>
                <h1>Omen of Death :
                    <h2>(Passive) Gains [Feverish Beast] when a character is defeated in battle, lasting for 3 turns. Recovers 2 Energy when the character defeats an enemy.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Hidden-Thorn.webp" alt="Hidden Thorn" title='Hidden Thorn'></img>
                <h1>Hidden Thorn :
                    <h2>(Basic Attack) Col deals 100% DMG and she gains [Ignore Assist] if launching a [Back Attack].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Critical-Strike.webp" alt="Critical Strike" title='Critical Strike'></img>
                <h1>Critical Strike :
                    <h2>(Basic Attack) Deals 50% Physical DMG 2 times and increases Crit by 15% before attacking.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Wipe-Out.webp" alt="Wipe Out" title='Wipe Out'></img>
                <h1>Wipe Out :
                    <h2>(Physical DMG) Col deals 60% DMG 3 times. Before attacking, when there are no allies within a 2-tile radius, Col gains [Ignore Assist]. When defeating a target, she gains [Dodge], lasting for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Col\Traceless-Shadows.webp" alt="Traceless Shadows" title='Traceless Shadows'></img>
                <h1>Traceless Shadows :
                    <h2>(Support) Gains 1 [Dodge] for 1 turn. Upon a successful [dodge], teleports to the attacker’s back, dealing 100% Physical DMG, and gains [dodge] again for 1 turn.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Col;
