import React from 'react';

import Header from '../partials/Header';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';
import Ayudar from '../partials/Ayudar';
import Transito from '../partials/Transito';
import Adopta from '../partials/Adopta';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <FeaturesBlocks/>
        <Adopta />
        <Transito />
        <Ayudar />
        <FeaturesHome/>
        
      </main> 
      <Footer/>
    </div>
  );
}

export default Home;