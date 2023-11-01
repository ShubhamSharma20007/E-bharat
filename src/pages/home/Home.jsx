import React from 'react'
import Layout from '../../components/layout/Layout'
import { useContext } from 'react'
import MyContext from "../../context/data/MyContext"
const Home = () => {
  const context  = useContext(MyContext)

  return (
    <div>
 
   <Layout>
        {

}
      </Layout>
    </div>
  )
}

export default Home
