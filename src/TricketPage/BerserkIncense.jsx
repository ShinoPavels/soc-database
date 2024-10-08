import React from 'react';


const BerserkIncense = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      {/* Equipment Name */}
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-10">
        Berserk Incense
      </h1>

      {/* Responsive Layout: Image & Stats Table */}
      <div className="lg:flex lg:items-start lg:space-x-8 mb-10">
        {/* Equipment Image */}
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative">
            {/* Responsive Image */}
            <img
              src="\assets\Gear-Legendary\Berserk-Incense-Cd.webp"
              alt="Berserk Incense"
              className="rounded-lg shadow-lg object-contain
                w-80 h-80
                sm:w-96 sm:h-96
                md:w-112 md:h-112
                lg:w-128 lg:h-128
                xl:w-144 xl:h-144"
            />
          </div>
        </div>

        {/* Stats Table */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 lg:w-2/3">
          <h2 className="text-2xl font-bold text-white mb-4">Stats (Lv-60)</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent table-auto text-left text-white border-separate border-spacing-y-2">
              <tbody>
                {[
                  ['HP', '+806'],
                  ['Physical ATK', '+321'],
                  ['Physical DEF', '+119'],
                  ['Magic ATK', '+0'],
                  ['Magic DEF', '+80'],
                  ['Rarity', 'Legendary'],
                  ['Source', 'Weapon Summon, Limited-Time Event Reward'],
                ].map(([label, value], idx) => (
                  <tr
                    key={label}
                    className={`${idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} 
                                border border-gray-700 rounded-lg hover:bg-gray-700 transition-all`}
                  >
                    <td className="py-4 px-6 font-medium">{label}</td>
                    <td className="py-4 px-6 text-right">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Description</h2>
        <p className="text-gray-300 leading-relaxed">
        The aroma is made from trace amounts of crystals, animal fluids, resins, herbs, ashes and other raw materials. It can make people enter a violent state with greatly increased combat power and no regard for pain. It can also easily induce transformation for some Lucia people who have difficulty transforming.


        </p>
      </div>

      {/* Skill Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-white mb-6">Berserk Incense Skill</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent table-auto text-left text-white border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-900 border border-gray-700 rounded-lg">
                <th className="py-4 px-6 font-semibold">Star Level</th>
                <th className="py-4 px-6 font-semibold">Skill Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['1-Star', '	Gains [Berserk Awake]. Effect: Increases movement by 1 tile and DMG by 10% for 2 turns. Can be used up to 1 time per battle.'],
                ['2-Star', '	Gains [Berserk Awake]. Effect: Increases movement by 1 tile and DMG by 15% for 2 turns. Can be used up to 1 time per battle.'],
                ['3-Star', 'Gains [Berserk Awake]. Effect: Increases movement by 1 tile and DMG by 15% for 2 turns. Cooldown: 5 turns. Can be used up to 2 times per battle.'],
                ['4-Star', 'Gains [Berserk Awake]. Effect: Increases movement by 1 tile and DMG by 20% for 2 turns. Cooldown: 5 turns. Can be used up to 2 times per battle.'],
                ['5-Star', 'Gains [Berserk Awake]. Effect: Increases movement by 1 tile and DMG by 15% for 2 turns. Cooldown: 3 turns. Can be used up to 2 times per battle.'],
              ].map(([level, description], idx) => (
                <tr
                  key={level}
                  className={`${idx % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} 
                              border border-gray-700 rounded-lg hover:bg-gray-700 transition-all`}
                >
                  <td className="py-4 px-6 font-medium">{level}</td>
                  <td className="py-4 px-6 text-gray-300">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BerserkIncense;
