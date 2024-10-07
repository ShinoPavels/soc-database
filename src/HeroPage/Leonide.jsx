import React from 'react';

const Leonide = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Leonide</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Leonide\Leonide-Profile.webp" alt="Leonide" title='Leonide' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3683</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1420</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">996</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">407</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">195</td>
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
                <td className="border border-gray-500 px-4 py-2">Leonide</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">	列奥尼德</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Ryota Takeuchi</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Radiant Guard</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal States</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        High-ranking radiant guard, the captain of Cardinal Caris’s guard. A model of knight who is loyal, strong, restrained and humble.
<br></br><br></br>
Leonide has been guarding Caris for many years. Although he is deeply trusted, he has never done anything beyond this trust. He always abides by his duty and is loyal to the Cardinal’s orders. He only gives advice occasionally. When the two of them are alone.
<br></br><br></br>
Leonide has already entrusted all his loyalty to Caris. No matter what dangers he will face or encounter in the future, he will stand by her side as always.
        </p>
      </div>

      {/* Leonide Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leonide Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Leonide-Skill.png' alt='Leonide Skill'></img>
        </p>
      </div>

      {/* Leonide Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leonide Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Leonide-Build.webp' alt='Leonide Skill'></img>
        </p>
      </div>

      {/* Leonide Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Leonide Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Leonide\Fearless-Charge-Trait.webp" alt="Fearless Charge" title='Fearless Charge'></img>
                <h1>Fearless Charge :
                    <h2>Before attack or [charge] Before moving 1 square, the damage increases by 8% and ignores 10% of the target’s defense. [Instant] After actively attacking with other skills, the effect ends and you gain [Array Damage Reduction]. Effect: Reduce damage received by 30%, lasting for 2 rounds. [Trait] The effect cools down for 1 round. When the movement plus [charge] distance is greater than or equal to 5 blocks, the target’s [Block] and [Dodge] are ignored.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Full-Lance-Charge.webp" alt="Full Lance Charge" title='Full Lance Charge'></img>
                <h1>Full Lance Charge :
                    <h2>(Physical damage) Select an enemy within the cross range of yourself, charge to the target and cause 60% damage. Before attacking, add 30% of your own health to the attack (not exceeding 200% of the physical attack value); Back 2 spaces, apply target when impact occurs [Stunned], lasts for 1 round.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Light-of-Sanctuary.webp" alt="Light of Sanctuary" title='Light of Sanctuary'></img>
                <h1>Light of Sanctuary :
                    <h2>(Support) [Instant] Single-target Healing. Restores 25% of the target’s HP. If the target is [Unharmed], the effect changes, which grants [▲DMG 2] and [▲M.DEF 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Stay-Alert.webp" alt="Stay Alert" title='Stay Alert'></img>
                <h1>Stay Alert :
                    <h2>(Support) Perform 2 squares in the target direction [Alert], can cause 150% [physical range damage].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Assault-Stance.webp" alt="Assault Stance" title='Assault Stance'></img>
                <h1>Assault Stance :
                    <h2>(Support) [Instant], the movement power increases by 2 blocks, and it can only move in a straight line. After moving, attack increases by 15%. After attacking, you can move again and inherit the remaining movement power. After use, the skill changes to [Assault Release].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Radiant-Guard.webp" alt="Radiant Guard" title='Radiant Guard'></img>
                <h1>Radiant Guard :
                    <h2>(Passive) When combat begins, health increases by 15%. Not subject to [Injured] status impact. Before attacking, if your maximum health is greater than the target’s current health, knock the target back 1 square.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Reluctantly.webp" alt="Reluctantly" title='Reluctantly'></img>
                <h1>Reluctantly :
                    <h2>(Reaction) When being actively attacked, the damage taken is reduced by 8%. [Injured] While in this state, damage taken is reduced by 20%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Keep-the-Oath.webp" alt="Keep the Oath" title='Keep the Oath'></img>
                <h1>Keep the Oath :
                    <h2>(Reaction) Bear [Melee Damage] for all allies within 2 cells of yourself, proceed[Pre-made], causing 70% damage and cooling down for 3 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Charge-Pursuit.webp" alt="Charge Pursuit" title='Charge Pursuit'></img>
                <h1>Charge Pursuit :
                    <h2>(Physical DMG) [Instant]. Charges at 1 enemy within a cross-shaped range around the character, dealing 30% DMG. Gains immunity to [Preempt].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Arrayed-like-a-forest.webp" alt="Arrayed like a forest" title='Arrayed like a forest'></img>
                <h1>Arrayed like a forest :
                    <h2>(Aura) For all your own allies on the field whose camp is “Arrayed Like a Forest”, their attack will be increased by 10% and their defense will be increased by 20%. For skills with a cooldown of 4 or more rounds, the cooldown is reduced by 1 round.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Breaking-Lightning.webp" alt="Breaking Lightning" title='Breaking Lightning'></img>
                <h1>Breaking Lightning :
                    <h2>(Basic attack) Causes 100% physical damage to the enemy, and causes 100% physical damage to the target and the enemy. [🛇Dodge], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Energy-Back.webp" alt="Energy Back" title='Energy Back'></img>
                <h1>Energy Back :
                    <h2>(Basic attack) Causes 100% damage to the enemy and recovers an additional 1 point of energy.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Glorious-Lance-Charge.webp" alt="Glorious Lance Charge" title='Glorious Lance Charge'></img>
                <h1>Glorious Lance Charge :
                    <h2>(Physical damage) Select an enemy within the cross range of yourself, charge to them and cause 100% damage. Before attacking, restore your own health, the healing amount is 100% of the attack power, dispel 2 [Debuffs], and add 35% of your own health to the attack (not exceeding 200% of the physical attack value).</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Leonide\Parry.webp" alt="Parry" title='Parry'></img>
                <h1>Parry :
                    <h2>(Passive) Before being attacked by melee physical attacks, turn to the target and add 20% of your own physical attack to physical defense.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leonide;
