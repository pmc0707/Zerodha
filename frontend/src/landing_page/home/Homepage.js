import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccount from '../../OpenAccount';
import Footer from '../../Footer';
import Topnav from '../../Topnav';

function HomePage() {
    return ( 
       <>
           <Topnav /> 
           <Hero />
           <Awards />
           <Stats />
           <Pricing />
           <Education />
           <OpenAccount />
           <Footer />
       </>
    );
}

export default HomePage;
