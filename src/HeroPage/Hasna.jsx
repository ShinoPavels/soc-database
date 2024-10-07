import React from 'react';

const Hasna = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Hasna</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Hasna\Hasna-Profile.webp" alt="Hasna" title='Hasna' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">Tier 1.5</td>
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
                <td className="border border-gray-500 px-4 py-2">3465</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1030</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">485</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">1469</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">647</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Speed</td>
                <td className="border border-gray-500 px-4 py-2">151</td>
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
                <td className="border border-gray-500 px-4 py-2">Hasna</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">	哈斯娜</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Suwa Ayaka</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Fragrance of the Shadow</td>
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
                <td className="border border-gray-500 px-4 py-2">Seeker</td>
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
        A mysterious blind woman from Ellaman, she first appeared near a spring in the desert at the border of Iria, and seems to often appear with another mysterious person.
<br></br><br></br>
The incense burner in her hand emits a deadly fragrance during battle, and she dances with a seductive and elegant manner, changing the low-key impression she is used to maintaining.
        </p>
      </div>

      {/* Hasna Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hasna Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Hasna\Lingering-Fragrance-Trait.webp" alt="Lingering Fragrance" title='Lingering Fragrance'></img>
                <h1>Lingering Fragrance :
                    <h2>mmunity [Blind], magic attack increased by 15%. When all enemies within 5 grids of the self finish their actions, apply [Hidden Fragrance], which lasts for 2 rounds. Within 5 squares of the player’s range, [Hidden Fragrance] The attack and defense attributes of enemies are reduced by 15%, and the chance of receiving a critical hit is increased by 15%.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Corruption-and-Decay.webp" alt="Corruption and Decay" title='Corruption and Decay'></img>
                <h1>Corruption and Decay :
                    <h2>(Magic Damage) Inflict 50% of magic attack value on all enemies within 2 squares of the target range. [Life Loss], impose [▼Treatment], lasts for 2 rounds.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Hypnosis.webp" alt="Hypnosis" title='Hypnosis'></img>
                <h1>Hypnosis :
                    <h2>(Magical DMG) Single-target attack Deals 35% DMG and inflicts [Sleep] for 2 turns.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Fighting-Excitement.webp" alt="Fighting Excitement" title='Fighting Excitement'></img>
                <h1>Fighting Excitement :
                    <h2>(Passive) After an active attack, the damage taken by the player is reduced by 15%. If a critical hit occurs, the damage taken is reduced by an additional 25% for 1 round.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Strong-Aroma-Shock.webp" alt="Strong Aroma Shock" title='Strong Aroma Shock'></img>
                <h1>Strong Aroma Shock :
                    <h2>(Magic Damage) Single attack, causing 150% damage, and applies to all enemies within 2 squares of the target range [Hidden Fragrance], lasts for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Scented-Path.webp" alt="Scented Path" title='Scented Path'></img>
                <h1>Scented Path :
                    <h2>(Passive) After attacking, inflict [Hidden Fragrance] Debuff: When attacked by Hasna, the player will receive an additional effect that cannot be dispelled or immune. Lasts for 2 rounds; Attack has [Hidden Fragrance], restores 2 energy points. [Hidden Fragrance], additional 40% of the HP is restored.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Wakaha-Cartilage.webp" alt="Wakaha Cartilage" title='Wakaha Cartilage'></img>
                <h1>Wakaha Cartilage :
                    <h2>(Reaction) Possessed [Hidden Fragrance] When an enemy attacks actively, damage taken is reduced by 30%.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Anger.webp" alt="Anger" title='Anger'></img>
                <h1>Anger :
                    <h2>(Reaction) When actively attacked, the damage received is reduced by 8%. After being attacked, you gain [▲Damage 2], which lasts for 3 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Raid.webp" alt="Raid" title='Raid'></img>
                <h1>Raid :
                    <h2>(Support) [Instant], gain[▲Critical Hit 1], [▲Injury 1] and [▲Move 2], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Scent-of-a-Person.webp" alt="Scent of a Person" title='Scent of a Person'></img>
                <h1>Scent of a Person :
                    <h2>(Passive) When the action starts, if there is a[Hidden Fragrance], you gain [▲Critical Hit 2], the maximum range increases by 1 square, and after causing a critical hit, it can move another 2 squares.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Hypnotic-Strike.webp" alt="Hypnotic Strike" title='Hypnotic Strike'></img>
                <h1>Hypnotic Strike :
                    <h2>(Normal attack) Causes 80% magic damage, 30% chance to inflict [Sleep], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Eviscerated-Phantom.webp" alt="Eviscerated Phantom" title='Eviscerated Phantom'></img>
                <h1>Eviscerated Phantom :
                    <h2>(Normal Attack) Single attack, causing 90% magic damage; if adjacent to the target and it has [Hidden Fragrance], it will make an additional attack, causing physical damage equal to 50% of the magic attack value, which is a guaranteed critical hit.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Penetrates-Deeply.webp" alt="Penetrates Deeply" title='Penetrates Deeply'></img>
                <h1>Penetrates Deeply :
                    <h2>(Magic Damage) Single attack, causing 140% damage to the [Hidden Fragrance], dealing 170% damage to enemies. Critical hit rate and critical hit damage increased by an additional 15% before attacking.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Hasna\Life-Devouring.webp" alt="Life Devouring" title='Life Devouring'></img>
                <h1>Life Devouring :
                    <h2>(Magic Damage) Single attack, causing 150% damage. After attacking, generates 45% [Life Drain].</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hasna;
