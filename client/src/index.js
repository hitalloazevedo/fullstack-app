import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home';
import Login from './routes/Login';
import Dashbord from './routes/Dashboard'
import Logout from './routes/Logout';
import Edit from './routes/Edit';
import Cadastrar from './routes/Cadastrar'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/dashboard',
        element: <Dashbord/>
    },
    {
        path: '/logout',
        element: <Logout/>
    },
    {
        path: '/editar',
        element: <Edit/>
    },
    {
        path: '/cadastrar',
        element: <Cadastrar/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
);
