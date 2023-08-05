import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useRoutes } from "react-router-dom";
import { myAxios } from '../service/axios';
import toast from "react-hot-toast";
import Cookies from "js-cookie";

// Layout
import MainLayout from '../layouts/MainLayout'
// Loader
import Loader from '../components/loader/Loader';

// Routes
import { userRoutes, adminRoutes } from './constants';

export default function Router() {
  const dispatch = useDispatch();

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


  const element = useRoutes(isAuth ? adminRoutes : userRoutes);
  return isLoading ? <Loader /> : <MainLayout>{element}</MainLayout>
}