import React from 'react';

const Tempest = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Tempest</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Tempest\Tempest-Profile.webp" alt="Tempest" title='Tempest' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3329</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1439</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">511</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1006</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">394</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">191</td>
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
                <td className="border border-gray-500 px-4 py-2">Tempest</td>
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
                <td className="border border-gray-500 px-4 py-2">Knighted Lancer</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Gender</td>
                <td className="border border-gray-500 px-4 py-2">Male</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Rarity</td>
                <td className="border border-gray-500 px-4 py-2">Epic</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Role</td>
                <td className="border border-gray-500 px-4 py-2">Breaker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">The Union, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tempest Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tempest Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Stormrage-Trait.webp" alt="Stormage" title='Stormage'></img>
                <h1>Stormage :
                    <h2>After initiating an Active Attack, gains [Wind Armor]. Effect: Increases DEF by 50%. After being attacked, gains [Windfury]. Effect: Increases ATK by 25%. All effects last for 2 turns.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Knockback-Bash.webp" alt="Knockback Bash" title='Knockback Bash'></img>
                <h1>Knockback Bash :
                    <h2>(Physical DMG) Single-target attack. Deals 140% DMG and knocks the target back by 2 tiles.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Knightly-Spirit.webp" alt="Knightly Spirit" title='Knightly Spirit'></img>
                <h1>Knightly Spirit :
                    <h2>(Passive) Increases ATK by 20% when attacking enemies from the [front]. Increases DEF by 40% when being attacked from the [front].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Inertial-Chop.webp" alt="Inertial Chop" title='Inertial Chop'></img>
                <h1>Inertial Chop :
                    <h2>(Passive) After initiating an Active Attack, deals 20% physical DMG to all enemies within a 1-tile radius of the character.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Stormrage-Strike.webp" alt="Stormrage Strike" title='Stormrage Strike'></img>
                <h1>Stormrage Strike :
                    <h2>(Physical DMG) Charges at 1 enemy within a cross-shaped range around the character, dealing 150% DMG. When having [Windfury], knocks the target back by 2 tiles.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Knights-Glory.webp" alt="Knight’s Glory" title='Knight’s Glory'></img>
                <h1>Knight’s Glory :
                    <h2>(Support) [Instant] Grants the target [▲ATK 2] for 2 turns. When the targets are from [The Union], the character gains an additional [Physical Shield] equal to 20% of HP.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\NRG-Recovery.webp" alt="NRG Recovery" title='NRG Recovery'></img>
                <h1>NRG Recovery :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, additionally recovers 1 NRG.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Storm-Trample.webp" alt="Storm Trample" title='Storm Trample'></img>
                <h1>Storm Trample :
                    <h2>(Reaction) Before receiving a Melee Attack from the [front or side], deals 50% physical DMG to all enemies within 1 tile around the character. If having [Wind Armor], additionally inflicts [▼DMG 2] for 1 turn. Can be triggered up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Will-to-Survive.webp" alt="Will to Survive" title='Will to Survive'></img>
                <h1>Will to Survive :
                    <h2>(Passive) If the character is [Dying] at the start of the turn, recovers 50 % HP and 2 NRG. Effect CD: 2 turns.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Crescendo-Combo.webp" alt="Crescendo Combo" title='Crescendo Combo'></img>
                <h1>Crescendo Combo :
                    <h2>(Physical DMG) Single-target attack. Deals 30% DMG and dispels 2 [Buffs] on the target, then performs [Pursuit], dealing 130% DMG.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and dispels 2 [Buffs] on the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Tempest\Charged-Attack.webp" alt="Charged Attack" title='Charged Attack'></img>
                <h1>Charged Attack :
                    <h2>(Basic Attack) Deals 100% physical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tempest;
