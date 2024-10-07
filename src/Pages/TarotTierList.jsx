import React from 'react';
import { Link } from 'react-router-dom';

const TarotTierList = () => {
  // Tier and category labels
  const tiers = ["T0", "T1", "T2", "T3"];

  return (
    <div className="text-white p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-darkgreen-500">
        Tarot Tier List
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg">
          <tbody>
            {tiers.map((tier, tierIndex) => (
              <tr key={tierIndex}>
                <td
                  className={`border border-gray-700 px-4 py-3 lg:px-6 lg:py-4 text-sm lg:text-base text-center bg-gradient-to-br from-purple-600 to-indigo-600`}
                >
                  {tier}
                </td>
                
                      {tier === 'T0' ? (
                        <>
                        <div className='flex'>
                          <div className="card">
                            <img src="\assets\Tarot\Tempation-of-the-Devil.webp" alt="Temptation of the Devil" className="image" />
                            <p className="unit-name">Temptation of the Devil</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Verdict-of-Justice.webp" alt="Verdict of Justice" className="image" />
                            <p className="unit-name">Verdict of Justice</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Dream-of-the-Magician.webp" alt="Dream of the MAgician" className="image" />
                            <p className="unit-name">Dream of the Magician</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Majesty-of-the-Emperor.webp" alt="Majesty of the Emperor" className="image" />
                            <p className="unit-name">Majesty of the Emperor</p>
                          </div>
                          
                        </div>
                        </>
                      
                      ) : tier === 'T1' ? (
                        <>
                        <div className='flex'>
                          <div className="card">
                            <img src="\assets\Tarot\Guidance-of-the-World.webp" alt="Guidance of the World" className="image" />
                            <p className="unit-name">Guidance of the World</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Elegance-of-the-Empress.webp" alt="Elegance of the Empress" className="image" />
                            <p className="unit-name">Elegance of the Empress</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Mercy-of-the-High-Pristess.webp" alt="Mercy of the High Pristess" className="image" />
                            <p className="unit-name">Mercy of the High Pristess</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Silence-of-the-Hermit.webp" alt="Silence of the Hermit" className="image" />
                            <p className="unit-name">Silence of the Hermit</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Redemption-of-the-Judgment.webp" alt="Redemption of the Judgment" className="image" />
                            <p className="unit-name">Redemption of the Judgment</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Destruction-of-the-Tower.webp" alt="Destruction of the Tower" className="image" />
                            <p className="unit-name">Destruction of the Tower</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Hierophants-Laws.webp" alt="Hierophants Laws" className="image" />
                            <p className="unit-name">Hierophants Laws</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Source-of-Strength.webp" alt="Source of Strength" className="image" />
                            <p className="unit-name">Source of Strength</p>
                          </div>
                          
                        </div>
                        </>
                      
                      ) : tier === 'T2' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <img src="\assets\Tarot\Desire-for-Temperance.webp" alt="Desire for Temperance" className="image" />
                            <p className="unit-name">Desire for Temperance</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Course-of-Fortune.webp" alt="Course of Fortune" className="image" />
                            <p className="unit-name">Course of Fortune</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Gibbous-Moon.webp" alt="Gibbous Moon" className="image" />
                            <p className="unit-name">Gibbous Moon</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\Rays-of-the-Sun.webp" alt="Rays of the Sun" className="image" />
                            <p className="unit-name">Rays of the Sun</p>
                          </div>
                          <div className="card">
                            <img src="\assets\Tarot\The-Fools-Naivety.webp" alt="The Fools Naivety" className="image" />
                            <p className="unit-name">The Fools Naivety</p>
                          </div>
                          
                        </div>
                          </>
                      
                      ) : tier === 'T3' ? (
                        <>
                        <div className='flex'>
                        <div className="card">
                            <img src="\assets\Tarot\March-of-the-Chariot.webp" alt="March of the Chariot" className="image" />
                            <p className="unit-name">March of the Chariot</p>
                          </div>
                        
                        </div>
                          </>
                      
                      ) : (
                        <span></span>
                      )}
                    
              </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TarotTierList;
