import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashbaordLayout from "../Layout/DashbaordLayout";
import AddItem from "../Pages/Dashboard/AddItem";
import AllItem from "../Pages/Dashboard/AllItem";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/Dashboard/AllUser";
import EditUser from "../Components/Dashboard/EditUser";
import EditProduct from "../Components/Dashboard/EditProduct";
import ProductDetailsCard from "../Components/ProductDetailsCard";



   
const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<PrivateRoute><About/></PrivateRoute>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/details/:id',
                element:<ProductDetailsCard/>,
                loader: ({params})=> fetch(`https://assinment-server-alpha.vercel.app/product/${params.id}`)
            },
            
        ],

        
    },

    {
        path:'dashboard',
        element:<PrivateRoute><DashbaordLayout/></PrivateRoute>,
        children:[
            {
                path:'dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'addItem',
                element:<AddItem/>
            },
            {
                path:'allItem',
                element:<AllItem/>,
                loader:()=> fetch('https://assinment-server-alpha.vercel.app/product')
            },
            {
                path:'allUser',
                element:<AllUser></AllUser>,
                
            },
            {
                path:'allUser/edituser/:id',
                element:<EditUser/>,
                loader: ({params})=> fetch(`https://assinment-server-alpha.vercel.app/${params.id}`)
            },
            {
                path:'allItem/editProduct/:id',
                element:<EditProduct></EditProduct>,
                loader: ({params})=> fetch(`https://assinment-server-alpha.vercel.app/product/${params.id}`)
                
            },
        ]
    },

    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    },

])





export default router;