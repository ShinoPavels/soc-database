import React from 'react';

const Dantalion = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Dantalion</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Dantalion\Dantalion-Profile.webp" alt="Dantalion" title='Dantalion' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 1.5</td>
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
                <td className="border border-gray-500 px-4 py-2">3683</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1609</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">573</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1123</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">504</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">175</td>
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
                <td className="border border-gray-500 px-4 py-2">Dantalion</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">迪塔利奥 (Dítǎlìào)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese</td>
                <td className="border border-gray-500 px-4 py-2">Eguchi Takuya</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Prince Regent</td>
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
                <td className="border border-gray-500 px-4 py-2">Destroyer</td>
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
        The eldest prince and de facto ruler of the Kingdom of Iria.
<br></br><br></br>
Dantalion has inherited the gloomy visage of his father and keeps his own counsel without much regard for others’ opinions of him. He founded the Hanged Men whom he used to maintain iron-fisted order in Iria.
<br></br><br></br>
Dantalion is Willing to sacrifice whatever he needs to ensure Iria’s future, even his own soul.
        </p>
      </div>

      {/* Dantalion Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dantalion Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Dantalion-Skill.webp' alt='Dantalion Skill'></img>
        </p>
      </div>

      {/* Dantalion Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dantalion Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Dantalion-Build.webp' alt='Dantalion Build'></img>
        </p>
      </div>

      {/* Dantalion Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dantalion Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Dantalion\Path-to-Kingship-Trait.webp" alt="Path to Kingship" title='Path to Kingship'></img>
                <h1>Path to Kingship :
                    <h2>Increases HP, ATK, and DEF by 15%. For every 1 character defeated in battle, recovers 35% HP and 1 NRG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Dawnlight.webp" alt="Dawnlight" title='Dawnlight'></img>
                <h1>Dawnlight :
                    <h2>(Magical DMG) Single-target attack. Deals Magical DMG equal to 130% of P.ATK. Before attacking, 2 random [Buffs] on the target become [Level 1 Attribute Debuffs] for 1 turn.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Inspired-Healing.webp" alt="Inspired Healing" title='Inspired Healing'></img>
                <h1>Inspired Healing :
                    <h2>(Passive) After initiating an Active Attack, heals the ally with the lowest HP in battle by 20% of the character’s P.ATK.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Unsheathe.webp" alt="Unsheathe" title='Unsheathe'></img>
                <h1>Unsheathe :
                    <h2>(Passive) Before initiating an active melee attack, deals Magical DMG equal to 40% of P.ATK. If the target has a [Shield], inflicts [Vulnerable 2] that lasts for 2 turns before attacking. All the effects can be triggered up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Daybreak.webp" alt="Daybreak" title='Daybreak'></img>
                <h1>Daybreak :
                    <h2>(Mixed DMG) Deals 40% Physical DMG to all enemies in the target direction within a range of 3×2 tiles and inflicts [🛇Healing Received] for 2 turns. Then initiates another attack, which deals Magical DMG equal to 40% of the character’s P.ATK and dispels 2 [Buffs].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\NRG-Depleting-Blow.webp" alt="NRG-Depleting Blow" title='NRG-Depleting Blow'></img>
                <h1>NRG-Depleting Blow :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG and depletes all of the target’s NRG.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Air-of-Royalty.webp" alt="Air of Royalty" title='Air of Royalty'></img>
                <h1>Air of Royalty :
                    <h2>(Reaction) DMG taken from Melee attacks decreases by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Tenacity.webp" alt="Tenacity" title='Tenacity'></img>
                <h1>Tenacity :
                    <h2>(Reaction) When hit by an active attack from a [Counter Role] character, the DMG taken is decreased by 25%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Destructive-Storm.webp" alt="Destructive Storm" title='Destructive Storm'></img>
                <h1>Destructive Storm :
                    <h2>(Physical DMG) Deals 50% [AoE DMG] to all enemies within a 4-tile radius around the character and inflicts 2 random [Level 2 Attribute Debuffs] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\For-Iria!.webp" alt="For Iria!" title='For Iria!'></img>
                <h1>For Iria! :
                    <h2>(Leader’s Aura) For all [Iria] allies in battle increases ATK by 10% and DEF by 20%. Allies’ attacks deal 20% more DMG to the enemies affected by 3 or more [Debuffs].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\White-Sword.webp" alt="White Sword" title='White Sword'></img>
                <h1>White Sword :
                    <h2>(Basic Attack) Single-target attack. Dantalion deals Magical DMG equal to 90% of his P.ATK.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Shield-break-Attack.webp" alt="Shield-break Attack" title='Shield-break Attack'></img>
                <h1>Shield-break Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and gains [Shield Break 1] before attacking.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Legacy-of-Comrades.webp" alt="Legacy of Comrades" title='Legacy of Comrades'></img>
                <h1>Legacy of Comrades :
                    <h2>(Passive) When an ally in battle is defeated, recovers 30% HP for the character, and the character gains [▲ATK 2], [▲P.DEF 2], and [▲M.DEF 2] for 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Dantalion\Endless-Dawn.webp" alt="Endless-Dawn" title='Endless-Dawn'></img>
                <h1>Endless-Dawn :
                    <h2>(Mixed DMG) Deals 40% Physical DMG 3 times. Deals Magical DMG equal to 50% P.ATK to the first enemy in each column within a 3×3 area in the target direction, knocks them back by 2 tiles, and dispels 1 [Buff].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dantalion;
