import React from 'react';

const Samantha = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Samantha</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Out\Samantha\Samantha-Profile.webp" alt="Samantha" title='Samantha' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 2</td>
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
                <td className="border border-gray-500 px-4 py-2">2924</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">886</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">395</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1233</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">640</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">78</td>
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
                <td className="border border-gray-500 px-4 py-2">Samantha</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">萨曼莎 (Sàmànshā)</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Rie Tanaka</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Saintess</td>
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
                <td className="border border-gray-500 px-4 py-2">Papal States, Aggression</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A kind woman and devout maidservant of Radiant. Samantha worked tirelessly in the Town of Convallaria during the war, helping to heal the sick and wounded. This led to her becoming a beloved figure to the local children.
<br></br><br></br>
Adopted by the Sanctuary as an orphan, her outstanding talent quickly set her apart from her peers and caught the eye of the Hierophant himself, who adopted her and ensured she received the best education.
<br></br><br></br>
As an adult, Samantha has proven him right to have done so, becoming a Judge who carries out his missions. However, Samantha’s time in Iria has led to a conflict between her heart and her faith.
        </p>
      </div>

      {/* Samantha Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Samantha Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Samantha-Skill.png' alt='Samantha Skill'></img>
        </p>
      </div>

      {/* Samantha Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Samantha Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Samantha-Build.webp' alt='Samantha Skill'></img>
        </p>
      </div>

      {/* Samantha Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Samantha Skills</h2>
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
                <img src="\assets\Hero-Art-Out\Samantha\Pious-Prayer-Trait.webp" alt="Pious Prayer" title='Pious Prayer'></img>
                <h1>Pious Prayer :
                    <h2>The healing received by all other allies within 3 tiles around Samantha increases by 30%. If an ally is [Injured] after being attacked, she consumes 1 NRG to heal them for 50% of her M.ATK.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Soul-Soothing.webp" alt="Soul Soothing" title='Soul Soothing'></img>
                <h1>Soul Soothing :
                    <h2>(Healing) Heals the target by 75% of M.ATK.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\NRG-Restoration.webp" alt="NRG Restoration" title='NRG Restoration'></img>
                <h1>NRG Restoration :
                    <h2>(Passive) At the end of the turn, recovers an additional 1 NRG. If NRG is less than 1, recovers another 1 NRG.	</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Light-of-Judgment.webp" alt="Light of Judgment" title='Light of Judgment'></img>
                <h1>Light of Judgment :
                    <h2>(Magical DMG) Single-target attack. Deals 140% DMG. After attacking, heals the ally with the lowest HP percentage in battle for 50% of the character’s M.ATK.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Radiant-Stamp.webp" alt="Radiant Stamp" title='Radiant Stamp'></img>
                <h1>Radiant Stamp :
                    <h2>(Healing) Samantha heals all allies within 2 tiles around the target for 40% of her M.ATK. The central target receives an additional 40% of healing. After being healed, all targets gain [▲DMG 1] and [▲P.DEF 1] for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Divine-Wrath.webp" alt="Divine Wrath" title='Divine Wrath'></img>
                <h1>Divine Wrath :
                    <h2>(Magical DMG) Deals 70% DMG to all enemies in a straight line within 5 tiles in the target direction and inflicts [🛇Active Skills] for 2 turns. Recovers 2 NRG for every 1 enemy hit by the skill.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Devout-Faith.webp" alt="Devout Faith" title='Devout Faith'></img>
                <h1>Devout Faith :
                    <h2>(Reaction) Gains [Resolve] if the character has 3 NRG. When [resolve] is triggered, consumes 3 NRG to heal the character’s HP to 70%. Can be activated up to 2 times per battle.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Defense-AoE.webp" alt="Defense (AoE)" title='Defense (AoE)'></img>
                <h1>Defense (AoE) :
                    <h2>(Reaction) When hit by an active AOE Attack, the DMG taken is decreased by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Battle-Flag-of-Papal-States.webp" alt="Battle Flag of Papal States" title='Battle Flag of Papal States'></img>
                <h1>Battle Flag of Papal States :
                    <h2>(Leader’s Aura) For all [Papal States] allies in battle, increases ATK by 10% and DEF by 20%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Light-of-Celestial-Purge.webp" alt="Light of Celestial Purge" title='Light of Celestial Purge'></img>
                <h1>Light of Celestial Purge :
                    <h2>(Magical DMG) Samantha deals 30% DMG to all enemies within 5 tiles around herself. Additionally dispels 3 [Buffs] from enemies and 3 [Debuffs] from allies.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            
                <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Invigorating-Strike.webp" alt="Invigorating Strike" title='Invigorating Strike'></img>
                <h1>Invigorating Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and additionally recovers 1 NRG.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Merciful-Strike.webp" alt="Merciful Strike" title='Merciful Strike'></img>
                <h1>Merciful Strike :
                    <h2>(Basic Attack) Deals 80% Magical DMG and increases the effect of the next healing skill by 15%, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\Sacred-Sanctuary.webp" alt="Sacred Sanctuary" title='Sacred Sanctuary'></img>
                <h1>Sacred Sanctuary :
                    <h2>(Support) Samantha grants all allies within 5 tiles around herself [DMG Reduction 3] and [▲Healing Received 3] for 2 turns. She gains [Regenerate Extra], expanding the effect range of her trait to 5 tiles and cancelling the NRG consumption when triggering, lasting for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Out\Samantha\The-Protected.webp" alt="The Protected" title='The Protected'></img>
                <h1>The Protected :
                    <h2>(Passive) The character gains 15% bonus ATK and 30% bonus DEF while not affected by any [Debuff] and affected by at least 3 [Buffs].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Samantha;
