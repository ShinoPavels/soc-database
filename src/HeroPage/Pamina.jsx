import React from 'react';

const Pamina = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Pamina</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Inc\Pamina\Pamina-Profile.webp" alt="Pamina" title='Pamina' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3616</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1321</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">660</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">926</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">373</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">198</td>
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
                <td className="border border-gray-500 px-4 py-2">Pamina</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Kaida Yuko</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Protective Gun</td>
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
        A strong, upright, and open-minded veteran general, she was the military commander of the Irias trading town of Langyong.
<br></br><br></br>
General Pamina was one of King Faris’ most trusted comrades-in-arms. She made outstanding achievements during the War of Independence and never retreated from the battlefield with her lance.
<br></br><br></br>
Pamina was strict in military discipline, but she was deeply loved by her subordinates. She was impartial and selfless, and never participated in party struggles. Whether it was on the battlefield or facing political conspiracies, Pamina would choose to face the enemy head-on, just like the lance in her hand, upright and unyielding.
<br></br><br></br>
Perhaps only when facing her adopted children did Pamina show her feminine and gentle side.
        </p>
      </div>

      {/* Pamina Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pamina Skills</h2>
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
                <img src="\public\assets\Hero-Art-Inc\Pamina\The-Flower-of-Fierceness-Trait.webp" alt="The Flower of Fierceness" title='The Flower of Fierceness'></img>
                <h1>The Flower of Fierceness :
                    <h2>Ignore Block, increase physical defense by 30%, 30% of physical defense value is added to physical attack value. After entering the battle, gain [Fierce Flower], which can be activated up to 4 times per round, and when triggered, it will dispel 1 [Debuff] and restore 1 energy point.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Swift-Combo.webp" alt="Swift Combo" title='Swift Combo'></img>
                <h1>Swift Combo :
                    <h2>(Physical Damage) Single attack, causing 20% ​damage, dispelling 2 [Buffs] from the target, and then [Chasing], causing 130% damage.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Breaking-Spear.webp" alt="Breaking Spear" title='Breaking Spear'></img>
                <h1>Breaking Spear :
                    <h2>(Choice) Choose to use [Breaking the Formation-Breaking the Power] or [Breaking the Formation and Being Invincible]</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Who-Can-Compete-With.webp" alt="Who Can Compete With" title='Who Can Compete With'></img>
                <h1>Who Can Compete With :
                    <h2>(Support) Apply to the target [being ridiculed], restore 30% of your own health, gain [Parry], [Immunity 2], which lasts for 2 rounds. Then, all friendly troops within 4 squares of the player gain [▲Defense 2], lasts for 2 rounds. If the target is immune [being ridiculed], then impose [Pamina’s Challenge], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Chop.webp" alt="Chop" title='Chop'></img>
                <h1>Chop :
                    <h2>(Passive) After an active attack, cause 20% physical damage to all enemies within the range.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\The-Sturdy-Stance.webp" alt="The Sturdy Stance" title='The Sturdy Stance'></img>
                <h1>The Sturdy Stance :
                    <h2>(Passive) Reduces damage received by 15%. When [Area Attack], 15% of the player’s physical defense and magic defense is added to the physical attack value.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Righteousness.webp" alt="Righteousness" title='Righteousness'></img>
                <h1>Righteousness :
                    <h2>(Reaction) Increases healing received by 15%. At the start of the action, dispel 3 [Debuffs] on yourself; if you have no [Debuffs], restore 20% of your health.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Front-Defense.webp" alt="Front Defense" title='Front Defense'></img>
                <h1>Front Defense :
                    <h2>(Reaction) When hit by an active attack from the [front], the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Shield-Break.webp" alt="Shield Break" title='Shield Break'></img>
                <h1>Shield Break :
                    <h2>(Physical Damage) Deals 60% range damage to the first enemy in each row in a 3*2 area in the target direction, applying [▼Physical Defense 2], lasts for 2 rounds, and knocks back 2 squares.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Breakthrough-Invincible.webp" alt="Breakthrough Invincible" title='Breakthrough Invincible'></img>
                <h1>Breakthrough Invincible :
                    <h2>((Physical Attack) Jumps to the target location and deals 70% [Area Damage] to all enemies within 2 squares of the target, applying [being ridiculed], [Vulnerable 2], lasts for 1 round; after attacking, you gain[Trap], lasts for 2 rounds. If the target is immune [being ridiculed], then impose [Pamina’s Challenge], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Breaking-Lightning.webp" alt="Breaking Lightning" title='Breaking Lightning'></img>
                <h1>Breaking Lightning :
                    <h2>(Normal attack) Causes 100% physical damage to the target.[×Dodge], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Powerful-Attack.webp" alt="Powerful Attack" title='Powerful Attack'></img>
                <h1>Powerful Attack :
                    <h2>(Normal attack) Causes 110% physical damage.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\Counterattack-Storm.webp" alt="Counterattack-Storm" title='Counterattack-Storm'></img>
                <h1>Counterattack-Storm :
                    <h2>(Support) Self-acquired [Reply], [Counterattack], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Inc\Pamina\FireWire.webp" alt="FireWire" title='FireWire'></img>
                <h1>FireWire :
                    <h2>(Passive) Speed ​​increased by 50 points. [Health] When in the state, the damage received is reduced by 20%.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pamina;
