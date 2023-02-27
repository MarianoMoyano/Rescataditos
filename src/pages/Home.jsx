import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
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
        {/*<HeroHome/>*/}
        <FeaturesBlocks/>
        {/*<Testimonials/>*/} 
        {/*<Newsletter/>*/}
        <Adopta />
        <Transito />
        <Ayudar />
        <FeaturesHome/>
      
      </main> 
      {/*<Banner/>*/}
      {/*Site footer*/}
      <Footer/>
    </div>
  );
}

export default Home;