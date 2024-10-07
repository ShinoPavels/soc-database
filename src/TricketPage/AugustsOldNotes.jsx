import React from 'react';


const AugustsOldNotes = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      {/* Equipment Name */}
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center mb-10">
        Augusts Old Notes
      </h1>

      {/* Responsive Layout: Image & Stats Table */}
      <div className="lg:flex lg:items-start lg:space-x-8 mb-10">
        {/* Equipment Image */}
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <div className="relative">
            {/* Responsive Image */}
            <img
              src="\assets\Gear-Legendary\Augusts-Old-Notes-Cd.webp"
              alt="Augusts Old Notes"
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
                  ['Source', '	Card draw, Event task rewards'],
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
        A worn notebook, which records in detail the knight’s creed and code, various tactical strategies, and army management methods. One of the articles focuses on the importance of encouragement and is signed by Squadron Leader August.


        </p>
      </div>

      {/* Skill Section */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-white mb-6">Augusts Old Notes Skill</h2>
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
                ['1-Star', '	[Instant] Grants one other ally 1 random [Level 2 Buff] and [▲SPD 1] for 2 turns. Can be used up to 3 times per battle. CD: 4 turns.'],
                ['2-Star', '	[Instant] Grants one other ally 1 random [Level 2 Buff] and [▲SPD 1] for 2 turns. Can be used up to 3 times per battle. CD: 3 turns.'],
                ['3-Star', '	[Instant] Grants one other ally 1 random [Level 2 Buff] and [▲SPD 1] for 2 turns. Can be used up to 3 times per battle. CD: 2 turns.'],
                ['4-Star', '	[Instant] Grants one other ally 1 random [Level 2 Buff] and [▲SPD 1] for 2 turns. Can be used up to 4 times per battle. CD: 2 turns.'],
                ['5-Star', '	[Instant] Grants one other ally 1 random [Level 2 Buff] and [▲SPD 1] for 2 turns. Can be used up to 5 times per battle. CD: 2 turns.'],
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
        <div className="flex flex-wrap justify-center gap-6">
            <img src='\assets\Miniatures-Out\Beryl-Minia.png' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover shadow-lg"/>
            <img src='\assets\Miniatures-Out\Beryl-Minia.png' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover shadow-lg"/>
            <img src='\assets\Miniatures-Out\Beryl-Minia.png' className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover shadow-lg"/>

        </div>
      </div>
    </div>
  );
};

export default AugustsOldNotes;
