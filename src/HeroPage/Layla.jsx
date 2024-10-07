import React from 'react';

const Layla = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Layla</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Layla\Layla-Profile.webp" alt="Layla" title='Layla' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3239</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1467</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">514</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1026</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">561</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">233</td>
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
                <td className="border border-gray-500 px-4 py-2">Layla</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">莉拉</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Endo Aya</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Shiny Sun</td>
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
                <td className="border border-gray-500 px-4 py-2">Defender</td>
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
        The captain of the mobile team of the Surge City Public Security Bureau, a senior who graduated from the same school as Safiyyah and Rawiyah, has a personality as bright and gentle as the warm sunshine in the summer afternoon, and exudes an elegant and calm charm in every move.
<br></br><br></br>
Layla was born into a noble family, but she did not hesitate to betray the interests of the noble class. She always fought against all evil and injustice, and firmly believed that the smallest light could dispel the deepest darkness.
<br></br><br></br>
With this idealistic persistence in her heart, she is not only a safe haven in the hearts of every team member, but also an eternal light that illuminates the way forward for everyone.
        </p>
      </div>

      {/* Layla Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Layla Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Layla\Iris-Trait.webp" alt="Iris" title='Iris'></img>
                <h1>Iris :
                    <h2>Magic defense increased by 25%. [Preemptive]Can cause 60% physical damage, the trigger range is changed to within 3 squares of the self, and can be triggered up to 6 times per round. Gain 1 energy at the start of the action.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Brutal-Smash.webp" alt="Brutal Smash" title='Brutal Smash'></img>
                <h1>Brutal Smash :
                    <h2>(Physical Damage) Single attack, causing 130% damage. Before attacking, you gain [▲Physical Defense 2], [▲Magic Defense 2], lasts for 2 rounds.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Co-Defense.webp" alt="Co-Defense" title='Co-Defense'></img>
                <h1>Co-Defense :
                    <h2>(Passive) For every friendly unit within 2 squares of the player’s range, defense is increased by 10%, up to a maximum of 40%.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Police-Lasso.webp" alt="Police Lasso" title='Police Lasso'></img>
                <h1>Police Lasso :
                    <h2>(Support)[Instant], impose on the target [Imprisonment],[▼Attack 2] and [×Assistance], which lasts for 2 rounds.[Imprisonment] The goal is to impose additional [Dizziness], lasts for 2 rounds. Can be used 3 times.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Sheltered-Bay.webp" alt="Sheltered Bay" title='Sheltered Bay'></img>
                <h1>Sheltered Bay :
                    <h2>(Support) Gain[Immune 4], and all the allies within 3 squares of the range gain [▲Physical Defense 2], [▲Magic Defense 2] and [Piercing Immunity 3], all effects last for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\We-Are-Together.webp" alt="We Are Together" title='We Are Together'></img>
                <h1>We Are Together :
                    <h2>(Support)[Instant], teleports allies within 4 squares to you; you gain [Defense Support], [Block Enhancement 2] and [In the Same Boat]. All effects last for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Use-Waves.webp" alt="Use Waves" title='Use Waves'></img>
                <h1>Use Waves :
                    <h2>(Reaction) When attacked by a long-range enemy [front or side], if the attacker’s speed is lower than yours, dodge all attacks. This can be triggered once per round at most. When dodging, deal 60% physical damage to a random target in a 3*4 area in the attacker’s direction.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Front-Defense.webp" alt="Front Defense" title='Front Defense'></img>
                <h1>Front Defense :
                    <h2>(Reaction) When hit by an active attack from the [front], the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Scarlet-Night.webp" alt="Scarlet Night" title='Scarlet Night'></img>
                <h1>Scarlet Night :
                    <h2>(Leader’s Aura) For all allies whose camp is Scarlet Night, attack increases by 10%, defense increases by 20%, and damage increases by 12%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Cut-off-the-Clouds.webp" alt="Cut off the Clouds" title='Cut off the Clouds'></img>
                <h1>Cut off the Clouds :
                    <h2>(Physical Damage) Deals 25% physical damage 3 times to all enemies within 2 circles of the player. After the damage is dealt, [Vulnerable 2], which lasts for 2 rounds. After attacking, you gain [Iris tail posture], [Cut it all off], all effects last for 1 round.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Normal Attack) Deals 100% physical damage and dispels 2 [Buffs] on the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Sword-in-the-Staff.webp" alt="Sword in the Staff" title='Sword in the Staff'></img>
                <h1>Sword in the Staff :
                    <h2>(Normal Attack) Single attack, causing 75% physical damage; before attacking, if the target has 3 or more [Debuffs], chase after the attack, causing 35% physical damage twice.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Battlefield-Walk.webp" alt="Battlefield Walk" title='Battlefield Walk'></img>
                <h1>Battlefield Walk :
                    <h2>(Passive) Reduce damage taken by 15%, immune [burning] When the action ends, clear the enemy’s [traps] and special terrain effects within 2 squares of the range.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Layla\Fighting-Stance.webp" alt="Fighting Stance" title='Fighting Stance'></img>
                <h1>Fighting Stance :
                    <h2>(Passive) Add 40% of the Magic Defense to the Physical Attack, and increase Health by 10% at the start of battle.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Layla;
