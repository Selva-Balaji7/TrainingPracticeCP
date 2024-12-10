import {createBrowserRouter} from "react-router-dom";
import LoginComp from "../Layout/LoginComp";
import MainDashBoardComp from "../Layout/MainDashBoarComp";
import MyFavColorComp from "../component/MyFavColorComp";
import FormValComp from "../component/FormValComp";
import ClassComp from "../component/ClassComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import FuncComp from "../component/FuncComp";
import UseStateHooksComp from "../Hooks/UseStateHooks";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import ProductDashComp from "../Crud/ProductDashComp";
import ProtectedRouting from "./ProtectedRouting";



const routing = createBrowserRouter([
    
    {path:"",element:<LoginComp/>},

    {path:"loginComp",element:<LoginComp/>},

    {path:"maindashboard",element:<ProtectedRouting Component={MainDashBoardComp}/>, children:[

       
        {path:"myfavcolorcomp",element:<MyFavColorComp newcolor="green"/>},

        {path:"formvalcomp", element:<FormValComp/>},
    // 3.parameterize routing
    {path:"classcomp/:id",element:<ClassComp/>},

    {path:"hooks",element:<ReactHooksComp/>,children:[
        {path:"useeffect",element:<UseEffectHooksComp/>},
        {path:"usestate",element:<UseStateHooksComp/>},
    ]},
    {path:"funccomp",element:<FuncComp/>},
    {path:"ProductDashComp",element:<ProductDashComp/>},

    ]},
    

    // 5.wild card routing
    {path:"*",element:<PageNotFoundComp/>}
    
]);

export default routing;