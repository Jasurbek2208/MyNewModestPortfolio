import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

// Layout
import MainLayout from '../layouts/MainLayout'

// Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
// Admin pages
import AddPost from '../pages/admin/AddPost';

export default function Router() {
  const [isOnline, setIsOnline] = useState(true);

  function handleOnline(isFirstCall = false) {
    if (navigator.onLine) {
      if (isOnline && !isFirstCall) {
        toast.success("Internet connected!");
      }
      setIsOnline(true);
    } else {
      setIsOnline(false);
      toast.error("No internet connection!");
    }
  }

  useEffect(() => {
    handleOnline(true);

    window.addEventListener("online", () => handleOnline(false));
    window.addEventListener("offline", () => handleOnline(false));
    return () => {
      window.removeEventListener("online", () => handleOnline(false));
      window.removeEventListener("offline", () => handleOnline(false));
    };
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="portfolios" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}
