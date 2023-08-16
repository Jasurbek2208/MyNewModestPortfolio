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

const lastUpdatedTimeName = "$last$Updated$Time$Portfolios$";

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

  // Checking Last Updated Time portfolios
  async function checkingLastUpdatedTime(lastTime) {
    try {
      const res = await myAxios.post("/checking-last-updated-time", { lastTime })

      dispatch({ type: 'SWITCH_LAST_UPDATED_TIME', lastTime: res.data.newUpdate })
      localStorage.setItem(lastUpdatedTimeName, res.data.id)
    } finally {
      dispatch({ type: 'SWITCH_LOADING', isLoading: false })
    }
  }

  // Device internet connection watcher
  useEffect(() => {
    if(navigator.onLine) {
      const lastTime = localStorage.getItem(lastUpdatedTimeName);
      checkingLastUpdatedTime(lastTime);
    }

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
        // dispatch({ type: 'SWITCH_LOADING', isLoading: false })
      }
    }
    checkUser();
  }, [isOnline])


  const element = useRoutes(isAuth ? adminRoutes : userRoutes);
  return isLoading ? <Loader /> : <MainLayout>{element}</MainLayout>
}