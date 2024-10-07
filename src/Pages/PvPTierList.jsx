import React from 'react';
import { Link } from 'react-router-dom';

const PvPTierList = () => {
  // Tier and category labels
  const tiers = ["T0", "T0.5", "T1", "T1.5", "T2", "T3", "T4", "T5"];
  const categories = ["Breaker", "Seeker", "Defender", "Watcher", "Destroyer"];

  return (
    <div className="text-white p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
        PvP Tier List
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-indigo-600">
              <th className="border border-gray-700 px-4 py-2 lg:px-6 lg:py-3 font-semibold text-base lg:text-lg">
                Tier
              </th>
              {categories.map((category, index) => (
                <th
                  key={index}
                  className="border border-gray-700 px-4 py-2 lg:px-6 lg:py-3 font-semibold text-base lg:text-lg"
                >
                  {category}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, tierIndex) => (
              <tr key={tierIndex}>
                <td
                  className={`border border-gray-700 px-4 py-3 lg:px-6 lg:py-4 text-sm lg:text-base text-center`}
                >
                  {tier}
                </td>
                {categories.map((category, catIndex) => (
                  <td key={catIndex} className="border border-gray-700 px-4 py-3 lg:px-6 lg:py-4 text-sm lg:text-base text-center">
                    <div className="w-full h-full flex flex-wrap items-center justify-center gap-2">
                      {/* Custom images for each category and tier with name below */}
                      {tier === 'T0' && category === 'Breaker' ? (
                        <>
                          <div className="card">
                            <Link to='/Characters/Auguste'><img src="public/assets/Miniatures-inc/Auguste-Minia.png" alt="Auguste" className="image" /></Link>
                            <p className="unit-name">Auguste</p>
                          </div>
                          <div className="card">
                            <Link to='/Characters/Pamina'><img src="public/assets/Miniatures-Inc/Pamina-Minia.png" alt="Pamina" className="image" /></Link>
                            <p className="unit-name">Pamina</p>
                          </div>
                        </>
                      ) : tier === 'T0' && category === 'Destroyer' ? (
                        <>
                          <div className="card">
                            <Link to='/Characters/Tristan'><img src="public/assets/Miniatures-Inc/Tristan-Minia.png" alt="Tristan" className="image" /></Link>
                            <p className="unit-name">Tristan</p>
                          </div>
                          <div className="card">
                            <Link to='/Characters/Caris'><img src="public/assets/Miniatures-Inc/Caris-Minia.png" alt="Caris" className="image" /></Link>
                            <p className="unit-name">Caris</p>
                          </div>
                          <div className="card">
                            <Link to='/Characters/Momo'><img src="public/assets/Miniatures-Out/Momo-Minia.png" alt="Momo" className="image" /></Link>
                            <p className="unit-name">Momo</p>
                          </div>
                          <div className="card">
                            <Link to='/Characters/Acambe'><img src="public/assets/Miniatures-inc/Acambe-Minia.png" alt="Acambe" className="image" /></Link>
                            <p className="unit-name">Acambe</p>
                          </div>
                        </>
                      ) : tier === 'T0' && category === 'Watcher' ? (
                        <>
                          <div className="card">
                            <Link to='/Characters/Inanna'><img src="public/assets/Miniatures-Out/Inanna-Minia.png" alt="Inanna" className="image" /></Link>
                            <p className="unit-name">Inanna</p>
                          </div>
                          <div className="card">
                            <Link to='/Characters/Taair'><img src="public/assets/Miniatures-Inc/Taair-Minia.png" alt="Taair" className="image" /></Link>
                            <p className="unit-name">Taair</p>
                          </div>
                        </>
                      ) : tier === 'T0' && category === 'Defender' ? (
                        <>
                          <div className="card">
                            <Link to='/Characters/Layla'><img src="public/assets/Miniatures-Inc/Layla-Minia.png" alt="Layla" className="image" /></Link>
                            <p className="unit-name">Layla</p>
                          </div>
                        </>
                      ) : tier === 'T0' && category === 'Seeker' ? (
                        <>
                          <div className="card">
                            <Link to='/Characters/Rawiyah-Alt'><img src="public/assets/Miniatures-Inc/Rawiyah-alt-Minia.png" alt="Rawiyah Alt" className="image" /></Link>
                            <p className="unit-name">Rawiyah Alt</p>
                          </div>
                        </>
                      ) : tier === 'T0.5' && category === 'Seeker' ? (
                        <>
                          <div className="card">
                            <Link to='/Characters/Schacklulu'><img src="public/assets/Miniatures-Inc/Schacklulu-Minia.png" alt="Schacklulu" className="image" /></Link>
                            <p className="unit-name">Schacklulu</p>
                          </div>
                          <div className="card">
                            <Link to='/Characters/Safiyyah'><img src="public/assets/Miniatures-Inc/Safiyyah-Minia.png" alt="Safiyyah" className="image" /></Link>
                            <p className="unit-name">Safiyyah</p>
                          </div>
                        </>
                      ) :  tier === 'T0.5' && category === 'Defender' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Alexei'><img src="public\assets\Miniatures-out\Alexei-Minia.png" alt="Alexei" className="image" /></Link>
                            <p className="unit-name">Alexei</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Teadon'><img src="public\assets\Miniatures-out\Teadon-Minia.png" alt="Teadon" className="image" /></Link>
                            <p className="unit-name">Teadon</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Nergal'><img src="public\assets\Miniatures-out\Nergal-Minia.png" alt="Nergal" className="image" /></Link>
                            <p className="unit-name">Nergal</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Cocoa'><img src="public\assets\Miniatures-out\Cocoa-Minia.png" alt="Cocoa" className="image" /></Link>
                            <p className="unit-name">Cocoa</p>
                          </div>
                        </>
                      ) :  tier === 'T0.5' && category === 'Watcher' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Simona'><img src="public\assets\Miniatures-out\Simona-Minia.png" alt="Simona" className="image" /></Link>
                            <p className="unit-name">Simona</p>
                          </div>
                          </>
                      ) :  tier === 'T0.5' && category === 'Breaker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Leonide'><img src="public\assets\Miniatures-out\Leonide-Minia.png" alt="Leonide" className="image" /></Link>
                            <p className="unit-name">Leonide</p>
                          </div>
                          </>
                      ) : tier === 'T1' && category === 'Breaker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Homa'><img src="public\assets\Miniatures-inc\Homa-Minia.png" alt="Homa" className="image" /></Link>
                            <p className="unit-name">Homa</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Xavier'><img src="public\assets\Miniatures-out\Xavier-Minia.png" alt="Xavier" className="image" /></Link>
                            <p className="unit-name">Xavier</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Iggy'><img src="public\assets\Miniatures-out\Iggy-Minia.png" alt="Iggy" className="image" /></Link>
                            <p className="unit-name">Iggy</p>
                          </div>
                          </>
                      ) : tier === 'T1' && category === 'Seeker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/NonoWill'><img src="public\assets\Miniatures-out\Nonowill-Minia.png" alt="Nonowill" className="image" /></Link>
                            <p className="unit-name">Nonowill</p>
                          </div>
                          </>
                      ) : tier === 'T1' && category === 'Destroyer' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Beryl'><img src="public\assets\Miniatures-out\Beryl-Minia.png" alt="Beryl" className="image" /></Link>
                            <p className="unit-name">Beryl</p>
                          </div>
                          </>
                      ) : tier === 'T1' && category === 'Watcher' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Agatha'><img src="public\assets\Miniatures-inc\Agatha-Minia.png" alt="Agatha" className="image" /></Link>
                            <p className="unit-name">Agatha</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Gloria'><img src="public\assets\Miniatures-out\Gloria-Minia.png" alt="Gloria" className="image" /></Link>
                            <p className="unit-name">Gloria</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Faycal'><img src="public\assets\Miniatures-out\Faycal-Minia.png" alt="Faycal" className="image" /></Link>
                            <p className="unit-name">Faycal</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/LilyWill'><img src="public\assets\Miniatures-out\LilyWill-Minia.png" alt="LilyWill" className="image" /></Link>
                            <p className="unit-name">LilyWill</p>
                          </div>
                          </>
                      ) : tier === 'T1.5' && category === 'Breaker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Rawiyah'><img src="public\assets\Miniatures-out\Rawiyah-Minia.png" alt="Rawiyah" className="image" /></Link>
                            <p className="unit-name">Rawiyah</p>
                          </div>
                          </>
                      ) : tier === 'T1.5' && category === 'Seeker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Hasna'><img src="public\assets\Miniatures-inc\Hasna-Minia.png" alt="Hasna" className="image" /></Link>
                            <p className="unit-name">Hasna</p>
                          </div>
                          </>
                      ) : tier === 'T1.5' && category === 'Destroyer' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Dantalion'><img src="public\assets\Miniatures-out\Dantalion-Minia.png" alt="Dantalion" className="image" /></Link>
                            <p className="unit-name">Dantalion</p>
                          </div>
                          </>
                      ) : tier === 'T2' && category === 'Destroyer' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Guzman'><img src="public\assets\Miniatures-out\Guzman-Minia.png" alt="Guzman" className="image" /></Link>
                            <p className="unit-name">Guzman</p>
                          </div>
                          </>
                      ) : tier === 'T2' && category === 'Watcher' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Miguel'><img src="public\assets\Miniatures-out\Miguel-Minia.png" alt="Miguel" className="image" /></Link>
                            <p className="unit-name">Miguel</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Samantha'><img src="public\assets\Miniatures-out\Samantha-Minia.png" alt="Samantha" className="image" /></Link>
                            <p className="unit-name">Samantha</p>
                          </div>
                          <div className="card">
                          <Link to='/Characters/Edda'><img src="public\assets\Miniatures-out\Edda-Minia.png" alt="Edda" className="image" /></Link>
                            <p className="unit-name">Edda</p>
                          </div>
                          </>
                      ) : tier === 'T3' && category === 'Defender' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Magnus'><img src="public\assets\Miniatures-out\Magnus-Minia.png" alt="Magnus" className="image" /></Link>
                            <p className="unit-name">Magnus</p>
                          </div>
                          </>
                      ) : tier === 'T3' && category === 'Seeker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Garcia'><img src="public\assets\Miniatures-out\Garcia-Minia.png" alt="Garcia" className="image" /></Link>
                            <p className="unit-name">Garcia</p>
                          </div>
                          </>
                      ) : tier === 'T4' && category === 'Seeker' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Col'><img src="public\assets\Miniatures-out\Col-Minia.png" alt="Col" className="image" /></Link>
                            <p className="unit-name">Col</p>
                          </div>
                          </>
                      ) : tier === 'T5' && category === 'Destroyer' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Nungal'><img src="public\assets\Miniatures-out\Nungal-Minia.png" alt="Nungal" className="image" /></Link>
                            <p className="unit-name">Nungal</p>
                          </div>
                          </>
                      ) : tier === 'T5' && category === 'Defender' ? (
                        <>
                          <div className="card">
                          <Link to='/Characters/Maitha'><img src="public\assets\Miniatures-out\Maitha-Minia.png" alt="Maitha" className="image" /></Link>
                            <p className="unit-name">Maitha</p>
                          </div>
                          </>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PvPTierList;
