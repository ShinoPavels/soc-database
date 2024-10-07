import React from 'react';

const Nergal = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Nergal</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Nergal\Nergal-Profile.webp" alt="Nergal" title='Nergal' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3239</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1453</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">640</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1017</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">431</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">232</td>
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
                <td className="border border-gray-500 px-4 py-2">Nergal</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">内尔伽勒</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Suzuki Ryota</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">H.M. Praetorian</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A member of the Hanged Men, a cautious, taciturn, silent and decisive boy who lives with his sister, Rengal.
<br></br><br></br>
Nergal was born into a noble family, but became an orphan when his family was massacred by political enemies. The brother and sister were raised by Safiyyah, and after several years of elite education, they chose to join the Hanged Men to serve the country.
<br></br><br></br>
For Nergal, protecting Elia and his sister Rengal is the whole meaning of his life.
        </p>
      </div>

      {/* Nergal Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nergal Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Nergal-Skill.png' alt='Nergal Skill'></img>
        </p>
      </div>

      {/* Nergal Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nergal Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Nergal-Build.webp' alt='Nergal Skill'></img>
        </p>
      </div>

      {/* Nergal Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Nergal Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Nergal\Luxite-Gauntlet-Trait.webp" alt="Luxite Gauntlet" title='Luxite Gauntlet'></img>
                <h1>Luxite Gauntlet :
                    <h2>Nergal possesses [Block]. At the end of the turn, he gains [Powerful Shield Charge], up to 2 stacks. After performing a [block], he gains [Bayonet Charge], up to 2 stacks. The first [block] of each turn decreases the CD of all skills by 1 turn.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Knockback-Combo.webp" alt="Knockback Combo" title='Knockback Combo'></img>
                <h1>Knockback Combo :
                    <h2>(Physical DMG) Single-target attack. Deals 30% DMG. Then, performs [Pursuit] and deals DMG equal to 200% of the character’s P.DEF, up to 150% of P.ATK. Knocks the target back by 2 tiles.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Fast-Cover.webp" alt="Fast Cover" title='Fast Cover'></img>
                <h1>Fast Cover :
                    <h2>(Support) [Instant] Nergal swaps positions with a targeted ally, granting both of them [Physical Shield] with value equal to 50% of his P.ATK. Nergal take [Physical Attacks] for all allies within 1 tile. All effects lasts for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Crippling-Blow.webp" alt="Crippling Blow" title='Crippling Blow'></img>
                <h1>Crippling Blow :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG and inflicts [▼SPD 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Mark-Illumination.webp" alt="Mark Illumination" title='Mark Illumination'></img>
                <h1>Mark Illumination :
                    <h2>(Debuff) [Instant] Nergal inflicts [The Hanged Mens Mark], [▼ATK2], and [Vulnerable 2] on all enemies in a straight line of 5 tiles in the target direction. The effects last for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Charged-Bayonet.webp" alt="Charged Bayonet" title='Charged Bayonet'></img>
                <h1>Charged Bayonet :
                    <h2>(Passive) At the start of the turn, if the character is not within the enemy’s [threat range], gains [Bayonet Charge]. When [bayonet charge] is active and the character lands a single-target attack on enemies with [The Hanged Mens Mark], increases DMG by 30% and gains 30% [Life Steal].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Critical-Moment.webp" alt="Critical Moment" title='Critical Moment'></img>
                <h1>Critical Moment :
                    <h2>(Reaction) When the character is [Dying], [Dodges] all single-target attacks for 1 turn. At the start of the turn, recovers 50% HP. CD: 7 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Alacrity.webp" alt="Alacrity" title='Alacrity'></img>
                <h1>Alacrity :
                    <h2>(Leader’s Aura) For all [Alacrity] allies in battle, increases ATK by 10%, DEF by 20%, and Crit by 15%.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Burning-Bridges.webp" alt="Burning Bridges" title='Burning Bridges'></img>
                <h1>Burning Bridges :
                    <h2>(Physical DMG) Single-target attack Deals 150% DMG. Before attacking, gains [Offensive Stance] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Silencing-Attack.webp" alt="Silencing Attack" title='Silencing Attack'></img>
                <h1>Silencing Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [🛇Active Skills] on [Injured] targets before attacking, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Fatal-Attack.webp" alt="Fatal Attack" title='Fatal Attack'></img>
                <h1>Fatal Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases Crit DMG by 15%.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Absolute-Domain.webp" alt="Absolute Domain" title='Absolute Domain'></img>
                <h1>Absolute Domain :
                    <h2>(Support) Performs [Alert] on a 1-tile radius around the character, dealing 70% DMG and interrupting actions once an enemy enters this area. Can be activated up to 2 times per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Nergal\Close-Quarter-Release.webp" alt="Close Quarter Release" title='Close Quarter Release'></img>
                <h1>Close Quarter Release :
                    <h2>(Physical DMG) Single-target attack. Nergal deals 110% DMG and knocks the target back by 4 tiles. Then, he deals 50% [AoE DMG] to all enemies within a 3×3 area in the target direction, and inflicts [▼SPD 1] for 1 turn.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nergal;
