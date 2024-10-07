import React from 'react';

const Cocoa = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Cocoa</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\public\assets\Hero-Art-Out\Cocoa\Cocoa-Profile.webp" alt="Cocoa" title='Cocoa' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3774</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1300</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">652</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">911</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">385</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">221</td>
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
                <td className="border border-gray-500 px-4 py-2">Cocoa</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">蔻蔻娜</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Shiraishi Haruka</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Playful Girl</td>
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
                <td className="border border-gray-500 px-4 py-2">Defender</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Faction</td>
                <td className="border border-gray-500 px-4 py-2">Vlder, Fortitude</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Story Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Story</h2>
        <p>
        A hybrid girl of the Vlder Tribe and the Iria people, Cocoa is a strange traveler carrying a lot of small props.
<br></br><br></br>
Cocoa is playful and funny, and likes to tell people nonsensical travel stories. Her unique appearance of having beast ears and no tail inevitably attracts criticism wherever she goes, but she does not care about these looks, nor does she hide her characteristics of the Vlder Tribe.
<br></br><br></br>
Under her lively and sunny appearance lies a tragic past. In order to find out the whereabouts of her parents, Cocoa left Mount Welda at a very young age and traveled around for many years to find the truth about her parents.
<br></br><br></br>
No matter where she is, Cocoa’s appearance always brings a touch of lightness and joy.
        </p>
      </div>

      {/* Cocoa Guide Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cocoa Overview</h2>
        <p className='flex justify-center'>
          <img src='\assets\SkillSetup\Cocoa-Skill.webp' alt='Cocoa Skill'></img>
        </p>
      </div>

      {/* Cocoa Build Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cocoa Build</h2>
        
        <p className='flex justify-center'>
          <img src='\assets\SkillSetupBuild\Cocoa-Build.webp' alt='Cocoa Build'></img>
        </p>
      </div>

      {/* Cocoa Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cocoa Skills</h2>
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
                <img src="\public\assets\Hero-Art-Out\Cocoa\Breakfast-Hapiness.webp" alt="Breakfast Happiness" title='Breakfast Happiness'></img>
                <h1>Breakfast Happiness :
                    <h2>Cocoa possesses [Block]. Her HP is increased by 20%. At the start of each round, she grants [Breakfast] to the 2 allies with the lowest HP percentage within 2 tiles of herself. After a [Breakfast] or [Bento] effect is triggered, the target gains [Happiness].</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Try-the-Pan!.webp" alt="Try the Pan!" title='Try the Pan!'></img>
                <h1>Try the Pan! :
                    <h2>(Physical DMG) Single-target attack. Cocoa deals 120% DMG and knocks the target back by 3 tiles. Inflicts [▼P.DEF 2] and [▼SPD 2] for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Mountain-Tribes.webp" alt="Mountain Tribes" title='Mountain Tribes'></img>
                <h1>Mountain Tribes :
                    <h2>(Passive) When the character is [Unharmed], increases Movement by 1 tile. If the character attacks from [Highland] or moves from one tile to another with a height difference of more than 2 tiles, increases the DMG by 20%.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Crushing-Bash.webp" alt="Crushing Bash" title='Crushing Bash'></img>
                <h1>Crushing Bash :
                    <h2>(Physical DMG) Single-target attack. Deals 120% DMG and inflicts [Vulnerable 2] for 3 turns.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Potluck-Protector.webp" alt="Potluck Protector" title='Potluck Protector'></img>
                <h1>Potluck Protector :
                    <h2>(Passive) When [Blocking], DMG taken decreases by 15%. If the character is not [Dying], performs [Assisting Cover] to all other allies within 2 tiles.	</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Cocoas-Treasure-Chest.webp" alt="Cocoa’s Treasure Chest" title='Cocoa’s Treasure Chest'></img>
                <h1>Cocoa’s Treasure Chest :
                    <h2>(Decision) Cocoa can select to use [Springy Bandage], [Ancient Potion], [Snow Lotus], or [Hallucinogenic Mushroom].</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Defense-Ranged-Attack.webp" alt="Defense (Ranged Attack)" title='Defense (Ranged Attack)'></img>
                <h1>Defense (Ranged Attack) :
                    <h2>(Reaction) When hit by a ranged attack, the DMG taken is decreased by 25%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Stay-Strong!.webp" alt="Stay Strong!" title='Stay Strong!'></img>
                <h1>Stay Strong! :
                    <h2>(Reaction) After being hit by a single-target attack, heals the character and 1 other ally with the lowest HP percentage within 2 tiles around the character for 12% of the caster‘s HP. Can be activated 2 times per round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Block-Enhancement.webp" alt="Block Enhancement" title='Block Enhancement'></img>
                <h1>Block Enhancement :
                    <h2>(Passive) When receiving Ranged Physical Attacks from [front or side] enemies, there is a 100% chance to trigger [Block]. [Block] decreases DMG taken by 10%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Battle-Flag-of-Vlder.webp" alt="Battle Flag of Vlder" title='Battle Flag of Vlder'></img>
                <h1>Battle Flag of Vlder :
                    <h2>(Leader’s Aura) For all Vlder allies in battle, increases ATK by 10% and DEF by 20%</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\No-Turning-Round!.webp" alt="No Turning Round!" title='No Turning Round!'></img>
                <h1>No Turning Round! :
                    <h2>(Basic Attack) Single-target attack. Cocoa deals 100% Physical DMG. When performing a [back attack], there is a 70% chance she’ll inflict [Stunned] on the target for 1 turn. Can only be triggered once per target per battle.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Armor-Piercing-Strike.webp" alt="Armor-Piercing Strike" title='Armor-Piercing Strike'></img>
                <h1>Armor-Piercing Strike :
                    <h2>(Basic Attack) Deals 100% Physical DMG and inflicts [▼P.DEF 1] and [▼M.DEF 1] on the target, lasting for 2 turns.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Invulnerable.webp" alt="Invulnerable" title='Invulnerable'></img>
                <h1>Invulnerable :
                    <h2>(Support) Gains [DMG Reduction 4], [Minds Eye], and [Immunity to Disrupt] for 3 turns.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\public\assets\Hero-Art-Out\Cocoa\Iron-Pot-Stew.webp" alt="Iron Pot Stew" title='Iron Pot Stew'></img>
                <h1>Iron Pot Stew :
                    <h2>(Healing) Cocoa heals all allies within 3 tiles around her for 30% of her HP and grants them [▲Crit 2], [▲Crit DMG 1] for 2 turns, as well as a [Bento].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cocoa;
