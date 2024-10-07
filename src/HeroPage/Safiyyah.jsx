import React from 'react';

const Safiyyah = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Safiyyah</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Inc\Safiyyah\Safiyyah-Profile.webp" alt="Safiyyah" title='Safiyyah' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3368</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1312</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">916</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">179</td>
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
                <td className="border border-gray-500 px-4 py-2">Safiyyah</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">索菲亚 (Sophia)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Hikasa Yōko</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">The Hanged Man Commander</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        The meticulous and decisive commander of the Hanged Men, who would do anything to protect Iria, no matter his life or reputation.
<br></br><br></br>
As Dantalion’s most trusted person, Safiyyah always walks side by side with him on the tortuous road of changing Iria, giving him support and comfort. Her strong reason and gentleness are always hidden under the beautiful and dangerous mask, just like her inner kindness, which has never been shaken by the darkness.
        </p>
      </div>

      {/* Safiyyah Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Safiyyah Skills</h2>
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
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Rose-with-Thorns-Trait.webp" alt="Rose with Thorns" title='Rose with Thorns'></img>
                <h1>Rose with Thorns :
                    <h2>At the start of the action, forcibly select 2 random enemies within 6 grids of the player, and apply [Hanged Men Marks], lasts for 2 rounds. Attack has [Hanged Men Marks], deals an additional 32% of the target’s health as [Physical Damage], and generates 75% [Life Steal], no more than 200% of its own Physical Attack.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Hunting-Impluse.webp" alt="Hunting Impulse" title='Hunting Impulse'></img>
                <h1>Hunting Impulse :
                    <h2>(Magical DMG) Single-target attack Deals 85% DMG and inflicts 2 random [Level 2 Attribute Debuffs] on the target for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Settlement-of-the-Hanged-Man.webp" alt="Settlement of the Hanged Men" title='Settlement of the Hanged Men'></img>
                <h1>Settlement of the Hanged Men :
                    <h2>(Passive) After an attack, if the target is [Dying] and has [The Hanged Mens Mark], deals and additional [Piercing DMG] equal to 30% of the target’s HP. When DMG is dealt, the mark will be removed.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Shadow-Raid.webp" alt="Shadow Raid" title='Shadow Raid'></img>
                <h1>Shadow Raid :
                    <h2>(Physical Damage) Single attack, causing 130% damage. After attacking, you gain [Dodge], lasting 1 round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Shadowless-Blade.webp" alt="Shadowless Blade" title='Shadowless Blade'></img>
                <h1>Shadowless Blade :
                    <h2>(Support) Obtain [Shadowless Blade], lasts for 1 round, effect: Success [Dodge], deals 85% [Physical Range Damage] to all enemies in a 3*4 area in the target direction, applying [Vulnerable 2], lasts for 2 rounds, and restores 2 energy points.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Tactical-Adjustment.webp" alt="Tactical Adjustment" title='Tactical Adjustment'></img>
                <h1>Tactical Adjustment :
                    <h2>(Support) [Instant], select any target, change your profession to the target’s profession, and gain [Disguise], which lasts until the next action.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Shadow-Blade-Pursuit.webp" alt="Shadow Blade Pursuit" title='Shadow Blade Pursuit'></img>
                <h1>Shadow Blade Pursuit :
                    <h2>(Reaction) For those within 3 squares of itself, [Hanged Men Marks] The enemy, [Assistance Attack], which can cause 50% physical damage and can be effective once per round at most.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Emergency-Hedging.webp" alt="Emergency Hedging" title='Emergency Hedging'></img>
                <h1>Emergency Hedging :
                    <h2>(Reaction) When actively attacked, damage received is reduced by 8%. After being actively attacked, if you are [Dying] Status, Get [Dodge], effective once at most per round, lasting for 1 round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Order-to-Kill-traitors.webp" alt="Order to Kill traitors" title='Order to Kill traitors'></img>
                <h1>Order to Kill traitors :
                    <h2>(Support) Summon 1 person behind the target [Hanged Man Agent], inherits 85% of its own attributes, and applies [Hanged Men Marks], [▼P.DEF 2], [▼M.DEF 2], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\The-Hanged-Man-Commander.webp" alt="The Hanged Man Commander" title='The Hanged Man Commander'></img>
                <h1>The Hanged Man Commander :
                    <h2>(Aura) Attacks all friendly units within 5 grids of the player.[Hanged Man Mark], increases attack by 15%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Seal-Strike.webp" alt="Seal Strike" title='Seal Strike'></img>
                <h1>Seal Strike :
                    <h2>(Normal Attack) Causes 100% physical damage to [Injured] Before attacking, inflict [×Passive Skill], lasting 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Linked-Attack.webp" alt="Linked Attack" title='Linked Attack'></img>
                <h1>Linked Attack :
                    <h2>(Normal Attack) Single attack, causing 80% physical damage; causing the nearest friendly unit to gain [▲SPD ​​3], [▲ATK 1] Increase physical attack and magic attack by 10%. Lasting 1 round.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Breaking-Blade.webp" alt="Breaker Blade" title='Breaker Blade'></img>
                <h1>Breaker Blade :
                    <h2>(Physical Damage) Single attack, causing 170% damage. Before attacking, apply [isolated], which lasts for 1 round. After causing damage, the target is inflicted with [×Assistance], lasting 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Safiyyah\Corrosion-Weapons.webp" alt="Corrosion Weapons" title='Corrosion Weapons'></img>
                <h1>Corrosion Weapons :
                    <h2>(Piercing Damage) Single attack, causing 30% of HP [Piercing Damage], after attacking, exert [▼Attack 2], lasting 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Safiyyah;
