import React from 'react';

const Guzman = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Guzman</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Guzman\Guzman-Profile.webp" alt="Guzman" title='Guzman' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 2</td>
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
                <td className="border border-gray-500 px-4 py-2">3859</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1609</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">583</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1125</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">405</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">180</td>
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
                <td className="border border-gray-500 px-4 py-2">Guzman</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Mamiya Yasuhiro</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Nightmare</td>
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
                <td className="border border-gray-500 px-4 py-2">Aggression, Drifter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        Guzman, a war machine wearing heavy armor and possessing boundless strength, carries out the orders of his superior, the Light of Darkness, without delay.
<br></br><br></br>
Under the heavy armor, no one can see Guzman’s face clearly. Such a terrifying person is willing to plunge himself into endless sorrow and despair because of an obsession.
        </p>
      </div>

      {/* Guzman Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guzman Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Guzman-Skill.png' alt='Guzman Skill'></img>
        </p>
      </div>

      {/* Guzman Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guzman Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Guzman-Build.webp' alt='Guzman Skill'></img>
        </p>
      </div>

      {/* Guzman Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guzman Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Guzman\Undead-Corpse-Trait.webp" alt="Undead Corpse" title='Undead Corpse'></img>
                <h1>Undead Corpse :
                    <h2>Guzman becomes immune to [🛇Resolve]. He possesses [Toughness] and when [Injured], his ATK is increased by 10%. When [Dying], his ATK is additionally increased by 20%.
                    When defeated, Guzman transforms into a [Corpse] with 50% decreased DEF. This lasts until the end of the battle and can be activated up to 1 time per battle.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Furious-Pursuit.webp" alt="Furious Pursuit" title='Furious Pursuit'></img>
                <h1>Furious Pursuit :
                    <h2>(Physical DMG) Single-target attack. Deals 120% DMG. If the target isn’t defeated, performs [Pursuit] at the cost of 20% of current HP and deals an additional 60% DMG.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Soul-Reaping.webp" alt="Soul Reaping" title='Soul Reaping'></img>
                <h1>Soul Reaping :
                    <h2>(Passive) If the character defeats an enemy in this turn, recovers 20% HP and 1 NRG at the end of the turn.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Coercion.webp" alt="Coercion" title='Coercion'></img>
                <h1>Coercion :
                    <h2>(Passive) At the end of the turn, inflicts [▼DMG 1] and [Vulnerable 1] on all enemies within the character’s 2-tile radius, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Soul-Catcher.webp" alt="Soul Catcher" title='Soul Catcher'></img>
                <h1>Soul Catcher :
                    <h2>(Physical DMG) Guzman selects 1 enemy within a cross-shaped range around himself and drags them to his side, dealing 100% [AoE DMG] and inflicting [▼Move 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Earthshaker.webp" alt="Earthshaker" title='Earthshaker'></img>
                <h1>Earthshaker :
                    <h2>(Physical DMG) Deals 50% [AoE DMG] to all enemies within a 3-tile straight line in the target direciton, inflicting [Stunned] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Survival-Instinct.webp" alt="Survival Instinct" title='Survival Instinct'></img>
                <h1>Survival Instinct :
                    <h2>(Reaction) Gains 8% DMG reduction before being attacked, 15% additional DMG reduction when [Injured], and 50% additional DMG reduction when [Dying].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Evil-Luxite-Intensification.webp" alt="Evil Luxite Intensification" title='Evil Luxite Intensification'></img>
                <h1>Evil Luxite Intensification :
                    <h2>(Support) [Instant]. Guzman sacrifices 45% of his current HP to gain [▲ATK 2], [▲Move 1], and [Regeneration 3], for 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Protective-Counterattack.webp" alt="Protective Counterattack" title='Protective Counterattack'></img>
                <h1>Protective Counterattack :
                    <h2>(Support) Takes 30% less Magical DMG. Takes [magical attacks] for all other allies within the character’s 2-tile radius. When attacked by an enemy within a 3-tile radius of the character, [strikes back] and deals 70% Physical DMG. can be activated up to 2 times per round. This effect lasts for 3 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Shield-Break-Attack.webp" alt="Shield-Break Attack" title='Shield-Break Attack'></img>
                <h1>Shield-Break Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and gains [Shield Break 1] before attacking.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Lives-Devouring.webp" alt="Lives Devouring" title='Lives Devouring'></img>
                <h1>Lives Devouring :
                    <h2>(Physical DMG) Prepares for 1 turn and takes 60% less DMG during this peroid. After casting the skill, deals 105% [AoE DMG] to all enemies within 4 tiles. Before attacking, grants 20% [Life Steal] for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Guzman\Darkest-Blade.webp" alt="Darkest Blade" title='Darkest Blade'></img>
                <h1>Darkest Blade :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. Before attacking, the character gains [Mana Conversion] and [Will] for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guzman;
