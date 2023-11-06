
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Admin from './pages/admin/Admin'
import  Dashboard from './pages/admin/dashboard/Dashboard'
import Nopage from "./pages/nopage/Nopage"
import MyState from './context/data/MyState'
import Allproduct from './pages/allproducts/Allproduct'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import Addproduct from './pages/admin/pages/Addproduct'
import Productinfo from './pages/productinfo/Productinfo'
import Updateproduct from './pages/admin/pages/Updateproduct'
function App() {
  return (
  <>
  <MyState>
  <Router>
    <Routes>
     <Route path='/' element={<Home/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/allproduct' element={<Allproduct/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/addproduct' element={<Addproduct/>} />
      <Route path='/updateproduct' element={<Updateproduct/>} />
      <Route path='/productinfo/:id' element={<Productinfo/>} />
      <Route path='*' element={<Nopage/>} />
    </Routes>
  </Router>
  </MyState>
  
  </>
  )
}

export default App
