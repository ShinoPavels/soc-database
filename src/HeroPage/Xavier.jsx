import React from 'react';

const Xavier = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Xavier</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Xavier\Xavier-Profile.webp" alt="Xavier" title='Xavier' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1496</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">528</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1048</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">385</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">193</td>
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
                <td className="border border-gray-500 px-4 py-2">Xavier</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">泽维尔</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Ishii Takayuki</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">General of the King’s Army</td>
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
                <td className="border border-gray-500 px-4 py-2">Breaker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Iria, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A young military leader in the King’s Army of Iria, and an earnest soldier who serves Dantalion and Iria with his outstanding combat skills.
<br></br><br></br>
I After losing his parents in war, Xavier became a ward of the kingdom and received the support and training needed to become a top-notch soldier. This upbringing has ingrained a fierce loyalty to Iria in him, and he considers defending its peace to be his top priority.
<br></br><br></br>
Xavier is ready and willing to lay his life down for his country.
        </p>
      </div>

      {/* Xavier Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Xavier Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Xavier-Skill.webp' alt='Xavier Skill'></img>
        </p>
      </div>

      {/* Xavier Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Xavier Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Xavier-Build.webp' alt='Xavier Skill'></img>
        </p>
      </div>

      {/* Xavier Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Xavier Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Xavier\Solo-Carry.webp" alt="Solo Carry" title='Solo Carry'></img>
                <h1>Solo Carry :
                    <h2>For each enemy within a range of 2 tiles around Xavier, his ATK increases by 8%, up to 32%. At the start or end of the turn, if there are enemies within a 1-tile radius around him, he deals an additional 40% Physical DMG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Sweeping-Bash.webp" alt="Sweeping Bash" title='Sweeping Bash'></img>
                <h1>Sweeping Bash :
                    <h2>(Physical DMG) Deals 80% DMG to all enemies within a 3×2 area in the target direction and inflicts [▼P.DEF 1], lasting for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Battle-Fever.webp" alt="Combat Frenzy" title='Combat Frenzy'></img>
                <h1>Combat Frenzy :
                    <h2>(Passive) After dealing DMG on the character’s turn, grants 20% [Life Steal].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Sacrifice.webp" alt="Risky Move" title='Risky Move'></img>
                <h1>Risky Move :
                    <h2>(Passive) P.ATK increases by 20% but P.DEF and M.DEF are decreased by 15%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Legacy-of-Comrades.webp" alt="Legacy of Comrades" title='Legacy of Comrades'></img>
                <h1>Legacy of Comrades :
                    <h2>(Passive) When an ally in battle is defeated, recovers 30% HP for the character, and the character gains [▲ATK 2], [▲P.DEF 2], and [▲M.DEF 2] for 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Chaotic-Battle.webp" alt="Chaotic Battle" title='Chaotic Battle'></img>
                <h1>Chaotic Battle :
                    <h2>(Physical DMG) Xavier deals 70% DMG to all enemies within 2 tiles around him, generating 40% [Life Steal] and inflicting [▼Healing Received] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Indomitable-Spirit.webp" alt="Indomitable Spirit" title='Indomitable Spirit'></img>
                <h1>Indomitable Spirit :
                    <h2>(Reaction) For each enemy within 2 tiles before being attacked, decreases the incoming DMG by 10%, up to 40%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Activate-the-Power.webp" alt="Strength Activation" title='Strength Activation'></img>
                <h1>Strength Activation :
                    <h2>(Reaction) Increases the healing received by 10%. When receiving healing, gains [▲DMG 2] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Pioneer-Comp.webp" alt="Spear of Iria" title='Spear of Iria'></img>
                <h1>Spear of Iria :
                    <h2>(Passive) At the start of the round, fully recovers NRG and gains [▲SPD 3] for 2 turns. All effects have a CD of 5 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Iria-Banner.webp" alt="Battle Flag of Iria" title='Battle Flag of Iria'></img>
                <h1>Battle Flag of Iria :
                    <h2>(Leader’s Aura) For all Iria allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Charged-Strike.webp" alt="Charged Attack" title='Charged Attack'></img>
                <h1>Charged Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Frenzy-Attack.webp" alt="Feverish Attack" title='Feverish Attack'></img>
                <h1>Feverish Attack :
                    <h2>(Basic Attack) Deals 100% physical DMG and gains 20% [Life Steal].</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Falling-Comet-Dash.webp" alt="Falling Comet Dash" title='Falling Comet Dash'></img>
                <h1>Spear of Iria :
                    <h2>(Physical DMG) Xavier selects 1 spot within a cross-shaped range around him, charges to the location, and deals 90% DMG to enemies within a 3×4 area in the target direction. Inflicts [▼SPD 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Xavier\Musau.webp" alt="Musou" title='Musou'></img>
                <h1>Musou :
                    <h2>(Physical DMG) Xavier deals 110% DMG to all enemies within a 3×1 area in the target direction, knocking them back by 2 tiles. After attacking, he gains [Parry] and [Preempt] for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Xavier;
