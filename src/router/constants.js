import { Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/auth/Login'
import Portfolio from '../pages/Portfolio'
import AddPost from '../pages/admin/AddPost'

const userRoutes = [
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'portfolios',
        element: <Portfolio />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'contact',
        element: <Contact />
    },
    {
        path: '*',
        element: <Navigate to="/home" />
    }
];

const adminRoutes = [
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'portfolios',
        element: <Portfolio />
    },
    {
        path: 'add-post',
        element: <AddPost />
    },
    {
        path: '*',
        element: <Navigate to="/home" />
    }
];

export { userRoutes, adminRoutes };