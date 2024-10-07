import React from 'react';


const SteelCrossbow = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      {/* Equipment Name */}
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-10">
        Steel Crossbow
      </h1>

      {/* Responsive Layout: Image & Stats Table */}
      <div className="lg:flex lg:items-start lg:space-x-8 mb-10">
        {/* Equipment Image */}
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative">
            {/* Responsive Image */}
            <img
              src="\assets\Gear-Gold-or-Below\Steel-Crossbow-Cd.webp"
              alt="Steel Crossbow"
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
                  ['HP', '+752'],
                  ['Physical ATK', '+331'],
                  ['Physical DEF', '+74'],
                  ['Magic ATK', '+0'],
                  ['Magic DEF', '+74'],
                  ['Rarity', 'Epic'],
                  ['Source', '	Weaponry Trial-2'],
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
        The crossbow fires steel-tipped bolts that can easily penetrate thick steel plates, making even elite knights equipped with shields and plate armors hesitant to charge against it.


        </p>
      </div>

      {/* Skill Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-white mb-6">Steel Crossbow Skill</h2>
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
                ['1-Star', '	Attacks ignore 12% of the target’s DEF.'],
                ['2-Star', '	Attacks ignore 15% of the target’s DEF.'],
                ['3-Star', '	Attacks ignore 18% of the target’s DEF.'],
                ['4-Star', '	Attacks ignore 21% of the target’s DEF.'],
                ['5-Star', '	Attacks ignore 25% of the target’s DEF.'],
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

export default SteelCrossbow;
