import React from 'react';

const Tarot = () => {
  const tarotCards = [
    {
       name: 'Course of Fortune', 
       image: '/assets/Tarot/Course-of-Fortune.webp', 
       effect: 'At the start of the turn, gains 1 random [buff] of [The Wheel of Fortune].', 
       lv60Effect: 'At the start of the turn, gains additional 1 random [Buff] of [The Wheel of Fortune].', 
       source: 'Tarot Residual 1' },
    {
       name: 'Desire for Temperance', 
       image: '/assets/Tarot/Desire-for-Temperance.webp', 
       effect: 'At the start of the battle, gains a [Physical Shield] equal to 25% of the character’s P.ATK plus it’s M.ATK. The shield cannot be dispelled.', 
       lv60Effect: 'When you have a shield, Decreases DMG taken by 15%.', 
       source: 'Tarot Residual 2' },
    {
       name: 'Destruction of the Tower', 
       image: '/assets/Tarot/Destruction-of-the-Tower.webp', 
       effect: 'When it’s not the character’s turn, DMG dealt increases by 20%.', 
       lv60Effect: 'While it’s not the character’s turn, gains 40% [Life Steal] when dealing DMG.', 
       source: 'Tarot Residual 1' },
    {
       name: 'Dream of the Magician', 
       image: '/assets/Tarot/Dream-of-the-Magician.webp', 
       effect: 'Increases DMG dealt by 8%. When casting skills, for each additional hit on 1 enemy, the DMG dealt increaes by 4%, up to 12%.', 
       lv60Effect: 'Changes the effect of [Tarot Whisper Skill] into: Increases DMG dealt by 16%. When casting skills, for each additional hit on 1 enemy, DMG dealt increases by 8%, up to 24%.', 
       source: 'Tarot Residual 1' },
    {
       name: 'Elegance of the Empress', 
       image: '/assets/Tarot/Elegance-of-the-Empress.webp', 
       effect: 'After casting a skill on an ally, convert 1 [Debuff] on the target into [Level 1 Buff] that lasts for 2 turns.', 
       lv60Effect: 'After casting a skill on an ally, convert 1 additional [debuff] on the target into [Level 1 Buff] that lasts for 2 turns.', 
       source: 'Tarot Residual 3' },
    {
       name: 'Gibbous Moon', 
       image: '/assets/Tarot/Gibbous-Moon.webp', 
       effect: 'At the end of the turn, recovers 20% HP if the character is [Injured]', 
       lv60Effect: 'When the character is [Injured], healing received increases by 15%, and further increases to 30% when in the [Dying] state.', 
       source: 'Tarot Residual 3' },
    {
       name: 'Guidance of the World', 
       image: '/assets/Tarot/Guidance-of-the-World.webp', 
       effect: 'Recovers 1 NRG additionally when not using any active skills and [Standby].', 
       lv60Effect: 'No active skills are used and [Standby], all active skill cooldowns are reduced by 1 turn.', 
       source: 'Tarot Residual 3' },
    {
       name: 'Hierophants Laws', 
       image: '/assets/Tarot/Hierophants-Laws.webp', 
       effect: '[AoE DMG] taken is decreased by 20%.', 
       lv60Effect: 'When attacking a single target. DMG increases by 20% when healing a single target, the healing amount increases by 20%.', 
       source: 'Tower of Adversity' },
    {
       name: 'Majesty of the Emperor', 
       image: '/assets/Tarot/Majesty-of-the-Emperor.webp', 
       effect: 'DMG increases by 10% when attacking [Healthy] enemies.', 
       lv60Effect: 'DMG dealt increases by 15% additionally when attacking [Healthy] enemies.', 
       source: 'Tarot Residual 3' },
    {
       name: 'March of the Chariot', 
       image: '/assets/Tarot/March-of-the-Chariot.webp', 
       effect: 'Gains [▲Move 1] when not using any active skills and [Standby], lasting for 2 turns.', 
       lv60Effect: 'Changes the effect of [Tarot Whisper Skill] into: Gains [▲Move 2] when not using any active Skills and [Standby], lasting for 2 turns.', 
       source: 'Tarot Residual 1' },
    {
       name: 'Mercy of the High Pristess', 
       image: '/assets/Tarot/Mercy-of-the-High-Pristess.webp', 
       effect: 'Increases healing effect by 15%.', 
       lv60Effect: 'Increases healing by an additional 15%. [Dying] state, the treatment effect is increased by an additional 15%.', 
       source: 'Tarot Residual 2' },
    {
       name: 'Rays of the Sun', 
       image: '/assets/Tarot/Rays-of-the-Sun.webp', 
       effect: 'When attacking [Injured] enemies, ignore 20% of their DEF.', 
       lv60Effect: 'When attacking [Injured] enemies, additionally ignore 20% of their DEF.', 
       source: 'Tarot Residual 2' },
    {
       name: 'Redemption of the Judgment', 
       image: '/assets/Tarot/Redemption-of-the-Judgment.webp', 
       effect: 'At the end of the turn, dispels 2 [Attribute Buff] from 1 random enemy within 2 tiles around the character.', 
       lv60Effect: 'Changes the effect of [Tarot Whisper Skill] into: At the end of the turn, dispels 2 [Attribute Buffs] from 1 random enemy within 2 tiles of the character. Inflicts [Judgment] for 2 turns.', 
       source: 'Tarot Residual 2' },
    {
       name: 'Silence of the Hermit', 
       image: '/assets/Tarot/Silence-of-the-Hermit.webp', 
       effect: 'Decreases DMG taken by 10%.', 
       lv60Effect: 'Decreases DMG taken by additional 10%.', 
       source: 'Tarot Residual 1' },
    {
       name: 'Source of Strength', 
       image: '/assets/Tarot/Source-of-Strength.webp', 
       effect: 'When attacked by a character of [the character’s Counter Role], DMG taken is decreased by 10%. When attacking a character of [the character’s Counter Role], ignores 15% of the target’s DEF.', 
       lv60Effect: 'When attacked by a character of [the character’s Counter Role], DMG taken is decreased by an additional 10%. When attacking a character of [the character’s Counter Role], ignores an additional 20% of the target’s DEF.', 
       source: 'Tower of Adversity' },
    {
       name: 'Tempation of the Devil', 
       image: '/assets/Tarot/Tempation-of-the-Devil.webp', 
       effect: 'For each 1 character defeated in battle, gains 1 stack of [Devil]. The effect lasts until the end of the battle and cannot be dispelled or immunized.', 
       lv60Effect: 'Changes the effect of [Tarot Whisper Skill] into: For each 1 character defeated in battle, gains 2 stack of [Devil]. The effect lasts until the end of the battle and cannot be dispelled or immunized.', 
       source: 'Tarot Residual 3' },
    {
       name: 'The Fools Naivety', 
       image: '/assets/Tarot/The-Fools-Naivety.webp', 
       effect: 'HP is increased by 10%. When initiating an active attack, if the character’s max HP is greater than by 10%.', 
       lv60Effect: 'HP is additionally increased by 10%. When initiating an active attack, if the character’s HP percentage is greater than the target’s, DMG dealts is additionally increased by 10%.', 
       source: 'Tower of Adversity' },
    {
       name: 'Verdict of Justice', 
       image: '/assets/Tarot/Verdict-of-Justice.webp', 
       effect: 'Increases Crit chance by 15%.', 
       lv60Effect: 'Increases Crit DMG by 15%.', 
       source: 'Tarot Residual 2' },
    
  ];

  return (
    <div className="min-h-screen  text-white px-4 lg:px-16 p-4">
        <h1 className="text-3xl lg:text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">Tarot List</h1>
      {/* Tarot List Box */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">

        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-gray-800 rounded-lg border-collapse">
            <thead>
              <tr className="bg-gray-700 text-left">
                <th className="p-4 text-sm font-semibold text-gray-200 border-b border-gray-700">Tarot</th>
                <th className="p-4 text-sm font-semibold text-gray-200 border-b border-gray-700">Effect</th>
                <th className="p-4 text-sm font-semibold text-gray-200 border-b border-gray-700">Lv-60 Effect</th>
                <th className="p-4 text-sm font-semibold text-gray-200 border-b border-gray-700">Source</th>
              </tr>
            </thead>
            <tbody>
              {tarotCards.map((card, index) => (
                <tr key={index} className="hover:bg-gray-700 transition-colors border-b border-gray-700">
                  <td className="p-4 flex max-md:flex-col items-center space-x-4">
                    <img src={card.image} alt={card.name} className="w-12 h-16 object-cover rounded-lg" />
                    <span className="text-sm">{card.name}</span>
                  </td>
                  <td className="p-4 text-sm">{card.effect}</td>
                  <td className="p-4 text-sm">{card.lv60Effect}</td>
                  <td className="p-4 text-sm">{card.source}</td>
                </tr>
              ))}
              {[...Array(18 - tarotCards.length)].map((_, idx) => (
                <tr key={idx + tarotCards.length} className="border-b border-gray-700">
                  <td className="p-4">&nbsp;</td>
                  <td className="p-4">&nbsp;</td>
                  <td className="p-4">&nbsp;</td>
                  <td className="p-4">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tarot Schedule Box */}
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-4">Tarot Schedule</h2>
        <p className="text-gray-300 text-sm">
          Tarot Residual 1: Monday & Thursday & Sunday <br />
          Tarot Residual 2: Tuesday, Friday and Sunday <br />
          Tarot Residual 3: Wednesday, Saturday and Sunday <br />
          How to obtain Tarot 2: Redeem at the Prestige Store, Event Rewards
        </p>
      </div>
    </div>
  );
};

export default Tarot;
