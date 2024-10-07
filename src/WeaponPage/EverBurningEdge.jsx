import React from 'react';


const EverBurningEdge = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      {/* Equipment Name */}
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-10">
        Ever-Burning Edge
      </h1>

      {/* Responsive Layout: Image & Stats Table */}
      <div className="lg:flex lg:items-start lg:space-x-8 mb-10">
        {/* Equipment Image */}
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative">
            {/* Responsive Image */}
            <img
              src="\assets\Gear-Legendary\Everburning-Edge-Cd.webp"
              alt="Ever-Burning Edge"
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
                  ['HP', '+948'],
                  ['Physical ATK', '+450'],
                  ['Physical DEF', '+142'],
                  ['Magic ATK', '+0'],
                  ['Magic DEF', '+95'],
                  ['Rarity', 'Legendary'],
                  ['Source', '	Weaponry Trial-3'],
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
        This sword is the pinnacle of Luxite-infused weaponry. With its blade perpetually engulfed in flames, this extraordinary and symbolic sword still awaits a knight who can fully wield it.


        </p>
      </div>

      {/* Skill Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-white mb-6">Ever-Burning Edge Skill</h2>
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
                ['1-Star', 'After dealing DMG with single-target active attacks, gains a 50% chance to inflict [Scorch] on the target, which can be triggered up to 1 time per round. Deals 20% more DMG to the enemies with [scorch].'],
                ['2-Star', 'After dealing DMG with single-target active attacks, gains a 60% chance to inflict [Scorch] on the target, which can be triggered up to 1 time per round. Deals 20% more DMG to the enemies with [scorch].'],
                ['3-Star', 'After dealing DMG with single-target active attacks, gains a 70% chance to inflict [Scorch] on the target, which can be triggered up to 1 time per round. Deals 20% more DMG to the enemies with [scorch].'],
                ['4-Star', 'After dealing DMG with single-target active attacks, gains a 80% chance to inflict [Scorch] on the target, which can be triggered up to 1 time per round. Deals 20% more DMG to the enemies with [scorch].'],
                ['5-Star', 'After dealing DMG with single-target active attacks, gains a 100% chance to inflict [Scorch] on the target, which can be triggered up to 1 time per round. Deals 20% more DMG to the enemies with [scorch].'],
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

      {/* Best Users Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Best Users</h2>
        <div className="flex flex-wrap justify-center gap-6 text-white">
          None

        </div>
      </div>
    </div>
  );
};

export default EverBurningEdge;
