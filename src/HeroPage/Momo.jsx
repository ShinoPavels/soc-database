import React from 'react';

const Momo = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Momo</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Momo\Momo-Profile.webp" alt="Momo" title='Momo' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3438</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1081</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">366</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1542</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">728</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">132</td>
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
                <td className="border border-gray-500 px-4 py-2">Momo</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanesev Dub</td>
                <td className="border border-gray-500 px-4 py-2">Akari Kito</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Luxite Resonant</td>
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
                <td className="border border-gray-500 px-4 py-2">Vlder, Fortitude, Sword of Convallaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A vagrant Vlderian girl, a product of ‘Tranquillo’ s Luxite transformation experiments.
<br></br>
The inhumane experiments left horrible scars on her body. After escaping from the Darklight, the frail Momo started wandering the streets in rags, seemingly oblivious to her past or current circumstances. She is often slow in response, wearing a dazed expression. Whether due to side effects from the experiment or some other reason, Momo seems to exude an unusual sense of detachment. The truth is, she is quite content with her present life. She roams freely, exploring the world with a newfound friend-that darkness residing in her heart.
        </p>
      </div>

      {/* Momo Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Momo Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Momo-Skill.webp' alt='Momo Skill'></img>
        </p>
      </div>

      {/* Momo Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Momo Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Momo-Build.webp' alt='Momo Skill'></img>
        </p>
      </div>

      {/* Momo Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Momo Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Momo\Doom-Resonance-Trait.webp" alt="Doom Resonance" title='Doom Resonance'></img>
                <h1>Doom Resonance :
                    <h2>All enemies within 4 tiles of Momo take 35% more [DoT]. At the end of Momo’s turn, she gains 2 stacks of [Repulsion Barrier], up to 5 stacks. At the start of the battle, she also gains 3 stacks of [repulsion barrier].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Misfortune-Erosion.webp" alt="Misfortune Erosion" title='Misfortune Erosion'></img>
                <h1>Misfortune Erosion :
                    <h2>(Magic DMG) Momo deals 65% AoE DMG to all enemies within a 3×4 area in the target direction and inflicts 2 stacks of [Infection]. When Momo has [Doom Waken], the target immediately receives [infection] DMG after bein attacked and half of the [infection] stacks are removed.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Energy-Ray.webp" alt="Energy Ray" title='Energy Ray'></img>
                <h1>Energy Ray :
                    <h2>(Magical DMG) Single-target attack Deals 140% DMG. Before attacking, the character gains [Shield Break 1].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Field.webp" alt="Field" title='Field'></img>
                <h1>Field :
                    <h2>(Aura) Decreases [AoE DMG] taken by all allies within 3 tiles around the character by 25%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Erosive-Power.webp" alt="Erosive Power" title='Erosive Power'></img>
                <h1>Erosive Power :
                    <h2>(Passive) DMG increases by 10%. After dealing DMG, inflicts 1 stack of [Infection] on the target. After a single-target Active Attack, inflicts 1 additional stack of [Infection].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Repulsion-Application.webp" alt="Repulsion Application" title='Repulsion Application'></img>
                <h1>Repulsion Application :
                    <h2>(Decision) Momo selects to use [Repulsion Purging] or [Reverse Repulsion].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Erosive-Force-Field.webp" alt="Erosive Force Field" title='Erosive Force Field'></img>
                <h1>Erosive Force Field :
                    <h2>(Reaction) When [Repulsion Barrier] blocks a Melee Attack, Momo performs a [Strike Back], which deals 70% Magical DMG and inflicts 1 stack of [Infection].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>
              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Defense-Ranged-Attack.webp" alt="Defense (Ranged Attack)" title='Defense (Ranged Attack)'></img>
                <h1>Defense (Ranged Attack) :
                    <h2>(Reaction) When hit by a ranged attack, the DMG taken is decreased by 25%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Dark-Ripple.webp" alt="Dark Ripple" title='Dark Ripple'></img>
                <h1>Dark Ripple :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [🛇Passive Skills] and [🛇Reaction Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Toughness.webp" alt="Toughness" title='Toughness'></img>
                <h1>Toughness :
                    <h2>(Passive) Gains immunity to the effect of [Injured] and [Dying].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            
                <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Invogorating-Strike.webp" alt="Invigorating Strike" title='Invigorating Strike'></img>
                <h1>Invigorating Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and additionally recovers 1 NRG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Rank 9</td>
              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Hypnotic-Attack.webp" alt="Hypnotic Attack" title='Hypnotic Attack'></img>
                <h1>Hypnotic Attack :
                    <h2>(Basic Attack) Deals 80% magical DMG and grants a 30% chance to inflict [Sleep] on the target for 1 turn</h2>
                </h1>
                </td>
             

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Doom-Waken.webp" alt="Doom Waken" title='Doom Waken'></img>
                <h1>Doom Waken :
                    <h2>(Support) [Instant] Momo gains 2 stacks of [Repulsion Barrier] and [Doom Waken] for 3 turns. This effect cannot be dispelled or immunized againts.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Momo\Life-Devourer.webp" alt="Life Devourer" title='Life Devourer'></img>
                <h1>Life Devourer :
                    <h2>(Magical DMG) Single-target attack. Deals 150% DMG. After attacking, gains 45% [Life Steal].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Momo;
