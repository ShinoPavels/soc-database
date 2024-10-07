import React from 'react';

const Caris = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Caris</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Caris\Caris-Profile.webp" alt="Caris" title='Caris' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3304</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1102</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">441</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1575</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">681</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">126</td>
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
                <td className="border border-gray-500 px-4 py-2">Caris</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">卡丽丝</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Inoue Kikuko</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Glorious Will</td>
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
        One of the cardinals of the Papal States, in charge of affairs in the Iria region. She has a gentle nature, devout faith, and exudes the holy charm of a mature woman and a high-ranking clergyman.
<br></br><br></br>
Before becoming a cardinal, Caris was the person in charge of a large asylum. She was also a mentor and mother to Samantha, and she also taught her as a candidate for the next generation of emperor, we will train with all our strength and meet strict requirements.
<br></br><br></br>
As a devout believer and a staunch supporter of the Emperor, Khalis has made it her mission to restore the glory of the Light of Sanctuary, and she will do whatever it takes to do so.
<br></br><br></br>
Perhaps her piety and determination have long become a shackles that restrain herself…
        </p>
      </div>

      {/* Caris Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Caris Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Caris\Oracle-Trait.webp" alt="Oracle" title='Oracle'></img>
                <h1>Oracle :
                    <h2>Magic attack increased by 15%. The scope of personality influence is 5 cells. When the battle starts, gain 8 stacks[Inspiration]. At the end of the action, gain 3 additional layers[Inspiration]. After allies within a certain range of themselves release [non-instant] skills, they will gain 1 layer[Inspiration], triggered up to 5 times per round. At the beginning of the operation, have 9 levels or above[Inspiration], then consume 9 layers and obtain[Guangyu]and 1 point of energy.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Corrosion-Mystic.webp" alt="Corrosion Mystic" title='Corrosion Mystic'></img>
                <h1>Corrosion Mystic :
                    <h2>(Magic damage) Single target attack, causing 100% damage. Before attacking, apply 3 random points to the target.[Level 2 attribute debuff], lasts 2 rounds.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Light-of-Shelter.webp" alt="Light of Shelter" title='Light of Shelter'></img>
                <h1>Light of Shelter :
                    <h2>(Support) [Instant], single target treatment, restores 25% of the target’s health. target at[No injuries]When in the state, the effect changes to: obtain[▲Damage 2],[▲Magic Defense 2], lasts 2 rounds.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Life-Devouring.webp" alt="Life Devouring" title='Life Devouring'></img>
                <h1>Life Devouring :
                    <h2>(Magic damage) Single target attack, causing 150% damage. After attack, generate 45%[Life Drain].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Shine-and-Protect.webp" alt="Shine and Protect" title='Shine and Protect'></img>
                <h1>Shine and Protect :
                    <h2>(Support) Causes all allies within 2 cells of the target to gain 60% of Karis’ magic attack value.[Shining Shield], cannot be dispelled, lasts for 2 rounds; can be used when possessing this shield[Immune Establishment]. have[Guangyu]When, the skill changes to[Guangyu·Yao protects all living beings].</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Punishment-for-Crimes.webp" alt="Punishment for Crimes" title='Punishment for Crimes'></img>
                <h1>Punishment for Crimes :
                    <h2>(Penetrating damage) Deals damage equal to 50% of the magic attack value and 20% of the target’s health to all enemies within a 3*4 area in the target direction. have[Guangyu]When, the skill changes to[Guangyu Punishment for all crimes].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Dark-Shelter.webp" alt="Dark Shelter" title='Dark Shelter'></img>
                <h1>Dark Shelter :
                    <h2>(Reaction) When being actively attacked, the damage received is reduced by 8%. Before being actively attacked, for each [Debuff] on the opponent, the damage is reduced by an additional 10%, up to a maximum of 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Energy-Recovery.webp" alt="Energy Recovery" title='Energy Recovery'></img>
                <h1>Energy Recovery :
                    <h2>(Reaction) When actively attacked, the damage taken is reduced by 8%. After being actively attacked, an additional 1 point of energy is restored.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Glorious-Guidance.webp" alt="Glorious Guidance" title='Glorious Guidance'></img>
                <h1>Glorious Guidance :
                    <h2>(Leadership Aura) All allies on the field will have their attack increased by 10% and their defense increased by 20%. When the target has 4 or more [Buffs], it will cause[Penetrating damage]Increased by 12%, increased damage caused by 12%, and reduced damage received by 12%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Purge-Evil.webp" alt="Purge Evil" title='Purge Evil'></img>
                <h1>Purge Evil :
                    <h2>(Magic Damage) Prepare for 1 turn, dealing 130% damage to all enemies within 2 cells of the target range[Fire attribute]harm, inflict[dizziness], lasts for 1 round. attack[Large character], the damage is increased by an additional 100%. After the skill is released,[Skip round]. have[Guangyu]When, the skill changes to[Guangyu·Putting away all evil].</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Charged-Strike.webp" alt="Charged Strike" title='Charged Strike'></img>
                <h1>Charged Strike :
                    <h2>(Basic attack) causes 80% magic damage, and the next skill damage is increased by 15%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Punish-Evil.webp" alt="Punish Evil" title='Punish Evil'></img>
                <h1>Punish Evil :
                    <h2>(General attack) Select an enemy within the cross range of yourself, causing 2 times of 30% of the magic attack value.[Penetrating damage]; Gain 2 layers after attacking[Inspiration]. have[Guangyu]When, the skill changes to[Light edict‧Punish evil].Asylum Seekers</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Asylum-Seekers.webp" alt="Asylum Seekers" title='Asylum Seekers'></img>
                <h1>Asylum Seekers :
                    <h2>(Passive) When you have no [Debuffs] and have 3 or more [Bonuses], your attack will be increased by 15% and your defense will be increased by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Caris\Crystal-Energy-Wave-Cannon.webp" alt="Crystal Energy Wave Cannon" title='Crystal Energy Wave Cannon'></img>
                <h1>Crystal Energy Wave Cannon :
                    <h2>(Magic Damage) Causes 60% [Area Damage] to all enemies within 3 blocks of the target, applying[▼Magic Defense 3], lasts 2 rounds.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Caris;
