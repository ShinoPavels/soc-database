import React from 'react';

const Taair = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Taair</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Taair\Taair-Profile.webp" alt="Taair" title='Taair' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3061</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">911</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">373</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1300</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">640</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">288</td>
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
                <td className="border border-gray-500 px-4 py-2">Taair</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">塔埃尔</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Tachibana Shinnosuke</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Historian</td>
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
                <td className="border border-gray-500 px-4 py-2">Watcher</td>
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
        The prince of the old Iria Kingdom is a young man who is calm, kind, gentle and casual, and has a high affinity.
<br></br><br></br>
As a puppet of the Papal States, Taair was forced to become the banner of the restoration of the old state, but he was more like a scholar of history and had no interest in power or politics.
<br></br><br></br>
Although Taair has calmly accepted the fate of becoming a chess piece, he still longs for a wandering life and has never forgotten his ideal – to record the true history of Iria with the tip of his pen.
        </p>
      </div>

      {/* Taair Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Taair Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Taair\Historian-Trait.webp" alt="Historian" title='Historian'></img>
                <h1>Historian :
                    <h2>The upper limit of [Knowledge] layers is 6. 5 layers of [Knowledge] are obtained at the beginning of the battle, and the movement increases by 1 space. When releasing treatment and support skills, the maximum range is increased by 2 blocks, and an additional 25% of the magic attack value is added to the target after release. When the action starts, gain 1 additional layer of [Knowledge].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Treatment.webp" alt="Treatment" title='Healing'></img>
                <h1>Treatment :
                    <h2>(Treatment) Heal the target, the healing amount is 100% of the magic attack value, and dispel 1 [debuff] on the target.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Seeds-of-Knowledge.webp" alt="Seeds of Knowledge" title='Seeds of Knowledge'></img>
                <h1>Seeds of Knowledge :
                    <h2>(Support) Dispel 1 [Debuff] from all allies within 2 cells of the target, and make them gain [▲Speed ​​2], [meditation], lasts 2 rounds.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Good-news-from-a-far.webp" alt="Good news from a far" title='Good news from a far'></img>
                <h1>Good news from a far :
                    <h2>(Support) Restore 4 energy points to the target ally and gain [▲Attack 2], [▲Move 2] and [▲Speed ​​2], lasts 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Heal.webp" alt="Heal" title='Heal'></img>
                <h1>Heal :
                    <h2>(Passive) At the end of each action, heal the ally with the lowest health within 3 blocks of yourself. The healing amount is 20% of the magic attack value.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Light-of-the-Soul.webp" alt="Light of the Soul" title='Light of the Soul'></img>
                <h1>Light of the Soul :
                    <h2>(Support) [Instant], restore 1 point of energy to all allies within 3 cells of the target range.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Pacifism.webp" alt="Pacifism" title='Pacifism'></img>
                <h1>Pacifism :
                    <h2>(Reaction) Before being attacked, dispel 2 [Buffs] on the opponent and reduce the damage caused by it by 20%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\The-Heart-of-Forbearance.webp" alt="The Heart of Forbearance" title='The Heart of Forbearance'></img>
                <h1>The Heart of Forbearance :
                    <h2>(Reaction) [Continuous Damage] taken is reduced by 50%. At the end of the action, if you are affected by a control effect, all control effects will be removed and [Immune Immobilization] will be obtained, which lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Bonfire-Night-Talk.webp" alt="Bonfire Night Talk" title='Bonfire Night Talk'></img>
                <h1>Bonfire Night Talk :
                    <h2>(Treatment) applies to all characters within 2 cells of the self. [sleep], [tippy], lasts for 1 round. Recover 60% of your health and dispel 3 [Debuffs].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Ascetic.webp" alt="Ascetic" title='Ascetic'></img>
                <h1>Ascetic :
                    <h2>(Passive) After receiving damage, gain 1 layer[penance], the damage received is reduced by 8% for each layer, and cannot be dispelled. have [penance], an additional 1 point of energy will be restored at the end of the round.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Kind-Heart-Strike.webp" alt="Kind Heart Strike" title='Kind Heart Strike'></img>
                <h1>Kind Heart Strike :
                    <h2>(Basic attack) Causes 80% magic damage, and the next healing effect is increased by 15%, lasting 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Magic-Dispel.webp" alt="Magic Dispel" title='Magic Dispel'></img>
                <h1>Magic Dispel :
                    <h2>(General attack) Causes 80% magic damage and dispels 2 [Buffs] on the target.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Lay-on-Hands.webp" alt="Lay on Hands" title='Lay on Hands'></img>
                <h1>Lay on Hands :
                    <h2>(Treatment) Single target treatment, the healing amount is 60% of the magic attack value, additionally heals all allies within 3 blocks of the target, the healing amount is 30% of the magic attack value..</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Taair\Dreaming-in-a-Cage.webp" alt="Dreaming in a Cage" title='Dreaming in a Cage'></img>
                <h1>Dreaming in a Cage :
                    <h2>(Support) Obtained by oneself [Dreams in a Cage], lasts 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Taair;
