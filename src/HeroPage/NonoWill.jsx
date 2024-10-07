import React from 'react';

const NonoWill = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">NonoWill</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\NonoWill\NonoWill-Profile.webp" alt="NonoWill" title='NonoWill' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Jump</td>
                <td className="border border-gray-500 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">HP</td>
                <td className="border border-gray-500 px-4 py-2">3368</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1335</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">420</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">948</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">449</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">159</td>
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
                <td className="border border-gray-500 px-4 py-2">NonoWill</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">诺诺薇儿 (Nonoville)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Ueda Reina</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Wandering Singer</td>
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
                <td className="border border-gray-500 px-4 py-2">Vlder, Aggression, Sword of Convallaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A leading figure among the Vlder, and younger sister to the Chieftain, LilyWill.
<br></br><br></br>
NonoWill is a quiet, but brave reformer. For too long, she watched her fellow Vlderians being oppressed and humiliated by their conquerors and vowed to find a way to save her people. She has a beautiful singing voice, but rarely shares it with others.
<br></br><br></br>
After the war in Iria broke out, NonoWill saw an opportunity to bring reform to her people and left the Vltar Mountain to find a better future for everyone.
        </p>
      </div>

      {/* NonoWill Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">NonoWill Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\NonoWill-Skill.webp' alt='NonoWill Skill'></img>
        </p>
      </div>

      {/* NonoWill Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">NonoWill Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\NonoWill-Build.webp' alt='NonoWill Skill'></img>
        </p>
      </div>

      {/* NonoWill Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">NonoWill Skills</h2>
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
                <img src="\assets\Hero-Art-Out\NonoWill\Mysterious-Siren-Trait.webp" alt="Mysterious Siren" title='Mysterious Siren'></img>
                <h1>Mysterious Siren :
                    <h2>NonoWill possesses [Jump] and she gains 15% bonus attack. She also gains [Veil] at the start of the round. Effect CD: 1 turn.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Thousand-Blades.png" alt="Thousand Blades" title='Thousand Blades'></img>
                <h1>Thousand Blades :
                    <h2>(Physical DMG) NonoWill performs 3 consecutive attacks against all enemies 2 tiles around herself, each dealing 30% DMG.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Infected-Dagger.webp" alt="Infected Dagger" title='Infected Dagger'></img>
                <h1>Infected Dagger :
                    <h2>(Physical DMG) Single-target attack. Deals 70% DMG and inflicts 3 stacks of [Infection].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Maneuver.webp" alt="Maneuver" title='Maneuver'></img>
                <h1>Maneuver :
                    <h2>(Passive) After initiating an Active Attack, the character can move again. The distance depends on the remaining Movement.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Enchanting-Shadow.webp" alt="Enchanting Shadow" title='Enchanting Shadow'></img>
                <h1>Enchanting Shadow :
                    <h2>(Support) [Instant]. NonoWill gains [Dodge] and inflicts [Vulnerable 3], which lasts for 2 turns on all enemies within 2 tiles around herself.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Phantom-Dance.webp" alt="Phantom Dance" title='Phantom Dance'></img>
                <h1>Phantom Dance :
                    <h2>(Support) [Instant] NonoWill gains [▲Move 2] in this turn. If she is within any enemy’s [Threat Range] at the end of the turn, return to the location where she was at the start of the turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Defense-Magical.webp" alt="Defense (Magical)" title='Defense (Magical)'></img>
                <h1>Defense (Magical) :
                    <h2>(Reaction) When hit by an active Magical Attack, the DMG taken is decreased by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\NRG-Recovery.webp" alt="NRG Recovery" title='NRG Recovery'></img>
                <h1>NRG Recovery :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, additionally recovers 1 NRG.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Anesthetic.webp" alt="Anesthetic" title='Anesthetic'></img>
                <h1>Anesthetic :
                    <h2>(Passive) After attacking, inflicts 1 stack of [Infection] on the target. When actively using [class skill] to hit targets with 5 or more stacks of [Infection], inflicts [Sleep] after attacking. The effect lasts for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Aggression.webp" alt="Aggression" title='Aggression'></img>
                <h1>Aggression :
                    <h2>(Leader’s Aura) For all [Aggression] allies in battle, increases ATK by 10%, DEF by 20%, and [Skill] DMG by 10%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Basic Attack) Deals 50% Physical DMG 2 times and dispels 2 [Buffs] on the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Triple-Slash.webp" alt="Triple Slash" title='Triple Slash'></img>
                <h1>Triple Slash :
                    <h2>(Basic Attack) Single-target attack. NonoWill performs 3 consecutive attacks, each dealing 35% Physical DMG.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Celestial-Song.webp" alt="Celestial Song" title='Celestial Song'></img>
                <h1>Celestial Song :
                    <h2>(Support) NonoWill gains the [Celestial Song] Aura. Effect: Grants all allies within 5 tiles [Regeneration 2] and [Immune to Attribute Debuff] and inflicts [🛇Active Skills] on all enemies within 3 tiles. The aura lasts for 2 turns and cannot be dispelled or immunized.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\NonoWill\Sharpless-Lupine-Blade.webp" alt="Shapeless Lupine Blade" title='Shapeless Lupine Blade'></img>
                <h1>Shapeless Lupine Blade :
                    <h2>(Physical DMG) Single-target attack. Deals 150% DMG. When the target is [Injured], increases Crit and Crit DMG by an additional 15% and ignores [Assisting Cover].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NonoWill;
