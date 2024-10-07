import React from 'react';

const Faycal = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Faycal</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Faycal\Faycal-Profile.webp" alt="Faycal" title='Faycal' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2814</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1321</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">385</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">926</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">105</td>
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
                <td className="border border-gray-500 px-4 py-2">Faycal</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">法卡尔 (Fǎkǎ’ěr)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Uemura Yūto</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Mercenary Boy</td>
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
                <td className="border border-gray-500 px-4 py-2">Sword of Convallaria, Iria, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A young man with a troubled past and one of the initial members of the Sword of Convallaria.
<br></br><br></br>
As a child, Faycal witnessed the destruction of his home. Despite his supportive relationship with Maitha and Rawiyah, he could not completely eliminate the darkness in his heart. For this reason, Faycal cherishes everything he has now while also being wary of outsiders. He vows to grow up and protect his family, even if it means sacrificing everything.
        </p>
      </div>

      {/* Faycal Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Faycal Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Faycal-Skill.png' alt='Faycal Skill'></img>
        </p>
      </div>

      {/* Faycal Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Faycal Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Faycal-Build.webp' alt='Faycal Build'></img>
        </p>
      </div>

      {/* Faycal Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Faycal Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Faycal\Faycals-Obsession-Trait.png" alt="Faycal’s Obsession" title='Faycal’s Obsession'></img>
                <h1>Faycal’s Obsession :
                    <h2>Increases ATK and DEF by 15%. Whenever the character deals DMG, there is a 100% chance to inflict 1 random [Level 2 Debuff] to the target for 2 turns. Before an attack, increases the character’s Crit by 10% for each [Debuff] the target has.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Foot-Sniping.webp" alt="Foot Sniping" title='Foot Sniping'></img>
                <h1>Foot Sniping :
                    <h2>(Physical DMG) Single-target attack. Deals 110% DMG and inflicts [▼Move 2] for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Dharana.webp" alt="Dharana" title='Dharana'></img>
                <h1>Dharana :
                    <h2>(Passive) At the start of the turn, if there are no enemies within a 2-tile radius of the character, gains [▲Crit 2] for 1 turn.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Rock-Climbing.webp" alt="Rock-Climbing" title='Rock-Climbing'></img>
                <h1>Rock-Climbing :
                    <h2>(Support) [Instant] Gains [▲Move 1], [Climb], and [Jump] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Precise-Shot.webp" alt="Precise Shot" title='Precise Shot'></img>
                <h1>Precise Shot :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. Before attacking, inflicts [🛇Dodge] on the target, lasting for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Arrow-of-Guardian-Convallaria.webp" alt="Arrow of Guardian Convallaria" title='Arrow of Guardian Convallaria'></img>
                <h1>Arrow of Guardian Convallaria :
                    <h2>(Physical DMG) Performs [Alert] within a 3×4 area in the target direction. Deals 120% DMG to enemies and interrupts their action.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Eye-for-an-Eye.webp" alt="Eye for an Eye" title='Eye for an Eye'></img>
                <h1>Eye for an Eye :
                    <h2>(Reaction) When being attacked from [front or side] by enemies who are not on adjacent tiles, initiates a [Strike Back], dealing 100% DMG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Fleeing-Hare.webp" alt="Fleeing Hare" title='Fleeing Hare'></img>
                <h1>Fleeing Hare :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [▲Move 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Cloud-Piercing-Arrow.webp" alt="Cloud-Piercing Arrow" title='Cloud-Piercing Arrow'></img>
                <h1>Cloud-Piercing Arrow :
                    <h2>(Physical DMG) Single-target attack. Deals 140% DMG with [Curved Shot].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Alert-Shot.webp" alt="Alert Shot" title='Alert Shot'></img>
                <h1>Alert Shot :
                    <h2>(Physical DMG) Performs [Alert] on a 3×3 area in the target direction, and deals 100% DMG. Can be activated up to 2 times per round.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Rapid-Fire.webp" alt="Rapid Fire" title='Rapid Fire'></img>
                <h1>Rapid Fire :
                    <h2>(Basic Attack) Single-target attack. Performs 2 consecutive attacks, each dealing 55% Physical DMG.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Fatal-Attack.webp" alt="Fatal Attack" title='Fatal Attack'></img>
                <h1>Fatal Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases Crit DMG by 15%.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Gale-billow-Volley.webp" alt="Gale-billow Volley" title='Gale-billow Volley'></img>
                <h1>Gale-billow Volley :
                    <h2>(Physical DMG) Deals 5 instances of 60% [AoE DMG] to random enemies within 2 tiles. The DMG dealt to the same target repeatedly will be decreased by 50%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Faycal\Heart-of-Alert.webp" alt="Heart of Alert" title='Heart of Alert'></img>
                <h1>Heart of Alert :
                    <h2>(Passive) When it is not the character’s turn, Increases Crit by 45% additionally and Crit DMG by 30%.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faycal;
