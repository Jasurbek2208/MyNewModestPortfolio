import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from '../layouts/MainLayout'

// Components
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}
