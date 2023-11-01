import React from 'react'
import Layout from '../../components/layout/Layout'
import { useContext } from 'react'
import MyContext from "../../context/data/MyContext"
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from "../../components/Filter/Filter"
import Productcard from "../../components/ProductCard/ProductCard"
import Testimonial from "../../components/Testimonial/Testimonial"
import Footer from '../../components/Footer/Footer'
const Home = () => {

  return (
    <>
 
   <Layout>
   <HeroSection/>
   <Filter/>
   <Productcard/>
    <Testimonial/>
      </Layout>
    <Footer/>
    </>
  )
}

export default Home
