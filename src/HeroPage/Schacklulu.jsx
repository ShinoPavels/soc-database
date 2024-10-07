import React from 'react';

const Schacklulu = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Schacklulu</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Schacklulu\Schacklulu-Profile.webp" alt="Schacklulu" title='Schacklulu' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3193</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1474</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">441</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1033</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">528</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">164</td>
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
                <td className="border border-gray-500 px-4 py-2">Schacklulu</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">夏可露露</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Sayaka Ohara</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Phantom on Stage</td>
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
                <td className="border border-gray-500 px-4 py-2">Seeker</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Vlder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        The chief dancer of the Vlder Dance Company and the nominal leader of the company.
<br></br><br></br>
Born in the Vlder tribe in Ellaman, she was once captured as a slave, but miraculously escaped. Later, Schacklulu joined the wandering Vlder Dance Company and danced passionately and gracefully on the stage.
<br></br><br></br>
Whether in performances or battles, her figure is the focus of everyone’s attention – the only difference is that the audience needs to pay different “remunerations” according to the occasion. What does dance mean to Schacklulu? Perhaps only by truly understanding her deeply buried past can we understand it.
        </p>
      </div>

      {/* Schacklulu Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Schacklulu Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Schacklulu\Killing-Under-the-Skirt-Trait.webp" alt="Killing Under the Skirt" title='Killing Under the Skirt'></img>
                <h1>Killing Under the Skirt :
                    <h2>Attack increased by 10%. [Sting] adds [Piercing Damage], which is 40% of the player’s Physical Attack. When triggered, it restores 1 energy point, and then [Charm], [Stunning Stance] skill cooldown reduced by 1 round, can be triggered once per round at most. When using [Long-range Skill], maximum range increased by 1 grid.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Continuous-Stab.webp" alt="Continuous Stab" title='Continuous Stab'></img>
                <h1>Continuous Stab :
                    <h2>(Physical Damage) Deals 45% damage 3 times. When attacking, increases critical hit chance by 20%.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Lock.webp" alt="Lock" title='Lock'></img>
                <h1>Lock :
                    <h2>(Passive) When the action starts, inflict [▼Physical Defense 2], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Hunting-Nature.webp" alt="Hunting Nature" title='Hunting Nature'></img>
                <h1>Hunting Nature :
                    <h2>(Passive) When in [Invulnerable] state, the movement speed increases by 1 square. When the movement and charge distance is greater than 3 squares, the attack speed increases by 15%, and the effect lasts until the action ends.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Charm.webp" alt="Charm" title='Charm'></img>
                <h1>Charm :
                    <h2>(Debuff) [Instant], upon hitting, increases the target’s [Continuous Damage] by 30%, lasting for 2 rounds;[Health] Status enemies apply additional [Charm], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Stunning-Beauty.webp" alt="Stunning Beauty" title='Stunning Beauty'></img>
                <h1>Stunning Beauty :
                    <h2>(Physical Damage) [Instant], choose a location within the cross range, charge to that location and attack random enemies within 2 grids twice, each time causing 10% [Range Damage]. If the [Personality] skill damage is triggered during this round of action, you can release [Amazing Stance] again without consumption after the attack.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Curse.webp" alt="Curse" title='Curse'></img>
                <h1>Curse :
                    <h2>(Reaction) When actively attacked, the damage received is reduced by 8%. After being actively attacked, the opponent is inflicted [Vulnerable 2], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Close-yet-Distant.webp" alt="Close yet Distant" title='Close yet Distant'></img>
                <h1>Close yet Distant :
                    <h2>(Reaction)[Health] Before the character in the state of melee attacks, he gains 2 [Dodge], lasts for 1 round, and exchanges positions with the target, cools down for 3 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Linger.webp" alt="Linger" title='Linger'></img>
                <h1>Linger :
                    <h2>(Passive) use [Charm], [Shocking Stance] After hitting the target, restore 1 energy to the player. This triggers once per round. [Health] Status: [▼Attack 2],[Linger and forget about it], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\End-of-the-Song.webp" alt="End of the Song" title='End of the Song'></img>
                <h1>End of the Song :
                    <h2>(Physical Damage) Attacks random enemies within 3 grids of itself, causing 8 damages, each time causing 20% ​​[Range Damage] (Can trigger [Personality] effect repeatedly).</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Hypnotic-Strike.webp" alt="Hypnotic Strike" title='Hypnotic Strike'></img>
                <h1>Hypnotic Strike :
                    <h2>(Normal attack) Causes 50% physical damage twice, with a 30% chance to inflict [Sleep], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\The-Flying-Thorn.webp" alt="The Flying Thorn" title='The Flying Thorn'></img>
                <h1>The Flying Thorn :
                    <h2>(Normal attack) Causes 33% physical damage 3 times.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Poison-Blade-Throw.webp" alt="Poison Blade Throw" title='Poison Blade Throw'></img>
                <h1>Poison Blade Throw :
                    <h2>(Physical Damage) Single attack, causing 2 times of 35% damage, applying 2 layers each time [Infect].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Schacklulu\Evasion-Step.webp" alt="Evasion Step" title='Evasion Step'></img>
                <h1>Evasion Step :
                    <h2>(Support) Reduce [Area Damage] by 50%, gain 2 times [Dodge], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schacklulu;
