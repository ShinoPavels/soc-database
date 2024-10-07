import React from 'react';

const Alexei = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Character Name</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Alexei\Alexei-Profile.webp" alt="Alexei" title='Alexei' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">tier 0.5</td>
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
                <td className="border border-gray-500 px-4 py-2">3505</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1434</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">573</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1002</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">407</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">228</td>
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
                <td className="border border-gray-500 px-4 py-2">Alexei</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">阿列克谢</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Yoshimasa Hosoya</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Ice Wild Bear</td>
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
                <td className="border border-gray-500 px-4 py-2">Defender</td>
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
        Acting leader of the Silver Wolf Mercenaries, disciple of Agata, and a Bear Warrior with both passion and talent.
<br></br><br></br>
Alexei is a Lucia warrior who has been tempered in harsh climates and rigorous training. He is courageous, loyal, admires the strong, and hopes to learn from the strong. After taking over the Silver Wolf Mercenaries, he lived up to the trust, demonstrated excellent leadership skills, and gained valuable growth experience. He can use the powerful Bear form in battle, but he can’t maintain it for as long as Agata, so Alexei feels inferior to this.
<br></br><br></br>
Under the handsome and heroic and oppressive appearance, he is a shy big boy.
        </p>
      </div>

      {/* Alexei Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alexei Build</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Alexei-Build.webp' alt='Alexei Build'></img>
        </p>
      </div>

      {/* Alexei Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alexei Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Alexei\Brutebear-Blood.webp" alt="Brutebear Blood" title='Brutebear Blood'></img>
                <h1>Brutebear Blood :
                    <h2>Alexei becomes immune to [🛇Resolve]. His ATK is increased by 20% and the ignores the effects of [Frosty] tiles.
                    Alexei possesses [Unlimited Resolve] until the start of the next 2 turns, dispelling 2 [debuffs] and gains [Toughness]. His [Trait] attribute bonuses double. This effect has a CD of 7 turns and cannot be dispelled or immunized.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Alexei\Whirlwind-Axe.webp" alt="Whirlwind Axe" title='Whirlwind Axe'></img>
                <h1>Whirlwind Axe :
                    <h2>(Physical DMG) Alexei deals 90% DMG to all enemies within 2 tiles around himself. Every enemy defeated by this skill reduces the CD of the [Trait] effect by 1 turn.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Fight-to-the-Death.webp" alt="Fight to the Death" title='Fight to the Death'></img>
                <h1>Fight to the Death :
                    <h2>(Passive) When [Dying], increases ATK and DEF by 20%.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Leg-Slam.webp" alt="Leg Slam" title='Leg Slam'></img>
                <h1>Leg Slam :
                    <h2>(Physical DMG) Deals 120% DMG, knocks the target back by 2 tiles, and inflicts [▼Move 1] for 1 turn.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Wild-Howl.webp" alt="Wild Howl" title='Wild Howl'></img>
                <h1>Wild Howl :
                    <h2>(Piercing DMG) Alexei deals DMG equal to 40% of his M.ATK and inflicts [▼Move 2] and [▼ATK 3] to all enemies within a 3-tile radius of him, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Burning-Bridges.webp" alt="Burning Bridges" title='Burning Bridges'></img>
                <h1>Burning Bridges :
                    <h2>(Physical DMG) Single-target attack Deals 150% DMG. Before attacking, gains [Offensive Stance] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Curse.webp" alt="Curse" title='Curse'></img>
                <h1>Curse :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Upon receiving an active attack, inflicts [Vulnerable 2] on the attacker for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Brutebear-Counter.webp" alt="Brutebear Counter" title='Brutebear Counter'></img>
                <h1>Brutebear Counter :
                    <h2>(Reaction) Performs a [Strike Back] when hit by an active attack from the [front or side], dealing 70% physical DMG to the attacker. The effect can be activated up to 2 times per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Goredrinker.webp" alt="Goredrinker" title='Goredrinker'></img>
                <h1>Goredrinker :
                    <h2>(Passive) After being attacked, gains [Goredrinker] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Anger-of-Icefield.webp" alt="Anger of Icefield" title='Anger of Icefield'></img>
                <h1>Anger of Icefield :
                    <h2>(Physical DMG) Alexei selects 1 enemy within a cross-shaped range to charge at, deals 50% DMG, and inflicts [Stunned] for 1 turn. Additionally, he deals 50% [Ice] [Area DMG] to all enemies within 2 tiles around the target. After attacking, he gains [Warrior of Frost] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Ice-Attack.webp" alt="Ice Attack" title='Ice Attack'></img>
                <h1>Ice Attack :
                    <h2>(Basic Attack) Deals 100% physical DMG and inflicts [▼Move 1] on [Healthy] targets, lasting for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Frenzied-Slash.webp" alt="Frenzied Slash" title='Frenzied Slash'></img>
                <h1>Frenzied Slash :
                    <h2>(Basic Attack) Deals 110% DMG. If the target is defeated, the character recovers 1 NRG.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Guard.webp" alt="Guard" title='Guard'></img>
                <h1>Guard :
                    <h2>(Passive) Takes [Physical Attacks] for all other allies within a 2-tile radius of the character. When triggered, DEF is increased by 20%. Can be activated up to 1 time per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Alexei\Counterattack-Storm.webp" alt="Counterattack Storm" title='Counterattack Storm'></img>
                <h1>Counterattack Storm :
                    <h2>(Support) The character’s Strike Back Range is increased by 2 tiles. When performing a Strike Back, physical DMG is increased by 85%, and the character gains 1 Strike Back Count and [Counterattack]. This effect lasts for 2 turns.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alexei;
