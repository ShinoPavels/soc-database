import React from 'react';

const Inanna = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Inanna</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Inanna\Inanna-Profile.webp" alt="Inanna" title='Inanna' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 0</td>
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
                <td className="border border-gray-500 px-4 py-2">3150</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">926</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">332</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1321</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">553</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">65</td>
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
                <td className="border border-gray-500 px-4 py-2">Inanna</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">伊南娜 (Yīnánnà)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Yasuno Kiyono</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Princess of Iria</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria, Discipline, Sword of Convallaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        The third child of Iria’s royal family. Kindhearted and gentle by nature, she strives to become a competent princess in order to contribute to her country. Inanna has inherited her deceased mother’s beauty and is deeply loved by everyone. She is popular among the citizens-some even believe that Iria’s throne should be passed down to her.
<br></br><br></br>
Amid the tense situation in Waverun City, Inanna voluntarily proposed a visit to appease the people and avoid bloodshed. However, during her speech, the situation spiraled out of control and ultimately led to a violent conflict…
        </p>
      </div>

      {/* Inanna Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inanna Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Inanna-Skill.jpg' alt='Inanna Skill'></img>
        </p>
      </div>

      {/* Inanna Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inanna Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Inanna-Build.webp' alt='Inanna Skill'></img>
        </p>
      </div>

      {/* Inanna Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Inanna Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Inanna\Pearl-of-Iria-Trait.webp" alt="Pearl of Iria" title='Pearl of Iria'></img>
                <h1>Pearl of Iria :
                    <h2>At the start of the battle, summons 1 [Guard of the Princess]. At the end of the turn, heals the 2 allies with the lowest HP percentage within 4 tiles of the character for 25% of M.ATK and grants them 1 random [Level 2 Buff] for 2 turns. [Guard of the Princess]’s ATK and DEF increase by 15%. The skill to summon Guard of the Princess can be used an additional 2 times per battle.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Healing-Spell.webp" alt="Healing Spell" title='Healing Spell'></img>
                <h1>Healing Spell :
                    <h2>(Healing) Heals the target by 100% of M.ATK and dispels 1 [debuff] on the target.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Princesss-Prayer.webp" alt="Princess’s Prayer" title='Princess’s Prayer'></img>
                <h1>Princess’s Prayer :
                    <h2>(Support) Allows 1 ally that has already acted to [Act Again], and grants this ally [▲ATK 2] and [▲M.DEF 2] for 2 turns. If the target is [Guard of the Princess], additionally heals them for 60% of M.ATK.	</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Defense-Boost.webp" alt="Defense Boost" title='Defense Boost'></img>
                <h1>Defense Boost :
                    <h2>(Support) Grants [▲P.DEF 2] to all allies within the target location and grants immunity to [Defense Attribute Debuffs], lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Princesss-Comfort.webp" alt="Princess’s Comfort" title='Princess’s Comfort'></img>
                <h1>Princess’s Comfort :
                    <h2>(Healing) Inanna heals all allies within a 2-tile radius for 60% of her MATK and dispels 2 of their debuffs.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Guard!.webp" alt="Guard!" title='Guard!'></img>
                <h1>Guard! :
                    <h2>(Support) [Instant] Teleports the [Guard of the Princess] in front of Inanna and grants the Guard [Potential Burst] for 2 turns. When the Guard is defeated, the skill summons a new [Guard of the Princess].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Battlefield-Trial.webp" alt="Battlefield Trial" title='Battlefield Trial'></img>
                <h1>Battlefield Trial :
                    <h2>(Reaction) Decreases DMG taken by 8%. For each character defeated within 5 tiles around the character, increases M.ATK by 6%, up to 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Protection-of-Light.webp" alt="Protection of Light" title='Protection of Light'></img>
                <h1>Protection of Light :
                    <h2>(Reaction) When hit by an active single- target attack, the DMG taken is decreased by 30%. This effect can be activated 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Soul-Mate.webp" alt="Soul Mate" title='Soul Mate'></img>
                <h1>Soul Mate :
                    <h2>(Support) Grants all allies within 3 tiles around the character [Co-Attack] and [Co-Defense] for 3 turns. For [Iria] allies, the target count for [Co-Attack] and [Co-Defense] is additionally increased by 1.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Light-of-Sanction.webp" alt="Light of Sanction" title='Light of Sanction'></img>
                <h1>Light of Sanction :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and dispels 2 [Buffs].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Merciful-Strike.webp" alt="Merciful Strike" title='Merciful Strike'></img>
                <h1>Merciful Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the effect of the next healing skill by 15%, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\MDEF-Command.webp" alt="M.DEF Command" title='M.DEF Command'></img>
                <h1>M.DEF Command :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [🛇Passive Skills] and [🛇Reaction Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Inanna\Flight-of-the-Princess.webp" alt="Flight of the Princess" title='Flight of the Princess'></img>
                <h1>Flight of the Princess :
                    <h2>(Healing) Inanna sacrifices 90% of her current HP to dispel all [Debuffs], she gains [Invisibility] and [▲Healing 5], and expands the range of [Trait] skills by 2 times. She heals all allies within range. All effects last for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inanna;
