import React from 'react'
import Layout from '../../components/layout/Layout'
import { useContext } from 'react'
import MyContext from "../../context/data/MyContext"
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from "../../components/Filter/Filter"
import Productcard from "../../components/ProductCard/ProductCard"
import Testimonial from "../../components/Testimonial/Testimonial"
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/CartSlice'

const Home = () => {
  const dispatch = useDispatch();
  const cartitem = useSelector((state)=>state.cart)
console.log(cartitem)
  const addCart =()=>{
    dispatch(addToCart("Shirt"))
  }
  const DeleteCart =()=>{
    dispatch(deleteFromCart("Shirt"))
  }
  return (
    <>
  <div className="">
    <button type="button" className='p-3 bg-black text-white'  onClick={()=>addCart()}>ADD</button>
    <button type="button"   className='p-3 bg-black text-white' onClick={()=>DeleteCart()}>DELETE</button>
  </div>
 
   <Layout>
   <HeroSection/>
   <Filter/>
   <Productcard/>
    <Testimonial/>

    <Footer/>
      </Layout>
   
    </>
  )
}

export default Home
