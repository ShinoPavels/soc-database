import React from 'react';

const Acambe = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Acambe</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Acambe\Acambe-Profile.webp" alt="Acambe" title='Acambe' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3460</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1040</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">528</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1487</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">640</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">123</td>
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
                <td className="border border-gray-500 px-4 py-2">Acambe</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">阿坎贝</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Kuno Misaki</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">The Merchant</td>
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
                <td className="border border-gray-500 px-4 py-2">Destroyer</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Drifter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        Acambe, the national merchant of Ellaman, grew up in the most typical Ellaman merchant family. His emotional encounter with a Wilde slave girl in his youth made him think more deeply about the slave system.<br></br>
<br></br>
In business, Acambe is very good at discovering potential business opportunities. His investment style is decisive and bold, and taking risks is commonplace. Because, in addition to the pursuit of wealth, what forces him to move forward is not only an extraordinary ambition, but also a mysterious and very tricky contract.<br></br>
<br></br>
The business in Iria is the key step for him to get rid of the contract and promote the grand plan, and the Suzuran Sword is the chess piece to take that key step – unfortunately, this group is notoriously unwilling to accept the arrangement.
        </p>
      </div>

      {/* Acambe Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Acambe Build</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Acambe-Build.webp' alt='Acambe Build'></img>
        </p>
      </div>

      {/* Acambe Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Acambe Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Acambe\Country-Businessman-Trait.webp" alt="National Merchant" title='National Merchant'></img>
                <h1>National Merchant :
                    <h2>Acambe’ s ATK increases by 15%. His max NRG is increased to 9. For every 3 NRG owned, he additionally gains 1 NRG at the end of the turn. When [Shadow Assassin] is present in battle, he gains [Secret Signal]. CD: 3 turns. Acambe’s DMG dealt by [Secret Signal] is additionally increased by 15%. He also gains an additional 3 initial NRG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Shadow-Assassin.webp" alt="Shadow Assassin" title='Shadow Assassin'></img>
                <h1>Shadow Assassin :
                    <h2>(Support) [Instant] Acambe summons 1 [Shadow Assassin] at the target location that cannot be controlled. It inherits 85% of Acambe’s ATK, and 20% of his DEF and HP. Each time a Shadow Assassin is defeated, the CD of this skill is increased by 1 turn. The skill can be cast up to 2 times per round</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Potential-Stimulation.webp" alt="Potential Burst" title='Potential Burst'></img>
                <h1>Potential Burst :
                    <h2>(Support) Grants the target [▲ATK 2], [▲P.DEF 2], and [▲M.DEF 2]. Dispels all [Attribute Debuffs] from the target, granting immunity to these debuffs. All effects last for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Focused-Ray.webp" alt="Focused ray" title='Focused ray'></img>
                <h1>Focused ray :
                    <h2>(Magical DMG) Single-target attack Deals 140% DMG. Before attacking, the character gains [Shield Break I].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Spend-a-Fortune.webp" alt="Spend a Fortune" title='Spend a Fortune'></img>
                <h1>Spend a Fortune :
                    <h2>(Decision) Acambe can select to use [Greed Leads to Ruin] or [Rich Rewards].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Hypnosis.webp" alt="Hypnosis" title='Hypnosis'></img>
                <h1>Hypnosis :
                    <h2>(Magical DMG) Single-target attack Deals 35% DMG and inflicts [Sleep] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Special-Terms.webp" alt="Special Terms" title='Special Terms'></img>
                <h1>Special Terms :
                    <h2>(Reaction) When Acambe is under attack, if there is an allied [Summoned Unit] within 3 tiles, Acambe can have the [Summoned Unit] take the attack instead, up to 2 times per round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Anger.webp" alt="Anger" title='Anger'></img>
                <h1>Anger :
                    <h2>(Reaction) When hit by an active attack, the DMG taken is decreased by 8%. After being attacked, the character gains [▲DMG 2] for 3 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Rewards-and-Punishments.webp" alt="Rewards and Punishments" title='Rewards and Punishments'></img>
                <h1>Rewards and Punishments :
                    <h2>(Leader’s Aura) For all [Discipline] allies in battle, Acambe increases their ATK by 10%, and DEF by 20%. For the skills with a CD of at least 4 turns, the CD is reduced by 1 turn. Additionally he increases DMG dealt by allied summoned units by 20%.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Money-Gone.webp" alt="Money Gone" title='Money Gone'></img>
                <h1>Money Gone :
                    <h2>(Magical DMG) Acambe deals 90% DMG to the first enemy in each row within a 5×3 area in the target direction, knocks them back by 2 tiles, and summons a [Shadow Assassin] per tile within a 3×1 area at the front. After attacking, Acambe gains [🛇NRG Restored] for 2 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Disarm.webp" alt="Disarm" title='Disarm'></img>
                <h1>Disarm :
                    <h2>(Basic Attack) Deals 80% Magical DMG and inflicts [▼ATK 1] on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Charged-Strike.webp" alt="Charged Strike" title='Charged Strike'></img>
                <h1>Charged Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the DMG of the next skill by 15%.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Dark-Ripple.webp" alt="Dark Ripple" title='Dark Ripple'></img>
                <h1>Dark Ripple :
                    <h2>(Magical DMG) Deals 70% [AoE DMG] to all enemies within a 2-tile radius of the target and inflicts [🛇Passive Skills] and [🛇Reaction Skills], lasting for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Acambe\Extreme-Darkness.webp" alt="Extreme Darkness" title='Extreme Darkness'></img>
                <h1>Extreme Darkness :
                    <h2>(Magical DMG) Single-target attack Deals 180% DMG. Before attacking, the character gains [Armor Piercing] for 1 turn.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Acambe;
