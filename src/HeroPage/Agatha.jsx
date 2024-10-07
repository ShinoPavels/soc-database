import React from 'react';

const Agatha = () => {
  
  return (

    <div className="text-white p-8">
      {/* Character Name */}
      <h1 className="text-4xl font-bold mb-8 text-center">Character Name</h1>

      {/* Character Picture */}

      <div className="flex justify-center mb-8">

        <div className="w-64 h-85 bg-gray-700 flex items-center justify-center">

          <img src="\assets\Hero-Art-Inc\Agatha\Agatha-Profile.webp" alt="Agatha" title='Agatha' className=''></img>

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
                <td className="border border-gray-500 px-4 py-2">3172</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical ATK</td>
                <td className="border border-gray-500 px-4 py-2">1361</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Physical DEF</td>
                <td className="border border-gray-500 px-4 py-2">467</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic ATK</td>
                <td className="border border-gray-500 px-4 py-2">955</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Magic DEF</td>
                <td className="border border-gray-500 px-4 py-2">388</td>
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
                <td className="border border-gray-500 px-4 py-2">Agatha</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Chinese</td>
                <td className="border border-gray-500 px-4 py-2">TBD</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Japanese Dub</td>
                <td className="border border-gray-500 px-4 py-2">Toyoguchi Megumi</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-4 py-2">Title</td>
                <td className="border border-gray-500 px-4 py-2">Silver Wolf Queen</td>
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
        Legendary mercenary, leader of the Silver Wolf Mercenary Corps, legendary hero during the Unification War of Lucia, close comrade of the Emperor, leader of the Silver Wolf Tribe.
<br></br><br></br>
Strong, calm, wise and decisive, full of power and wild charm, she can maintain the powerful Silver Wolf form for a long time in battle, and has both high combat power and leadership. She is not only an excellent warrior, but also a pioneer.
<br></br><br></br>
After the Unification War, she gave up her position as leader for the future of Lucia, led some young people out of the ice field, worked as mercenaries, gained knowledge, and learned advanced systems, technologies, and concepts.
        </p>
      </div>
      
      {/* Agatha Build Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Agatha Skills</h2>
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
                <img src="\assets\Hero-Art-Inc\Agatha\Silver-Wolf-Queen.webp" alt="Silver Wolf Queen" title='Silver Wolf Queen'></img>
                <h1>Silver Wolf Queen :
                    <h2>Gained at the start of the battle [Wolf Blood Awakening 3], HP increases by 30%. After attacking, for every layer of [Wounds], adding 10% of Agata’s health [Piercing Damage], can be launched up to 2 times per round.</h2>
                </h1>
                </td>
              <td className="px-4 py-2">Basic Skill</td>
              
              <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Everfrost-Ground.webp" alt="Everfrost Ground" title='Everfrost Ground'></img>
                <h1>Everfrost Ground :
                    <h2>(Magical DMG) Single-target attack Deals 85% DMG and inflicts 2 random [Level 2 Attribute Debuffs] on the target for 2 turns.</h2>
                </h1>
                </td>            
                </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Fight-off-Pursuit.webp" alt="Fight-off Pursuit" title='Fight-off Pursuit'></img>
                <h1>Fight-off Pursuit :
                    <h2>(Physical Damage) Single attack, dealing 70% damage. After attacking, perform [Chase], dealing 70% damage, knocking back 2 squares.</h2>
                </h1>
                </td>

              <td className=" px-4 py-2">Rank 1</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Combat-Therapy.webp" alt="Combat Therapy" title='Combat Therapy'></img>
                <h1>Combat Therapy :
                    <h2>(Passive) After an active attack, heal the teammate with the lowest HP on the field, with the healing amount equal to 20% of the skill holder’s Physical Attack.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800  align left'>
            <td className=" px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Silver-Flash.webp" alt="Silver Flash" title='Silver Flash'></img>
                <h1>Silver Flash :
                    <h2>(Piercing Damage)[Instant], charge to the target location and deal 30% damage to all enemies in a 1*3 area in the target direction, dispel 2 [Buff], and apply 2 layers of [Wounds].[Dodge], lasts for 1 round.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 3</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Queens-Decree.webp" alt="Queens Decree" title='Queens Decree'></img>
                <h1>Queen's Decree :
                    <h2>(Physical Damage) Deals 80% damage to all enemies in a 3*3 area in the target direction, and applies [Vulnerable 2], [▼Speed ​​2], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr className='align-left'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Queens-Grace.webp" alt="Queens Grace" title='Queens Grace'></img>
                <h1>Queen's Grace :
                    <h2>(Reaction) [Healthy]. In this state, each round can [Dodge] 1 melee attack, trigger [Dodge] Hour, [Strike Back] and cause 50% damage.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 5</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Activation.webp" alt="Activation" title='Activation'></img>
                <h1>Activation :
                    <h2>(Reaction) Increases maximum health by 12% and healing received by 30%.</h2>
                </h1>
                </td>

            </tr>
            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Scent-of-Pray.webp" alt="Scent of Pray" title='Scent of Pray'></img>
                <h1>Scent of Pray :
                    <h2>(Passive) When the action starts, if there is an enemy within 6 squares of the player, the player gains [The Taste of Prey], lasts for 2 rounds, cools down for 2 rounds.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 7</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Wildness-Boiling.webp" alt="Feast" title='Feast'></img>
                <h1>Feast :
                    <h2>(Treatment)[Instant], restore 15% of health, gain [▲Attack 2],[Regeneration 2], [▲Healing 2], which lasts for 3 rounds.</h2>
                </h1>
                </td>

            </tr>
            <tr>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Power-Strike.webp" alt="Power Strike" title='Power Strike'></img>
                <h1>Power Strike :
                    <h2>(Normal Attack) Single attack, causing 55% physical damage twice.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 9</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Silencing-Strike.webp" alt="Silencing Strike" title='Silencing Strike'></img>
                <h1>Silencing Strike :
                    <h2>(Normal attack) Single attack, causing 50% physical damage twice. [Injured] Before attacking, inflict [🛇Active Skill], lasts for 2 rounds.</h2>
                </h1>
                </td>

            </tr>

            <tr className='bg-gray-800'>
            <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Fair-Duel.webp" alt="Fair Duel" title='Fair Duel'></img>
                <h1>Fair Duel :
                    <h2>(Physical Damage) Single attack, causing 180% damage. Before attacking, dispel all [Debuffs] of the self and all [Buffs] of the target.</h2>
                </h1>
                </td>

              <td className="px-4 py-2">Rank 11</td>

              <td className="px-4 py-2 flex items-center justify-left gap-2">
                <img src="\assets\Hero-Art-Inc\Agatha\Feast.webp" alt="Feast" title='Feast'></img>
                <h1>Feast :
                    <h2>(Physical Damage) Single attack, causing 40% damage 4 times, and recovering 40% of its own health. [Healthy] When in the state, heals all allies within 3 squares of itself, and the healing amount is 25% of the caster’s health.</h2>
                </h1>
                </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Agatha;
