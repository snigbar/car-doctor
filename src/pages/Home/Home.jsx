import React from 'react'
import Banner from './Banner'
import { About } from './About'
import { Services } from './Services'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <Services></Services>
    <Footer></Footer>
    </>
    
  )
}

export default Home