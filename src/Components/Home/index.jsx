import React from 'react'

import '../../App.css';

import Header from '../Header'
import Hero from '../Hero'
import HeroImage from '../HeroImage'
import Footer from '../Footer'
import Folio from '../Folio'

function Home(){
    
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

export default Home