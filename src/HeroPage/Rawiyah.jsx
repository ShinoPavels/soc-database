import React from 'react';

const Rawiyah = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Rawiyah</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Rawiyah\Rawiyah-Profile.webp" alt="Rawiyah" title='Rawiyah' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 1.5</td>
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
                <td className="border border-gray-500 px-4 py-2">3594</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1496</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1048</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">352</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">204</td>
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
                <td className="border border-gray-500 px-4 py-2">Rawiyah</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">拉維耶</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Ami Koshimizu</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Claymore Warrior</td>
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
                <td className="border border-gray-500 px-4 py-2">Sword of Convallaria, Iria, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        The founder and leader of the Sword of Convallaria who acts as the protector of the eponymous town with her mercenary group.
<br></br><br></br>
Rawiyah is kind and straightforward, affecting those around her by her sense of justice and warm heart. When facing a crisis, she never backs down from her duty to protect those in need. As a resident, she is always concerned about the situation in Iria.
<br></br><br></br>
Her skills and insights, which far surpass those of ordinary mercenaries, seem to suggest that she has an unusual past.
        </p>
      </div>

      {/* Rawiyah Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rawiyah Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Rawiyah-Skill.webp' alt='Rawiyah Skill'></img>
        </p>
      </div>

      {/* Rawiyah Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rawiyah Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Rawiyah-Build.webp' alt='Rawiyah Skill'></img>
        </p>
      </div>

      {/* Rawiyah Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rawiyah Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Bottom-Up-Trait.webp" alt="Bottoms Up" title='Bottoms Up'></img>
                <h1>Bottoms Up :
                    <h2>Increases Rawiyah’s DMG by 25%. At the start of the turn or during a strike back, there is a 80% chance to recover 40% of her lost HP and gain [Tipsy]. This effect can be triggered up to 2 times per round.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Gale-Breach.webp" alt="Gale Breach" title='Gale Breach'></img>
                <h1>Gale Breach :
                    <h2>(Physical DMG) [Instant] Rawiyah charges at enemy at 1 enemy within a cross-shaped range around her, dealing 30% DMG. Afterward, the skill switches to [Tropical Cyclone] for 2 turns. When she has [Tipsy], she inflicts [🛇Reaction Skills] on the target after the attack. This effect lasts for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Co-Attack.webp" alt="Co-Attack" title='Co-Attack'></img>
                <h1>Co-Attack :
                    <h2>(Passive) For each ally within a 2-tile radius of the character, ATK increases by 5%, up to 15%.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Toughness.webp" alt="Toughness" title='Toughness'></img>
                <h1>Toughness :
                    <h2>(Passive) Gains immunity to the effect of [Injured] and [Dying].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Piercing-Bash.webp" alt="Piercing Bash" title='Piercing Bash'></img>
                <h1>Piercing Bash :
                    <h2>(Physical DMG) Single-target attack. Deals 130% DMG. Before attacking, the character gains [Armor Piercing].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Another-Pint!.webp" alt="Another Pint!" title='Another Pint!'></img>
                <h1>Another Pint! :
                    <h2>(Healing) [Instant]. Rawiyah recovers 60% of lost HP and gains [Tipsy] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Screw-off!.webp" alt="Screw off!" title='Screw off!'></img>
                <h1>Screw off! :
                    <h2>(Reaction) When Rawiyah is hit by an active attack, she performs a [Strike Back], dealing 70% physical DMG to the enemy. When she has [Tipsy], she knocks the enemy back by 2 tiles. This effect can be triggered up to 1 time per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Guardians-Heart.webp" alt="Guardian’s Heart" title='Guardian’s Heart'></img>
                <h1>Guardian’s Heart :
                    <h2>(Reaction) Takes [P.ATK] for all allies within 1 tile of the character and performs a [Strike Back] on the attacker, dealing 70% Physical DMG and knocking them back by 1 tile. This effect can be triggered up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Mania-Smash.webp" alt="Mania Smash" title='Mania Smash'></img>
                <h1>Mania Smash :
                    <h2>(Physical DMG) Single-target attack. Deals 120% DMG. After attacking, gains 40% [Life Steal].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Sword-of-Convallaria.webp" alt="Sword of Convallaria" title='Sword of Convallaria'></img>
                <h1>Sword of Convallaria :
                    <h2>(Leader’s Aura) For all [Sword of Convallaria] allies in battle, increases ATK by 10%, DEF by 20%, and DMG dealt by 8%, and decreases their DMG taken by 8%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Fatal-Attack.webp" alt="Fatal Attack" title='Fatal Attack'></img>
                <h1>Fatal Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and increases Crit DMG by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and dispels 2 [Buffs] on the target.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Gale-Spin-Attack.webp" alt="Gale Spin Attack" title='Gale Spin Attack'></img>
                <h1>Gale Spin Attack :
                    <h2>(Physical DMG) Deals 50% [AoE DMG] to all enemies within a 2-tile radius around the character. After dealing DMG, inflicts [▼P.DEF 2] on the target for 2 turns. Subsequent attacks deal an additional 50% [AoE DMG].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Rawiyah\Leagacy-of-Comrades.webp" alt="Legacy of Comrades" title='Legacy of Comrades'></img>
                <h1>Legacy of Comrades :
                    <h2>(Passive) When an ally in battle is defeated, recovers 30% HP for the character, and the character gains [▲ATK 2], [▲P.DEF 2], and [▲M.DEF 2] for 3 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rawiyah;
