import React from 'react';

const Content = () => {
  return (
    <main className="flex-1 p-8 bg-gradient-to-b from-black to-gray-800 text-white min-h-screen">
      <section id="characters">
        <h2 className="text-xl font-semibold mb-4">Characters</h2>
        <p>Content about Characters goes here...</p>
      </section>
      <section id="guides" className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Character Guides</h2>
        <p>Content about Character Guides goes here...</p>
      </section>
      {/* Additional sections for PvP, PvE, etc. */}
    </main>
  );
};

export default Content;



