import React from 'react';

const LilyWill = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">LilyWill</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\LilyWill\LilyWill-Profile.webp" alt="LilyWill" title='LilyWill' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2814</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1266</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">420</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">894</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">441</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">118</td>
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
                <td className="border border-gray-500 px-4 py-2">LilyWill</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">莉莉薇儿 (Lìlìwēier)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Komatsu Mikako</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">	Gale Archer</td>
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
                <td className="border border-gray-500 px-4 py-2">Watcher</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Vlder, Alacrity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A wandering Wilde girl, a crystal-transformed body of Tranquillo.
<br></br><br></br>
The inhumane experiments left terrible marks on her body. After escaping the control of the Dark Light, Momo, frail and ragged, wandered around everywhere. She seemed to not care about what happened to her or the situation she was in. She was always in a trance and slow to react. I don’t know if it was the sequelae of the experiment or some other reason, but Momo always gave people a strange sense of detachment. In fact, she was quite satisfied with the current situation. She could walk around and have a friend – the dark power in her heart. The current leader of the Vlder tribe, NonoWill’s sister, a resolute and powerful warrior, but also a gentle and reliable sister.
<br></br><br></br>
As a warrior, LilyWill guards Mount Vilt with a bow and arrow, and is a reliable protector in the minds of the Wilde people. As the leader, she shoulders the survival of the tribe, and knows that if the Vlder people want to survive, they need to break the status quo and find a way to change.
<br></br><br></br>
LilyWill encourages her sister NonoWill to leave the tribe to find an opportunity for change, and vows to protect the tribe with her bow and arrow and her own life before that.
        </p>
      </div>

      {/* LilyWill Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">LilyWill Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\LilyWill-Skill.png' alt='LilyWill Skill'></img>
        </p>
      </div>

      {/* LilyWill Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">LilyWill Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\LilyWill-Build.webp' alt='LilyWill Skill'></img>
        </p>
      </div>

      {/* LilyWill Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">LilyWill Skills</h2>
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
                <img src="\assets\Hero-Art-Out\LilyWill\Vitar-Guardian-Trait.webp" alt="Vltar Guardian" title='Vltar Guardian'></img>
                <h1>Vltar Guardian :
                    <h2>LilyWill possesses [Jump] and she gains 15% bonus ATK. Ignores [Assisting Cover], also gains 30% bonus Crit, and all skill CD reduces by 1 turn when attacking from a [Highland] position.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Cloud-Piercing-Arrow.webp" alt="Cloud-Piercing Arrow" title='Cloud-Piercing Arrow'></img>
                <h1>Cloud-Piercing Arrow :
                    <h2>(Physical Damage) Single-target attack. Deals 140% DMG with [Curved Shot].</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Guerrilla.webp" alt="Guerrilla" title='Guerrilla'></img>
                <h1>Guerrilla :
                    <h2>(Passive) ATK increases by 5%. After attacking, move again by 2 tiles. CD: 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Aim.webp" alt="Aim" title='Aim'></img>
                <h1>Aim :
                    <h2>(Support) [Instant] Gains [▲Crit 2] and [Ignore Dodge] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Arrow-of-Aeolus.webp" alt="Arrow of Aeolus" title='Arrow of Aeolus'></img>
                <h1>Arrow of Aeolus :
                    <h2>(Physical DMG) Single-target attack. LilyWill deals 60% DMG with [Curved Shot]. She deals Magical DMG equal to 40% of her P.ATK to all enemies Within 1 tile around the target, inflicting 3 stacks of [Infection] if DMG is dealt.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Windwalking.webp" alt="Windwalking" title='Windwalking'></img>
                <h1>Windwalking :
                    <h2>(Passive) Increases Crit DMG by 10%. The maximum range of [ranged skills] increases by 1 tile.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Gale-Footwork.webp" alt="Gale Footwork" title='Gale Footwork'></img>
                <h1>Gale Footwork :
                    <h2>(Reaction) When attacked by a melee attack from [front or side], the character can interrupt the enemy’s action, dealing 50% physical DMG and teleporting to the back of the closest ally within 3 tiles. Effect CD: 1. turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Survival-Master.webp" alt="Survival Master" title='Survival Master'></img>
                <h1>Survival Master :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%, and [Environmental DMG] taken is decreased by 70%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Shooting-Stars.webp" alt="Shooting Stars" title='Shooting Stars'></img>
                <h1>Shooting Stars :
                    <h2>(Physical DMG) Deals 75% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [▼P.DEF 2] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Resonance-of-Blood.webp" alt="Resonance of Blood" title='Resonance of Blood'></img>
                <h1>Resonance of Blood :
                    <h2>(Leader’s Aura) For all [Vlder] allies in battle, increases ATK by 10%, DEF by 20%, and Movement by 1 tile.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Infectious-Attack.webp" alt="Infectious Attack" title='Infectious Attack'></img>
                <h1>Infectious Attack :
                    <h2>(Basic Attack) Fires a [Curved Shot] which deals 85% Physical DMG and inflicts 1 stack of [Infection] on the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Gale-Shooting.webp" alt="Gale Shooting" title='Gale Shooting'></img>
                <h1>Gale Shooting :
                    <h2>(Basic Attack) Single-target attack. LilyWill deals 120% Physical DMG.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Arrow-of-Aeolus-Gale-Break.webp" alt="Arrow of Aeolus – Gale Break" title='Arrow of Aeolus – Gale Break'></img>
                <h1>Arrow of Aeolus – Gale Break :
                    <h2>(Physical Damage) Single-target attack. LilyWill deals 150% DMG, inflicts 2 stacks of [Infection], which immediately triggers the [infection] effect. Before attacking, she gains [Highland] advantage.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\LilyWill\Marksman.webp" alt="Marksman" title='Marksman'></img>
                <h1>Marksman :
                    <h2>(Passive) All skills ignore [Obstinate]. Increases ATK by 12% and inflicts [🛇Assist] on the target after the attack.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LilyWill;
