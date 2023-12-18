import {createBrowserRouter} from "react-router-dom"
import Home from "../page/Home"
import Login from "../page/Login"
import SIngUp from "../page/SIngUp"
import Users from "../page/Users"
import NotFound from "../page/NotFound"
import Layout from "../layout/Layout"
export const router = createBrowserRouter([

    {
        element:<Layout/>,
        children:[
            {
            path:'/',
            element:<Home/>
        },
        {
            path:'/Login',
            element:<Login/>
        }
        ,{
            path:'/register',
            element:<SIngUp/>
        },
        {
            path:'/users',
            element:<Users/>
        },
        {
            path:'*',
            element:<NotFound/>
        }]
    }
    

])