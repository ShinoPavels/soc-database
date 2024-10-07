import React from 'react';

const Lash = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Lash</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Gold-Out\Lash\Lash-Profile.webp" alt="Lash" title='Lash' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 6</td>
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
                <td className="border border-gray-500 px-4 py-2">3324</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1015</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">482</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1448</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">648</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">127</td>
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
                <td className="border border-gray-500 px-4 py-2">Lash</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Judge of Papal</td>
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
                <td className="border border-gray-500 px-4 py-2">Destroyer</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Papal States, Aggression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Lash Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Lash Skills</h2>
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
                <img src="\assets\Hero-Art-Gold-Out\Lash\Lash-Trait.webp" alt="Lash" title='Lash'></img>
                <h1>Lash :
                    <h2>After attacking, additionally deals 30% of M.ATK as [Piercing DMG] to the target. After using [Support] or [Healing] skills, additionally heals the target once for 20% of M.ATK.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Whip-of-Blame.webp" alt="Whip of Blame" title='Whip of Blame'></img>
                <h1>Whip of Blame :
                    <h2>(Magic DMG) Deals 60% DMG to all enemies in a straight line of 5 tiles in the target direction. Continues attacking, deals [Piercing DMG] equal to 30% of the character’s M.ATK.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Energy-Ray.webp" alt="Energy Ray" title='Energy Ray'></img>
                <h1>Energy Ray :
                    <h2>(Magic DMG) Single-target attack. Deals 140% DMG. Before attacking, the character gains [Shield Break 1].</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Soul-Soothing.webp" alt="Soul Soothing" title='Soul Soothing'></img>
                <h1>Soul Soothing :
                    <h2>(Healing) Heals the target by 75% of M.ATK.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Dark-Withering.webp" alt="Dark Withering" title='Dark Withering'></img>
                <h1>Dark Withering :
                    <h2>(Magic DMG) Inflicts [Life Loss] equal to 50% of M.ATK to all enemies within a 2-tile radius of the target and inflicts [▼Healing Received], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\MDEF-Boost.webp" alt="M.DEF Boost" title='M.DEF Boost'></img>
                <h1>M.DEF Boost :
                    <h2>(Support) Grants [▲M.DEF 2] and [Immunity to Disrupt] to all allies within the target location, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            
                <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Protection-of-Darkness.webp" alt="Protection of Darkness" title='Protection of Darkness'></img>
                <h1>Protection of Darkness :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. Before being hit by an active attack, for every [Debuff] on the attacker, decreases DMG taken by an additional 10%, up to 30%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Highland-Defense.webp" alt="Highland Defense" title='Highland Defense'></img>
                <h1>Highland Defense :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. When attacked by an enemy from [Highland], DMG taken is additionally decreased by 20%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Dark-Ripple.webp" alt="Dark Ripple" title='Dark Ripple'></img>
                <h1>Dark Ripple :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [🛇Passive Skills] and [🛇Reaction Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Light-of-Sanctuary.webp" alt="Light of Sanctuary" title='Light of Sanctuary'></img>
                <h1>Light of Sanctuary :
                    <h2>(Support) [Instant] Single-target Healing. Restores 25% of the target’s HP. If the target is [Unharmed], the effect changes, which grants [▲DMG 2] and [▲M.DEF 2] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Discipline.webp" alt="Discipline" title='Discipline'></img>
                <h1>Discipline :
                    <h2>(Piercing DMG) Single-target attack. Deals [Piercing DMG] equal to 60% of the character’s M.ATK.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Gold-Out\Lash\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and dispel 2 [buffs] on the target.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lash;
