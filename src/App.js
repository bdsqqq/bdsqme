import React from 'react';
import Header from './header'
import Hero from './hero'
import HeroImage from './heroimage'
import Footer from './footer'
import Folio from './folio'

import './App.css';

function App() {
    return (
      <>
        <HeroImage size="100" transparency="0.9" photoURL="https://images.unsplash.com/photo-1529603992250-a55acb77d146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Header/>
        <Hero/>
        <Folio />
        <Footer/>
      </>
    );
}

export default App;
