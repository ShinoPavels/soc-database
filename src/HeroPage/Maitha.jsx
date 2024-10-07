import React from 'react';

const Maitha = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Maitha</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Maitha\Maitha-Profile.webp" alt="Maitha" title='Maitha' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3701</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1321</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">615</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">926</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">385</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">243</td>
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
                <td className="border border-gray-500 px-4 py-2">Maitha</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">麦莎 (Màishā)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Sayumi Suzushiro</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Mercenary Girl</td>
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
                <td className="border border-gray-500 px-4 py-2">Defender</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Iria, Sword of Convallaria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A supporter and initial member of the Sword of Convallaria.
<br></br><br></br>
Although orphaned from a young age, Maitha found a home when Rawiyah adopted her and settled in town. Despite her tragic childhood, she never lost her smile and quickly won everyone‘ 5 love with her kindness and trust in others. In order to protect the people she loves, she volunteered to join the mercenary group established by Rawiyah.
<br></br><br></br>
Maitha firmly believes that as long as one doesn’t lose hope, everything will eventually turn out alright.
        </p>
      </div>

      {/* Maitha Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Maitha Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Maitha-Skill.jpg' alt='Maitha Skill'></img>
        </p>
      </div>

      {/* Maitha Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Maitha Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Maitha-Build.webp' alt='Maitha Skill'></img>
        </p>
      </div>

      {/* Maitha Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Maitha Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Maitha\Shield-of-Convallaria-Trait.webp" alt="Shield of Convallaria" title='Shield of Convallaria'></img>
                <h1>Shield of Convallaria :
                    <h2>The character has [Block], and DMG taken is decreased by 20%. At the end of the turn, heals the 2 allies with the lowest HP percentage in battle, restoring 20% of their lost HP.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Leg-Slam.webp" alt="Leg Slam" title='Leg Slam'></img>
                <h1>Leg Slam :
                    <h2>(Physical DMG) Deals 120% DMG, knocks the target back by 2 tiles, and inflicts [▼Move 1] for 1 turn.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Guard.webp" alt="Guard" title='Guard'></img>
                <h1>Guard :
                    <h2>(Passive) Takes [Physical Attacks] for all other allies within a 2-tile radius of the character. When triggered, DEF is increased by 20%. Can be activated up to 1 time per round.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Co-Defense.webp" alt="Co-Defense" title='Co-Defense'></img>
                <h1>Co-Defense :
                    <h2>(Passive) For each ally within a 2-tile radius of the character, DEF increases by 10%, up to 40%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Come-on,-everybody!.webp" alt="Come on, everybody!" title='Come on, everybody!'></img>
                <h1>Come on, everybody! :
                    <h2>(Passive) At the end of the turn, recovers an additional 1 NRG. If NRG is less than 1, recovers another 1 NRG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Maithas-Charge.webp" alt="Maitha’s Charge" title='Maitha’s Charge'></img>
                <h1>Maitha’s Charge :
                    <h2>(Physical DMG) Charges at 1 enemy within a cross-shaped range around the character, dealing 130% DMG and knocking the target back by 2 tiles.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Endurance-Activation-S.webp" alt="Endurance Activation S" title='Endurance Activation S'></img>
                <h1>Endurance Activation S :
                    <h2>(Reaction) When receiving healing, gains [DMG Reduction 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Block-Counter.webp" alt="Block Counter" title='Block Counter'></img>
                <h1>Block Counter :
                    <h2>(Reaction) When receiving a melee attack from [front or side], there is a 100% chance to trigger [Block]. This leads to a [Strike Back] with [basic attack], dealing 70% Physical DMG to the attacker. This effect can be activated 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Battle-Flag-of-Convallaria.webp" alt="Battle Flag of Convallaria" title='Battle Flag of Convallaria'></img>
                <h1>Battle Flag of Convallaria :
                    <h2>(Leader’s Aura) For all [Sword of Convallaria] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Bandage.webp" alt="Bandage" title='Bandage'></img>
                <h1>Bandage :
                    <h2>(Healing) [Instant]. Single-target healing. Heals 30% HP.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Powerful-Attack.webp" alt="Powerful Attack" title='Powerful Attack'></img>
                <h1>Powerful Attack :
                    <h2>(Basic Attack) Deals 110% Physical DMG.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Maithas-Combo.webp" alt="Maitha’s Combo" title='Maitha’s Combo'></img>
                <h1>Maitha’s Combo :
                    <h2>(Physical DMG) Deals 20% DMG 1 time, 50% DMG 3 times, and knocks the target back by 2 tiles.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Maitha\Invulnerable.webp" alt="Invulnerable" title='Invulnerable'></img>
                <h1>Invulnerable :
                    <h2>(Support) Gains [DMG Reduction 4], [Minds Eye], and [Immunity to Disrupt] for 3 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Maitha;
