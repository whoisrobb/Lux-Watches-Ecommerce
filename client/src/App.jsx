import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ReturnsPolicy from './pages/ReturnsPolicy'
import DepositPolicy from './pages/DepositPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermsOfService from './pages/TermsOfService'
import Repairs from './pages/Repairs'
import Refurbishing from './pages/Refurbishing'
import Valuation from './pages/Valuation'
import Models from './devPages/Models'
import Watches from './pages/Watches'
import ProductDetail from './pages/ProductDetail'
import ShoppingCart from './pages/ShoppingCart'
import CartProvider from './components/CartProvider'

function App() {

  return (
    <CartProvider>
      <div className='app'>
        <Header />

        <Routes>
          <Route path='/models' element={<Models />} />
          <Route path='/' element={<Home />} />
          <Route path='/watches' element={<Watches />} />
          <Route path='/detail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<ShoppingCart />} />

          {/* INFORMATIONAL PAGES */}
          <Route path='/repairs' element={<Repairs />} />
          <Route path='/refurbishing' element={<Refurbishing />} />
          <Route path='/valuation' element={<Valuation />} />
          <Route path='/returns-policy' element={<ReturnsPolicy />} />
          <Route path='/deposit-policy' element={<DepositPolicy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/shipping-policy' element={<ShippingPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
