import React from 'react';

const Homa = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Homa</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Homa\Homa-Profile.webp" alt="Homa" title='Homa' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3126</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1434</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1002</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">385</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">210</td>
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
                <td className="border border-gray-500 px-4 py-2">Homa</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">霍玛</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Inoue Kikuko</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Parrot’s Partner</td>
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
                <td className="border border-gray-500 px-4 py-2">Breaker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Drifter, Aggression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        One of the cardinals of the Papal States of Rodinia, in charge of the affairs of the Iria region. She is gentle by nature, devout in her faith, and exudes the holy charm of a mature woman and a high-ranking clergyman.
<br></br><br></br>
Before becoming the cardinal, Caris was the head of the Great Sanctuary. She was both a teacher and a mother to Samantha, and she trained her as a candidate for the next generation of the Emperor with all her strength and strict requirements. As a devout believer and a firm supporter of the Emperor, Caris regards the restoration of the glory of the Light of Sanctuary as her mission and is willing to give everything for it.
<br></br><br></br>
Perhaps her piety and determination have long become a shackle that restrains herself…
        </p>
      </div>

      {/* Homa Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Homa Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Homa\Best-Partner-Trait.webp" alt="Best Partner" title='Best Partner'></img>
                <h1>Best Partner :
                    <h2>Ignore Block, increase Physical Attack by 20%.[healthy], the movement speed increases by 1. After the player or the friendly unit that [Balu] is staying on attacks, it will call [Balu] to continue attacking, causing physical damage equal to 40% of its own physical attack value, and stealing 2 random [Buffs] and 1 energy for [Homa].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Repel-Shot.webp" alt="Repel Shot" title='Repel Shot'></img>
                <h1>Repel Shot :
                    <h2>(Physical Damage) Select an enemy within the cross range, deal 135% damage, and knock them back 2 squares.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Circling-Aid.webp" alt="Circling Aid" title='Circling Aid'></img>
                <h1>Circling Aid :
                    <h2>(Support) [Instant], allowing [Balu] to stay on the target, giving it[▲Move 2], [Jump], both parties gain[▲Attack 2] During this period, when calling [Baalur] to attack or heal, it will cause 1.5 times the effect of the corresponding skill, which lasts for 2 rounds.	</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Tacit-Choice.webp" alt="Tacit Choice" title='Tacit Choice'></img>
                <h1>Tacit Choice :
                    <h2>(Choice) Choose to use[Wings Flutter]or[Cool breeze].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Shield-Break.webp" alt="Shield Break" title='Shield Break'></img>
                <h1>Shield Break :
                    <h2>(Passive) Attack possession [Shield] When attacking an enemy, attack increases by 30% and defense is ignored by 40%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Harmony.webp" alt="Harmony" title='Harmony'></img>
                <h1>Harmony :
                    <h2>(Passive) At the end of the action, if you have [normal attack] or used a skill, heal all allies within 2 squares of yourself, the healing amount is 20% of the physical attack value, and disperse 1 [Deduction].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Flying-Shadow-Game.webp" alt="Flying Shadow Game" title='Flying Shadow Game'></img>
                <h1>Flying Shadow Game :
                    <h2>(Reaction) Before being attacked by an enemy from the back or side, call on [Shahin] to inflict [Blind], lasts for 1 round, and can be activated at most once per round.[Dodge]After that, proceed[Counterattack], which can cause 70% physical damage and move itself back 2 squares.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Fleeing-Hare.webp" alt="Fleeing-Hare" title='Fleeing-Hare'></img>
                <h1>Fleeing-Hare :
                    <h2>(Reaction) When actively attacked, the damage received is reduced by 8%. After being attacked, you gain[▲Move 2], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Scattering.webp" alt="Scattering" title='Scattering'></img>
                <h1>Scattering :
                    <h2>(Physical Damage) Deals 70% [Area Damage] to all enemies in a 3*3 area in the target direction, applying[▼Move 1], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Brawl-Shooter.webp" alt="Brawl Shooter" title='Brawl Shooter'></img>
                <h1>Brawl Shooter :
                    <h2>(Passive) When performing a normal attack, you can attack enemies adjacent to you. When there is an enemy in the surrounding area, the attack rate increases by 15% and the critical hit rate increases by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Fighting-Blades.webp" alt="Fighting Blades" title='Fighting Blades'></img>
                <h1>Fighting Blades :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [🛇Passive Skills] on [Injured] targets before attacking, lasting for 2 turns.Frost Strike</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Frost-Strike.webp" alt="Frost Strike" title='Frost Strike'></img>
                <h1>Frost Strike :
                    <h2>(Normal attack) causes 100% physical damage to [healthy] Status: [▼Move 1], lasts for 1 round.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Pierce.webp" alt="Pierce" title='Pierce'></img>
                <h1>Pierce :
                    <h2>(Physical Damage) Single attack, causing 150% damage. The target is [Hurt] In this state, it causes an additional 20% damage. [Near death] In this state, it causes an additional 40% damage.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Homa\Hasharam-Carnival.webp" alt="Hasharam Carnival" title='Hasharam Carnival'></img>
                <h1>Hasharam Carnival :
                    <h2>(Support) The team that the target and [Balur] stay on gains [Noisy], and then deal 60% [physical range damage] to all enemies within 2 squares of its range, and then additionally apply [×Active Skill], [× Passive Skill], all effects last for 2 rounds. After the skill is released, [Balur] stays on the target for 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homa;
