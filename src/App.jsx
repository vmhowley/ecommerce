import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/products/:id" element={<div>Products</div>}/>
        <Route path="/cart" element={<div>Cart</div>} />
        <Route path="/checkout" element={<div>Checkout</div>} />
        <Route path="*" element={<div>Error 404</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
