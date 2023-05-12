import React from 'react'
import Banner from './Banner'
import { About } from './About'
import { Services } from './Services'
import Footer from '../../components/Footer'
import ContactUs from './ContactUs'
import Products from './Products'
import OurTeam from './OurTeam'


const Home = () => {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <ContactUs></ContactUs>
    <Products></Products>
    <OurTeam></OurTeam>
    <Footer></Footer>
    </>
    
  )
}

export default Home