import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { myAxios } from '../service/axios';
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

// Layout
import MainLayout from '../layouts/MainLayout'

// Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
// Admin pages
import AddPost from '../pages/admin/AddPost';
import Login from '../pages/auth/Login';

export default function Router() {
  const [isOnline, setIsOnline] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

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

  function handleAuth(param) {
    setIsAuth(param);
  }

  useEffect(() => {
    handleOnline(true);

    async function checkUser() {
      try {
        const response = await myAxios.get('/auth/userme')

        if (response.status === 200) {
          handleAuth(true)
        } else {
          handleAuth(false)
          Cookies.remove('token')
        }
      } catch {
        handleAuth(false)
        Cookies.remove('token')
      }
    }
    checkUser();

    window.addEventListener("online", () => handleOnline(false));
    window.addEventListener("offline", () => handleOnline(false));
    return () => {
      window.removeEventListener("online", () => handleOnline(false));
      window.removeEventListener("offline", () => handleOnline(false));
    };
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout isAuth={isAuth} handleAuth={handleAuth} />}>
        <Route path="home" element={<Home />} />
        <Route path="portfolios" element={<Portfolio />} />
        {isAuth ?
          <Route path="add-post" element={<AddPost />} />
          :
          <>
            <Route path="login" element={<Login handleAuth={handleAuth} />} />
            <Route path="contact" element={<Contact />} />
          </>
        }
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  )
}