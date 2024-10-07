import React from 'react';

const Gloria = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Gloria</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Gloria\Gloria-Profile.webp" alt="Gloria" title='Gloria' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3395</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1341</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">474</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">942</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">385</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">215</td>
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
                <td className="border border-gray-500 px-4 py-2">Gloria</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">歌洛莉亞 (Gēluòlìyà)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Kawasumi Ayako</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Paladin</td>
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
                <td className="border border-gray-500 px-4 py-2">The Union, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        Wielder of the Lance of Longinus and one of the youngest knights to hold the title of Paladin.
<br></br><br></br>
Gloria possesses a noble character, befitting the scion of a family of knights, a heart filled with courage, and a dedication to justice. These qualities have made her a Union banner-bearer and the epitome of knighthood that young knights aspire to.
<br></br><br></br>
After the tragedy in Waverun City, she was sent by the Council to Iria. She has sworn to fulfil her mission and eradicate evil so that justice may prevail.
        </p>
      </div>

      {/* Gloria Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gloria Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Gloria-Skill.jpg' alt='Gloria Skill'></img>
        </p>
      </div>

      {/* Gloria Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gloria Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Gloria-Build.webp' alt='Gloria Skill'></img>
        </p>
      </div>

      {/* Gloria Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Gloria Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Gloria\Flag-of-Justice-Trait.webp" alt="Flag of Justice" title='Flag of Justice'></img>
                <h1>Flag of Justice :
                    <h2>Increases ATK by 20%. When the character loses [Flag Waving] aura, gains [Potential Burst] for 2 turns. Increases Movement by 2 tiles. Ignores 50% of the target’s DEF.
                    At the start of the battle, Gloria will auto-use [Longinus Flag Waving] which grants [Flag Waving] aura.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Longinus-Thrust.webp" alt="Longinus Thrust" title='Longinus Thrust'></img>
                <h1>Longinus Thrust :
                    <h2>(Physical DMG) Selects 1 enemy within a cross-shaped range of the character, charging at them, dealing 120% DMG and knocking the enemy back by 2 tiles. If there is no [Flag Waving] aura on the character, the skill switches to [Sword – Gale].</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Knightly-Spirit.webp" alt="Knightly Spirit" title='Knightly Spirit'></img>
                <h1>Knightly Spirit :
                    <h2>(Passive) Increases ATK by 20% when attacking enemies from the [front]. Increases DEF by 40% when being attacked from the [front].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Solemnity.webp" alt="Solemnity" title='Solemnity'></img>
                <h1>Solemnity :
                    <h2>(Aura) Decreases ATK of all enemies within the character’s 2-tile radius by 10%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Longinus-Brillance.webp" alt="Longinus Brilliance" title='Longinus Brilliance'></img>
                <h1>Longinus Brilliance :
                    <h2>(Support) Gloria grants all allies within 3 tiles of the her [▲ATK 1] and [DMG Reduction 2] for 2 turns, and restores 1 NRG. If there is no [Flag Waving] aura on the character, the skill switches to [Sword Full Moon].	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Lance-of-Longinus.webp" alt="Lance of Longinus" title='Lance of Longinus'></img>
                <h1>Lance of Longinus :
                    <h2>(Physical DMG) Deals 80% [AoE DMG] to all enemies within 2 tiles around the target [empty tile]. Summons a [Flag] at the cost of [Flag Waving] aura. If there is no [Flag Waving] aura on the character, the skill switches to [Longinus Flag Waving].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Front-Defense.webp" alt="Front Defense" title='Front Defense'></img>
                <h1>Front Defense :
                    <h2>(Reaction) When hit by an active attack from the [front], the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Couterattack-Mode.webp" alt="Counterattack Mode" title='Counterattack Mode'></img>
                <h1>Counterattack Mode :
                    <h2>(Support) Adds 20% of P.ATK to P.DEF and M.DEF, increases Strike Back DMG by 50%, gains [Preempt], and increases Strike Back Range by 2 tiles, lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Vow-of-Justice.webp" alt="Vow of Justice" title='Vow of Justice'></img>
                <h1>Vow of Justice :
                    <h2>(Leader’s Aura) For all [The Union] allies in battle, ATK is increased by 10%, DEF is increased by 20%. When performing an active attack, DMG is increased by 12%. When being Struck Back, DMG taken is decreased by 24%.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Lance-of-Justice.webp" alt="Lance of Justice" title='Lance of Justice'></img>
                <h1>Lance of Justice :
                    <h2>(Basic Attack) Gloria deals 70% Physical DMG to all enemies within 1 tile of the target. If there is no [Flag Waving] aura on the Gloria, the skill switches to [Sword of Justice].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Silencing-Attack.webp" alt="Silencing Attack" title='Silencing Attack'></img>
                <h1>Silencing Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [🛇Active Skills] on [Injured] targets before attacking, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Fair-Duel.webp" alt="Fair Duel" title='Fair Duel'></img>
                <h1>Fair Duel :
                    <h2>(Physical DMG) Single-target attack. Deals 180% DMG. Before attacking, dispels all [Debuffs] on the character and all [Buffs] on the target.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Gloria\Knights-Glory.webp" alt="Knight’s Glory" title='Knight’s Glory'></img>
                <h1>Knight’s Glory :
                    <h2>(Support) [Instant] Grants the target [▲ATK 2] for 2 turns. When the targets are from [The Union], the character gains an additional [Physical Shield] equal to 20% of HP.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Gloria;
