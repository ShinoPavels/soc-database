import React from 'react';

const Suppression = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Suppression</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Suppression\Suppression-Profile.webp" alt="Suppression" title='Suppression' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3583</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1298</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">482</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">911</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">459</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">236</td>
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
                <td className="border border-gray-500 px-4 py-2">Suppression</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">光辉卫士</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Papal Radiant Guard</td>
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
                <td className="border border-gray-500 px-4 py-2">Defender</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Fortitude, Papal States</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Suppression Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Suppression Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Magic-Suppression-Trait.webp" alt="Magic Suppression" title='Magic Suppression'></img>
                <h1>Magic Suppression :
                    <h2>Magical DMG taken is decreased by 20%. Before taking Active Attacks launched by enemies within 3 tiles around the character from the [front or side], performs [Preempt], dealing [Piercing DMG] equal to 60% of M.DEF.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Knockback-Combo.webp" alt="Knockback Combo" title='Knockback Combo'></img>
                <h1>Knockback Combo :
                    <h2>(Physical DMG) Single-target attack. Deals 30% DMG. Then, performs [Pursuit] and deals DMG equal to 200% of the character’s P.DEF, up to 150% of P.ATK. Knocks the target back by 2 tiles.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Resolve.webp" alt="Resolve" title='Resolve'></img>
                <h1>Resolve :
                    <h2>(Passive) Immediately recovers 5% HP when the character is defeated. Can be activated up to 1 time per battle.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Sharpened-Blade.webp" alt="Sharpened Blade" title='Sharpened Blade'></img>
                <h1>Sharpened Blade :
                    <h2>(Passive) When performing an active attack, DMG increases by 10%. When the character strikes back, DMG increases by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Devout-Guard.webp" alt="Devout Guard" title='Devout Guard'></img>
                <h1>Devout Guard :
                    <h2>(Healing) The character dispels 3 [debuffs], recovers 40% HP, and gains [▲P.DEF 2] and [▲M.DEF 2]. The character takes attacks for all other allies within 2 tiles around the character and increases the [Trait] effect to 200%, lasting for 2 turns. This effect cannot be dispelled or immunized.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Demonshear.webp" alt="Demonshear" title='Demonshear'></img>
                <h1>Demonshear :
                    <h2>(Magica DMG) Deals magical DMG equal to 80% P.ATK to all enemies within a 3×3 area in the target direction and inflicts [▼ATK 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Defense-Magical.webp" alt="Defense (Magical)" title='Defense (Magical)'></img>
                <h1>Defense (Magical) :
                    <h2>(Reaction) When hit by an active Magical Attack, the DMG taken is decreased by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Flagellant.webp" alt="Flagellant" title='Flagellant'></img>
                <h1>Flagellant :
                    <h2>(Passive) Gains 1 stack of [Penance] after taking DMG. Each stack decreases DMG taken by 8%. This effect cannot be dispelled. Additionally recovers 1 NRG if the character has [Penance] stacks at the end of each turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Battle-Flag-of-Papal-States.webp" alt="Battle Flag of Papal States" title='Battle Flag of Papal States'></img>
                <h1>Battle Flag of Papal States :
                    <h2>(Leader’s Aura) For all [Papal States] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            
                <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Invigorating-Strike.webp" alt="Invigorating Strike" title='Invigorating Strike'></img>
                <h1>Invigorating Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and additionally recovers 1 NRG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Rank 9</td>
              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Suppression\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target, lasting for 2 turns.</h2>
                </h1>
                </td>
              

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Suppression;
