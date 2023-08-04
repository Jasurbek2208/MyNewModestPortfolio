import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { myAxios } from '../service/axios';
import toast from "react-hot-toast";
import Cookies from "js-cookie";

// Layout
import MainLayout from '../layouts/MainLayout'
// Loader
import Loader from '../components/loader/Loader';

// Pages - lazy
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Login from '../pages/auth/Login'
// Admin pages - lazy
import AddPost from '../pages/admin/AddPost'

export default function Router() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const [isOnline, setIsOnline] = useState(true);
  const { isAuth, isLoading } = useSelector(store => store);

  // Checking device internet connection
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

  // Device internet connection watcher
  useEffect(() => {
    handleOnline(true);

    window.addEventListener("online", () => handleOnline(false));
    window.addEventListener("offline", () => handleOnline(false));
    return () => {
      window.removeEventListener("online", () => handleOnline(false));
      window.removeEventListener("offline", () => handleOnline(false));
    };
  }, []);

  // Checking user is admin on device internet connected
  useEffect(() => {
    if (!isOnline) return;

    async function checkUser() {
      dispatch({ type: 'SWITCH_LOADING', isLoading: true })

      try {
        if (!Cookies.get("token")) {
          dispatch({ type: 'LOGOUT' })
          return
        }

        const response = await myAxios.get('/auth/userme')

        if (response.status === 200) {
          dispatch({ type: 'LOGIN' })
        } else {
          dispatch({ type: 'LOGOUT' })
        }
      } catch {
        dispatch({ type: 'LOGOUT' })
      } finally {
        dispatch({ type: 'SWITCH_LOADING', isLoading: false })
      }
    }
    checkUser();
  }, [isOnline])

  // Navigate to latest page in first render
  useEffect(() => {
    navigate(location === '/' ? '/home' : location);
  }, [])

  return (
    isLoading
      ?
      <Loader />
      :
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="portfolios" element={<Portfolio />} />
          {isAuth ?
            <Route path="add-post" element={<AddPost />} />
            :
            <>
              <Route path="login" element={<Login />} />
              <Route path="contact" element={<Contact />} />
            </>
          }
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
  )
}