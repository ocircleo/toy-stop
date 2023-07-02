import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './compo/pages/error/Error.jsx';
import Provider from './compo/shared/provider/Provider.jsx';
import Home from './compo/pages/home/Home.jsx';
import Login from './compo/pages/login/Login.jsx';
import Register from './compo/pages/register/Register.jsx';
import Alltoys from './compo/pages/allToys/Alltoys.jsx';
import AddToy from './compo/private/createData/AddToy.jsx';
import PFAddToys from './compo/private/PrivateRoutes/PFAddToys.jsx';
import PMytoys from './compo/private/PrivateRoutes/PMytoys.jsx';
import PersonalToys from './compo/private/mytoys/PersonalToys.jsx';
import UpdateToys from './compo/private/mytoys/UpdateToys.jsx';
import Admin from './compo/private/Admin/Admin.jsx';
import AdminPrivate from './compo/private/Admin/AdminPrivate.jsx';
import AdminLogin from './compo/private/Admin/AdminLogin.jsx';
import PShowdetaill from './compo/private/PrivateRoutes/PShowdetaill.jsx';
import Detaill from './compo/private/Detaill/Detaill.jsx';
import Spinner from './compo/shared/spinner/Spinner.jsx';
import Blog from './compo/pages/blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      }, {
        path: 'alltoys',
        element: <Alltoys></Alltoys>
      }, {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }, {
        path: 'addtoy',
        element: <PFAddToys><AddToy></AddToy></PFAddToys>
      }, {
        path: 'mytoys',
        element: <PMytoys><PersonalToys></PersonalToys></PMytoys>
      }, {
        path: 'update/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/${params.id}`)
      }, {
        path: 'blog',
        element:<Blog></Blog>
      }, {
        path: 'admin',
        element: <AdminPrivate><Admin></Admin></AdminPrivate>
      }, {
        path: 'adminlogin',
        element: <AdminLogin></AdminLogin>
      }, {
        path: 'detaill/:id',
        element: <PShowdetaill><Detaill></Detaill></PShowdetaill>,
        loader:({params}) => fetch(`https://assignment-11-server-sigma-green.vercel.app/toys/${params.id}`)
      }, {
        path: 'spinner',
        element:<Spinner></Spinner>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider><RouterProvider router={router} /></Provider>
  </React.StrictMode>,
)
