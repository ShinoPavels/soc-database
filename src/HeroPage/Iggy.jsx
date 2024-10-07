import React from 'react';

const Iggy = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Iggy</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Iggy\Iggy-Profile.webp" alt="Iggy" title='Iggy' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2438</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1496</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1048</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">187</td>
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
                <td className="border border-gray-500 px-4 py-2">Iggy</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">伊奇</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Kobayashi Yusuke</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Guerrilla Fighter</td>
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
                <td className="border border-gray-500 px-4 py-2">	Vlder, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A scout and guard of the Wilde Wandering Dance Troupe, Iggy is simple, kind and honest.
<br></br><br></br>
With slightly messy silver-white hair, Iggy always reminds people of a furry puppy. As long as you show kindness, he will give you a clumsy return.
<br></br><br></br>
Iggy is good at detecting and hunting large animals. The pistol in his hand is said to be a gift from an Illya friend, which also makes him have more affection and trust for Iria people than ordinary Vlder people.
<br></br><br></br>
For Iggy, his family and everyone in the dance troupe are everything to him.
        </p>
      </div>

      {/* Iggy Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Iggy Build</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Iggy-Skill.png' alt='Iggy Skill'></img>
        </p>
        
      </div>

      {/* Iggy Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Iggy Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Iggy\Gray-Wolf-Trait.webp" alt="Gray Wolf" title='Gray Wolf'></img>
                <h1>Gray Wolf :
                    <h2>Iggy possesses [Jump], [Climb], and 16% bonus ATK. When attacking from a [Highland] position, the ATK boost effect of the trait is doubled, and he gains [Armor Piercing].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Mountain-Alert.webp" alt="Mountain Alert" title='Mountain Alert'></img>
                <h1>Mountain Alert :
                    <h2>(Support) Performs [Alert] towards a 2×3 range in the target direction, dealing 150% Ranged Physical DMG once an enemy enters this area.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Powerful-Throw.webp" alt="Powerful Throw" title='Powerful Throw'></img>
                <h1>Powerful Throw :
                    <h2>(Physical Damage) Single attack, causing 150% damage.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Mountain-People.webp" alt="Mountain People" title='Mountain People'></img>
                <h1>Mountain People :
                    <h2>(Passive) oneself in[No damage]When in the state, the movement speed increases by 1 square.[Highland]When the attack or movement end point is more than 2 blocks higher than the starting point, the damage increases by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Grey-Wolf-Leap.webp" alt="Grey Wolf Leap" title='Grey Wolf Leap'></img>
                <h1>Grey Wolf Leap :
                    <h2>(Support) [Instant] Iggy jumps to the target location and gains [▲Crit DMG 1] for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Hunting-Preparation.webp" alt="Hunting Preparation" title='Hunting Preparation'></img>
                <h1>Hunting Preparation :
                    <h2>(Passive) At the end of the turn, recovers 10% HP and gains [Hunting Preparation]. Effect: Gains [Highland] advantage before attacking. If the target is defeated, recovers 1 NRG. The effect lasts until the start of the turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Preemptive.webp" alt="Preemptive" title='Preemptive'></img>
                <h1>Preemptive :
                    <h2>(Reaction) Before being attacked [frontally or from the side],[Counterattack], causing 70% damage, and can only take effect once per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Alertness-of-Wolf.webp" alt="Alertness of Wolf" title='Alertness of Wolf'></img>
                <h1>Alertness of Wolf :
                    <h2>(Reaction) If there is any enemy within 6 tiles of the character at the end of the turn, the character gains [▲Move 1] and [DMG Reduction 3] for 2 turns. CD: 4 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Luxite-Dust-Smoke-Bomb.webp" alt="Luxite-Dust Smoke Bomb" title='Luxite-Dust Smoke Bomb'></img>
                <h1>Luxite-Dust Smoke Bomb :
                    <h2>(Magic DMG) Iggy deals Magical DMG equal to 50% of his P.ATK to all enemies within 2 tiles of him and inflicts 3 stacks of [Infection] and [▼Move 2] for 1 turn. After attacking, Iggy can inherit the remaining Movement and Move Again.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\The-horn-of-the-distant-mountains.webp" alt="The horn of the distant mountains" title='The horn of the distant mountains'></img>
                <h1>The Horn of the Distant Mountains :
                    <h2>(Support) All allies on the field whose faction is Wilder gain[▲Move 1],[▲Attack 1], which lasts for 2 rounds. If you are within the enemy’s [Threat Range], you will receive[▲Speed ​​2], lasting 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Powerful-Attack.webp" alt="Powerful Attack" title='Powerful Attack'></img>
                <h1>Powerful Attack :
                    <h2>(Normal Attack) Deals 110% damage to the enemy.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Energy-Back.webp" alt="Energy Back" title='Energy Back'></img>
                <h1>Energy Back :
                    <h2>(Normal Attack) Deals 100% damage to the enemy and restores 1 additional energy.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Behemoth-Hunting.webp" alt="Behemoth Hunting" title='Behemoth Hunting'></img>
                <h1>Behemoth Hunting :
                    <h2>(Physical DMG) Single-target attack. Iggy deals 170% DMG. If the target’s max HP is higher than Iggy’s max HP, increases his Crit by 60% and he gains [Shield Break 2] before attacking.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Iggy\Flying-Dragon-Flash.webp" alt="Flying Dragon Flash" title='Flying Dragon Flash'></img>
                <h1>Flying Dragon Flash :
                    <h2>(Physical Damage) Choose a location within the cross range, charge to that location and deal 80% damage to all enemies along the way. Charge ignores obstacles. After attacking, you gain [Parry], lasting 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Iggy;
