import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import JewelryPage from '../pages/JewelryPage'
import WomenPage from '../pages/WomenPage'
import CollectionsPage from '../pages/CollectionsPage'
import ContactPage from '../pages/ContactPage'
import CartPage from '../pages/CartPage'
import AboutPage from '../pages/AboutPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<WomenPage />} />
      <Route path="/jewelry" element={<JewelryPage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default AppRoutes