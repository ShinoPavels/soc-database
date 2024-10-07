import React from 'react';

const Magnus = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Magnus</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Magnus\Magnus-Profile.webp" alt="Magnus" title='Magnus' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 3</td>
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
                <td className="border border-gray-500 px-4 py-2">3284</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1420</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">669</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">995</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">420</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">231</td>
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
                <td className="border border-gray-500 px-4 py-2">Magnus</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">马格努斯</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Anyuan Yanggui</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Supreme Marshall</td>
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
        The marshall of the Iria Kingdom Army, a loyal and tough iron-blooded soldier, a veteran with a brave fighting style and proficient strategy, is a figure like Iria’s “military soul”.
<br></br><br></br>
As a close friend and deputy of King Faris, Magnus made great contributions to Iria’s war of independence. After the founding of Iria, he became the commander of the kingdom’s army and became the military strategy and combat skills teacher of the two princes.
<br></br><br></br>
After King Faris retired, Magnus represented King Faris’ will to assist Dantalion and continued to defend the peace of Iria.


        </p>
      </div>

      {/* Magnus Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Magnus Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Magnus-Skill.png' alt='Magnus Skill'></img>
        </p>
      </div>

      {/* Magnus Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Magnus Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Magnus-Build.webp' alt='Magnus Skill'></img>
        </p>
      </div>

      {/* Magnus Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Magnus Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Magnus\Experienced-General-Trait.webp" alt="Experienced General" title='Experienced General'></img>
                <h1>Experienced General :
                    <h2>Magnus decreases the ATK and DEF of all enemies within 4 tiles of himself by 15%. When attacking, he is granted bonus Physical ATK equal to 40% of his Physical DEF.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Mountain-Breaker.webp" alt="Mountain Breaker" title='Mountain Breaker'></img>
                <h1>Mountain Breaker :
                    <h2>(Physical DMG) Single-target attack. Magnus deals 150% DMG. When the target is [Injured], he also inflicts [Isolate] before attacking. Magnus restores 2 Energy when he defeats the target.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Attack-Stance.webp" alt="Attack Stance" title='Attack Stance'></img>
                <h1>Attack Stance :
                    <h2>(Support) [Instant], 40% of the own physical defense value is added to the physical attack value, and the damage received is increased by 8%, lasting for 2 rounds.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Resolve.webp" alt="Resolve" title='Resolve'></img>
                <h1>Resolve :
                    <h2>(Passive) Immediately recovers 5% HP when the character is defeated. Can be activated up to 1 time per battle.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Forceful-Cast.webp" alt="Forceful Cast" title='Forceful Cast'></img>
                <h1>Forceful Cast :
                    <h2>(Physical DMG) Magnus throws the enemy to an [Empty Tile] 3 or 4 tiles away from himself, dealing 70% DMG to all enemies within 1 tile of the target tile and inflicting [▼Move 1]. The effect lasts for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Cry-of-Victory.webp" alt="Cry of Victory" title='Cry of Victory'></img>
                <h1>Cry of Victory :
                    <h2>(Passive) When an enemy is defeated within 2 tiles around the character, inflicts [▼ATK 2] on all enemies within 5 tiles and grants [▲DMG 2] to all other allies. The effects last for 2 turns and will be triggered immediately before using [Mountain Breaker]. Can be triggered up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Bloodthirsty-Great-Axe.webp" alt="Bloodthirsty Great Axe" title='Bloodthirsty Great Axe'></img>
                <h1>Bloodthirsty Great Axe :
                    <h2>(Reaction) When being actively attacked by [front or side], if the opponent is within the attack range, use [normal attack]. [Strike Back], effective only once per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Hardening.webp" alt="Hardening" title='Hardening'></img>
                <h1>Hardening :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [DMG Reduction 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Crushing-Smash.webp" alt="Crushing Smash" title='Crushing Smash'></img>
                <h1>Crushing Smash :
                    <h2>(Physical damage) Single target attack, causing 120% damage, applied [Vulnerable 2], lasts 3 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Blood-&-Steel.webp" alt="Blood & Steel" title='Blood & Steel'></img>
                <h1>Blood & Steel :
                    <h2>(Leadership Aura) For all “Fortitude” allies in battle, increases ATK by 10% and DEF by 20%. Decreases the DMG taken by 10% if [Healthy]. Becomes immune to the negative effect of the [Injured] state.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Big-Power-Swing.webp" alt="Big Power Swing" title='Big Power Swing'></img>
                <h1>Big Power Swing :
                    <h2>(Basic attack) Causes 70% [range damage] to all enemies in a 3×2 area in the target direction.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Frenzy-Attack.webp" alt="Frenzy Attack" title='Frenzy Attack'></img>
                <h1>Frenzy Attack :
                    <h2>(Basic attack) Deals 100% damage to the enemy and generates 20% [Life Steal].</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Sharp-Blade.webp" alt="Sharp Blade" title='Sharp Blade'></img>
                <h1>Sharp Blade :
                    <h2>(Passive) When actively attacking, damage increased by 10%. When counterattacking, damage is increased by 30%.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Magnus\Steel-Chariot.webp" alt="Steel Chariot" title='Steel Chariot'></img>
                <h1>Steel Chariot :
                    <h2>(Physical damage) Single target attack, causing 300% of its own physical defense value as damage, not exceeding 200% of its physical attack value. Before attacking, 20% of own physical attack value is added to physical defense value for 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Magnus;
