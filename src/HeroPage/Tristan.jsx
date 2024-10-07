import React from 'react';

const Tristan = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Tristan</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Inc\Tristan\Tristan-Profile.webp" alt="Tristan" title='Tristan' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3811</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1629</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1142</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">593</td>
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
                <td className="border border-gray-500 px-4 py-2">Tristan</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">翠斯坦</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Asami Seto</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Gang Leader</td>
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
                <td className="border border-gray-500 px-4 py-2">Destroyer</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Aggression, The Union</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        The leader of the “Water Ghost Gang” gang in Langyong City, she walks between the black and white worlds, and relies on his strategies to make the gang gain a foothold in the complex power gap of the dock.
<br></br><br></br>
Tristan acts eccentrically, but treats the gang members very righteously, regards them as family members who can be entrusted with their lives, and tries her best to protect the survival of the gang and the safety of his family.
<br></br><br></br>
This is the unknown side of Tristan under the rebellious appearance, which is full of love and righteousness.
        </p>
      </div>

      {/* Tristan Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tristan Skills</h2>
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
                <img src="\public\assets\Hero-Art-Inc\Tristan\Blood-Rage-Trait.webp" alt="Blood Rage" title='Blood Rage'></img>
                <h1>Blood Rage :
                    <h2>Release [Blood Rage] After that, trigger[Infinite Unyielding], which lasts until the next 2 rounds of action begin. [Rampage] Lasts for 4 rounds, during which the critical hit rate and critical hit damage are increased by 20%, and [Instant] Skill cooldown is reduced by 2 turns, and energy consumption is reduced by 1.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Exploding-Crystal-Dust.webp" alt="Exploding Crystal Dust" title='Exploding Crystal Dust'></img>
                <h1>Exploding Crystal Dust :
                    <h2>(Physical Damage) Deals 85% damage to all characters within 2 squares of the target and applies 1 random [Level 2 Attribute Debuff], lasts for 2 rounds.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Fury-Pursuit.webp" alt="Fury Pursuit" title='Fury Pursuit'></img>
                <h1>Fury Pursuit :
                    <h2>(Physical Damage) Single attack, dealing 120% damage. If the target is not defeated, sacrifice 20% of the current health to [pursue], dealing an additional 60% damage.	</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Fight-off-Pursuit.webp" alt="Fight off Pursuit" title='Fight off Pursuit'></img>
                <h1>Fight off Pursuit :
                    <h2>(Physical Damage) Single attack, dealing 70% damage. After attacking, perform [Chase], dealing 70% damage, knocking back 2 squares.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Hot-Blooded-Step.webp" alt="Hot Blooded Step" title='Hot Blooded Step'></img>
                <h1>Hot Blooded Step :
                    <h2>(Support) [Instant], for points within 1 circle [Charge], and obtain [▲Damage 2], which lasts for 1 round. After use, the skill changes to [Hot-blooded Headbutt], lasts for 2 rounds.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Burning-Blood.webp" alt="Burning Blood" title='Burning Blood'></img>
                <h1>Burning Blood :
                    <h2>(Passive) [Health] When in the state, add 15% of your own magic attack value to your physical attack value; [Injured] When in the state, add 25% of the magic attack value to the physical attack value. [Rampage] The effect is doubled.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Street-Style.webp" alt="Street Style" title='Street Style'></img>
                <h1>Street Style :
                    <h2>(Reaction) Reduces melee damage by 20%, [Preemptive], [Strike Back] Time [Block], and the damage taken is reduced by an additional 50%.[Strike Back] When attacked by a single target and the target is within the attack range, use normal attacks or skills to counterattack, causing certain damage. Afterwards, an additional attack is made, dealing 70% physical damage. This can be triggered once per round at most.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Defense-Arrows.webp" alt="Defense Arrows" title='Defense Arrows'></img>
                <h1>Defense Arrows :
                    <h2>(Reaction) When attacked from a distance, damage taken is reduced by 25%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Burial-Punch.webp" alt="Burial Punch" title='Burial Punch'></img>
                <h1>Burial Punch :
                    <h2>(Physical Damage) Single attack, dealing 20% ​​damage, knocking back 1 square; then dealing 110% to all enemies within 2 squares of the target. [Fire attribute] [Area Damage]. If not in [Rampage], after attacking, it will teleport itself to the nearest friendly unit within 4 squares.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Point-Blasting.webp" alt="Point Blasting" title='Point Blasting'></img>
                <h1>Point Blasting :
                    <h2>(Deduction) [Instant], impose on the target [Targeted blasting].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Seal-Strike.webp" alt="Seal Strike" title='Seal Strike'></img>
                <h1>Seal Strike :
                    <h2>(Normal attack) causes 100% physical damage to [Injured]. Before attacking, inflict [🛇Passive Skill], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Critical-Strike.webp" alt="Critical Strike" title='Critical Strike'></img>
                <h1>Critical Strike :
                    <h2>(Normal attack) Deals 100% physical damage and increases critical damage by 15%.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Family.webp" alt="Family" title='Family'></img>
                <h1>Family :
                    <h2>(Passive) [Healthy], it will attack other friendly troops within 2 squares of itself. [Defense Support]; [Dying] When you turn 2 blocks of your own friendly forces into your own [Defense Support]. After any effect is triggered, all friendly troops within 3 squares of the range will gain [▲Attack 2], [Immunity 2], lasts for 2 rounds and can only take effect once per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Tristan\Destruction-Storm.webp" alt="Destruction Storm" title='Destruction Storm'></img>
                <h1>Destruction Storm :
                    <h2>(Physical Damage) Deals 50% [Area Damage] to all enemies within 4 squares of itself, applies 2 random [Level 2 Attribute Debuff], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tristan;
