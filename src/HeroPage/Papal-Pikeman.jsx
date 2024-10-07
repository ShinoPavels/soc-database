import React from 'react';

const PapalPikeman = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Papal-Pikeman</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Papal-Pikeman-Profile.webp" alt="Papal-Pikeman" title='Papal-Pikeman' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 6</td>
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
                <td className="border border-gray-500 px-4 py-2">3219</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1360</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">466</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">951</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">443</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">185</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal Pikeman</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Papal Pikeman</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Gender</td>
                <td className="border border-gray-500 px-4 py-2">Female</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Rarity</td>
                <td className="border border-gray-500 px-4 py-2">Rare</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Role</td>
                <td className="border border-gray-500 px-4 py-2">Breaker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Papal States</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Papal-Pikeman Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Papal Pikeman Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Blessed-Spear-Trait.webp" alt="Blessed Spear" title='Blessed Spear'></img>
                <h1>Blessed Spear :
                    <h2>Increases P.ATK by 15%. Increases the range of the character’s [Basic Attack] by 1 tile when having 3 or more [Buffs].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Powerful-Throw.webp" alt="Powerful Throw" title='Powerful Throw'></img>
                <h1>Powerful Throw :
                    <h2>(Physical DMG) Single-target attack. Deals 150% DMG.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Crumbling-Smash.webp" alt="Crumbling Smash" title='Crumbling Smash'></img>
                <h1>Crumbling Smash :
                    <h2>(Physical DMG) Single-target attack. Deals 150% DMG. Beofre attacking, the character gains [Shield Break 2].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\High-Alert.webp" alt="High Alert" title='High Alert'></img>
                <h1>High Alert :
                    <h2>(Support) Performs [Alert] towards a 2-tile area in the target direction, dealing 150% [Physical AoE DMG] once an enemy enters this area.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Insight.webp" alt="Insight" title='Insight'></img>
                <h1>Insight :
                    <h2>(Passive) P.ATK increases by 8%. Before attacking, dispels 1 [Defense Attribute Buff] from the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\The-Protected.webp" alt="The Protected" title='The Protected'></img>
                <h1>The Protected :
                    <h2>(Passive) The character gains 15% bonus ATK and 30% bonus DEF while not affected by any [Debuff] and affected by at least 3 [Buffs].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Rage.webp" alt="Rage" title='Rage'></img>
                <h1>Rage :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [▲DMG 2] for 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Strength-Activation.webp" alt="Strength Activation" title='Strength Activation'></img>
                <h1>Strength Activation :
                    <h2>(Reaction) Increases the healing received by 10%. When receiving healing, gains [▲DMG 2] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Draconic-Flash-Step.webp" alt="Draconic Flash Step" title='Draconic Flash Step'></img>
                <h1>Draconic Flash Step :
                    <h2>(Physical DMG) Selects 1 spot within a cross-shaped range around the character, charges to the location, and deals 80% DMG to all enemies along the line, ignoring any blocks. After the attack, the character gains [Parry] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Papal-Pikeman\Pursuit.webp" alt="Pursuit" title='Pursuit'></img>
                <h1>Pursuit :
                    <h2>(Passive) When [Healthy], performs [Pursuit] after a basic attack, dealing 20% Physical DMG and knocking the target back by 1 tile.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PapalPikeman;
