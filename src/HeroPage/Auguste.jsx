import React from 'react';

const Auguste = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Auguste</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Auguste\Auguste-Profile.webp" alt="Auguste" title='Auguste' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier O</td>
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
                <td className="border border-gray-500 px-4 py-2">3548</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1497</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">593</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1059</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">407</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">209</td>
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
                <td className="border border-gray-500 px-4 py-2">Auguste</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">奥古斯特</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Show Hayami</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Knight Leader</td>
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
                <td className="border border-gray-500 px-4 py-2">The Union, Agression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A knight directly under the Knights’ Council, a cold, ruthless, powerful, oppressive one-eyed knight who holds the incomplete God’s Wrath Sword Gram.
<br></br><br></br>
August was born into a branch of a famous knight family. With his own efforts, he was once a young talent who was expected to become a holy knight. However, he ruined his future after a mission failed. No one knows the real reason why the blade in his hand is incomplete and one eye is blind, but only knows that he has become numb and ruthless.
<br></br><br></br>
After the Tide Surge incident, he was ordered to lead the advance knight group to Ilia and announced that Tide Surge would be placed under the protection of the Knight Alliance.
        </p>
      </div>

      {/* Auguste Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Auguste Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Auguste\Gods-Wrath-Sword-Trait.webp" alt="Gods Wrath Sword" title='Gods Wrath Sword'></img>
                <h1>God's Wrath Sword :
                    <h2>Ignore[Block], after active attack or[Standby]After that, you will gain 1 layer of [Rage], which can be stacked up to 6 layers. When you have 6 layers of [Rage], after you actively attack, all layers will be removed, and you can[Re-action], gain [Rage Explosion 3], lasts for 2 turns, and restores 2 energy. At the start of the battle, gain 4 layers of [Rage].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Gods-Wrath-Moment.webp" alt="Gods Wrath Moment" title='Gods Wrath Moment'></img>
                <h1>God's Wrath Moment :
                    <h2>(Physical Damage)[Instant], select an enemy within the cross range, charge to the enemy and deal 40% damage, knocking them back 1 square. Skill changed to[God’s Wrath – Severance], the skill lasts for 2 rounds.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Armor-Breaking-Blast.webp" alt="Armor Breaking Blast" title='Armor Breaking Blast'></img>
                <h1>Armor Breaking Blast :
                    <h2>(Physical Damage) Single attack, causing 150% damage. Before attacking, you gain[Shield Breaker 2].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Knightly-Spirit.webp" alt="Knightly-Spirit" title='Knightly-Spirit'></img>
                <h1>Knightly-Spirit :
                    <h2>(Passive) When attacking an enemy [frontally], Attack increases by 20%. When being attacked [frontally], Defense increases by 40%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Warm-Touch.webp" alt="Warm Touch" title='Warm Touch'></img>
                <h1>Warm Touch :
                    <h2>(Passive) When attacking actively, additional targets are caused[Piercing Damage], damage is 15% of the target’s current health, restore 10% of the target’s health, and can be activated once per round at most. Can be triggered simultaneously if multiple characters are hit.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Nightmare.webp" alt="Nightmare" title='Nightmare'></img>
                <h1>Nightmare :
                    <h2>(Support) Gain 2 layers of [Rage], gain 60% of physical attack and magic attack[Physical Shield]and[Immunity 2].[Hurt], gain an additional layer of [Rage], gain[▲Damage 2], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Activate-the-Power.webp" alt="Activate the Power" title='Activate the Power'></img>
                <h1>Activate the Power :
                    <h2>(Reaction) Increases the effect of treatment by 10%; when treated, gains[▲Damage 2], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Look-down-on-others.webp" alt="Look down on others" title='Look down on others'></img>
                <h1>Look down on others :
                    <h2>(Reaction) Reduces damage taken by 15%. When attacked, gains 1 layer of [Rage], which can be effective up to 2 times per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Attack-Command.webp" alt="Attack Command" title='Attack Command'></img>
                <h1>Attack Command :
                    <h2>(Aura) Increases the attack of allies within 2 squares of itself by 12%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Tornado.webp" alt="Tornado" title='Tornado'></img>
                <h1>Tornado :
                    <h2>(Physical Damage) Deals 90% [Area Damage] to all enemies within the range of the player, inflicting[×Treatment], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Charged-Strike.webp" alt="Charged Strike" title='Charged Strike'></img>
                <h1>Charged Strike :
                    <h2>(Normal attack) Causes 100% physical damage, and the next skill’s damage increases by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Collapse.webp" alt="Collapse" title='Collapse'></img>
                <h1>Collapse :
                    <h2>(Normal Attack) Single attack, causing 100% damage.[healthy]state, remove an additional 1 energy from the target.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Overload-Roar-Break.webp" alt="Overlord Roar Break" title='Overlord Roar Break'></img>
                <h1>Overlord Roar Break :
                    <h2>(Physical Damage) Single attack, causing 170% damage. Before attacking, disperse 3 targets[Gain], impose[isolated]Lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Auguste\Gods-Wrath-Destruction.webp" alt="Gods Wrath Destruction" title='Gods Wrath Destruction'></img>
                <h1>God's Wrath Destruction :
                    <h2>(Physical Damage) Deals 90% damage to all enemies in a 3*4 area in the target direction. Before attacking, disperse 2 targets[Gain]When in [Rage Explosion] state, there is a 50% chance to inflict[Dizziness].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auguste;
