import React from 'react';

const Edda = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Edda</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Edda\Edda-Profile.webp" alt="Edda" title='Edda' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">2661</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1330</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">420</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">936</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">93</td>
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
                <td className="border border-gray-500 px-4 py-2">Edda</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">艾达</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Ichinose Kana</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Rebel Maiden</td>
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
                <td className="border border-gray-500 px-4 py-2">Iria, Drifter, Discipline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A leader of the resistance army who is reliable, tough, and kind to every one of her companions.
<br></br><br></br>
Edda was born in a family of craftsmen in Waverun City. Under the image of a gentle and elegant girl next door, she has a strong and unyielding heart that is not afraid of power. In the tragedy of Waverun City, Edda and countless citizens fell into danger. At the critical moment, she showed a sense of responsibility, courage, and wisdom, which allowed her to successfully lead the refugee team to escape from Waverun City.
<br></br><br></br>
Edda believes that in this chaotic world, everyone must learn to take up arms to protect themselves, rather than just waiting for the arrival of the savior.
        </p>
      </div>

      {/* Edda Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Edda Guide</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Edda-Skill.webp' alt='Edda Skill'></img>
        </p>
      </div>

      {/* Edda Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Edda Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Edda-Build.webp' alt='Edda Build'></img>
        </p>
      </div>

      {/* Edda Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Edda Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Edda\Catching-Fire-Trait.webp" alt="Catching Fire" title='Catching Fire'></img>
                <h1>Catching Fire :
                    <h2>Increases Edda’s ATK by 12%. Performs an [Assisting Attack] againts enemies within 5 tiles around her, dealing 40% Physical DMG. This effect can only be triggered 2 times per round.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Shield-Break-Shot.webp" alt="Shield Break Shot" title='Shield Break Shot'></img>
                <h1>Shield Break Shot :
                    <h2>(Physical DMG) Deals 135% to an enemy within a cross-shaped range around the character. Gains [Shield Break 4] before attacking.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Fortification.webp" alt="Fortification" title='Fortification'></img>
                <h1>Fortification :
                    <h2>(Support) [Instant] Summons a [Box] at the target tile.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Shield-Break-Enhanced.webp" alt="Shield Break Enhanced" title='Shield Break Enhanced'></img>
                <h1>Shield Break Enhanced :
                    <h2>(Passive) Increases ATK by 30% and ignores 40% of the target’s DEF when attacking enemies with a [Shield].</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Guiding-Gleam.webp" alt="Guiding Gleam" title='Guiding Gleam'></img>
                <h1>Guiding Gleam :
                    <h2>(Support) Grants all allies within 3 tiles of Edda [▲DMG 3], [▲M.DEF 2], [▲Move 1], for 3 turns. She dispels [Disruption] from the targets.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Wine-Barrel-Casting.webp" alt="Wine Barrel Casting" title='Wine Barrel Casting'></img>
                <h1>Wine Barrel Casting :
                    <h2>(Physical DMG) [Instant] Edda deals 20% DMG to all enemies within 1 tile of the target and changes the tiles into [Liquor].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Shelter-Advantage.webp" alt="Shelter Advantage" title='Shelter Advantage'></img>
                <h1>Shelter Advantage :
                    <h2>(Reaction) Decreases the DMG taken by 40% if there is any [Item] within 1 tile around the character.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Counterattack.webp" alt="Counterattack" title='Counterattack'></img>
                <h1>Counterattack :
                    <h2>(Reaction) When hit by an Active attack from the [front or side], performs a basic attack to [Strike Back] if the attacker is within range, dealing 70% of basic attack’s DMG. The effect can be activated up to 1 time per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Rupture-Armor.webp" alt="Rupture Armor" title='Rupture Armor'></img>
                <h1>Rupture Armor :
                    <h2>(Passive) Before a single-target attack, gains a 50% chance to inflict [▼P.DEF 2], on the target for 2 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Barricade-Fight.webp" alt="Barricade Fight" title='Barricade Fight'></img>
                <h1>Barricade Fight :
                    <h2>(Passive) If there is any [Item] within 1 tile of the character, increases ATK by 15% and allows the character to move again by 2 tiles after initiating an Active Attack.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Shield-Break-Attack.webp" alt="Shield-Break Attack" title='Shield-Break Attack'></img>
                <h1>Shield-Break Attack :
                    <h2>(Basic Attack) Deals 100% Physical DMG and gains [Shield Break 1] before attacking.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Dispelling-Strike.webp" alt="Dispelling Strike" title='Dispelling Strike'></img>
                <h1>Dispelling Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and dispels 2 [Buffs] on the target.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Take-Arms!.webp" alt="Take Arms!" title='Take Arms!'></img>
                <h1>Take Arms! :
                    <h2>(Support) Other allies within 4 tiles of Edda restore 1 NRG. When she performs an [Assisting Attack], her DMG increases by 130%. Increases the maximum number of times the effect can be triggered per turn by 2. The effect lasts for 1 turn.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Edda\Storm-Sniping.webp" alt="Storm Sniping" title='Storm Sniping'></img>
                <h1>Storm Sniping :
                    <h2>(Physical DMG) Deals 120% DMG to 1 enemy Within a cross-shaped range around the character. For each tile between the character and the target (Distance for Adjacent Tiles counts as 0), deals 10% more DMG.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Edda;
