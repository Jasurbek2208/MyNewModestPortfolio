import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

// Layout
import MainLayout from '../layouts/MainLayout'

// Components
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

export default function Router() {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline() {
    if (navigator.onLine) {
      if (isOnline) {
        toast.success("Internet connected!");
      }
      setIsOnline(true);
    } else {
      setIsOnline(false);
      toast.error("No internet connection!");
    }
    console.log(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOnline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOnline);
    };
  }, []);


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
