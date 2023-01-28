import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {path:'/', element: <Main></Main>,
children:[
    {path:'/', element:<Home></Home>},
    {path:'/login', element:<Login></Login>},
    {path:'/signup', element:<Signup></Signup>},
    {path:'/bill', element:<Header></Header>},
    {path:'/dashboard', element:<Dashboard></Dashboard>},

]

}

])