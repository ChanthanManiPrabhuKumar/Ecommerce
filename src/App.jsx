import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/HomePages/Homepage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
