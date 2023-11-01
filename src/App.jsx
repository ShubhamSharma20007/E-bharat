
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
      <Route path='*' element={<Nopage/>} />
    </Routes>
  </Router>
  </MyState>
  
  </>
  )
}

export default App
