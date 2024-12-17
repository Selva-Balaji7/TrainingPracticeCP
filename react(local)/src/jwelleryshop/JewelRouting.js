import { createBrowserRouter } from 'react-router-dom';
import JewelDashBoardComp from '../jwelleryshop/JewelDashBoardComp'
import HomeComp from '../jwelleryshop/HomeComp';
import AboutComp from '../jwelleryshop/AboutComp';
import ContactComp from '../jwelleryshop/ContactComp';
import ProductsComp from "../jwelleryshop/ProductsComp";
import JewelPageNotFound from '../jwelleryshop/JewelPageNotFound';
import HeaderComp from './HeaderComp';
import BanglesComp from '../jwelleryshop/jewel-images/BanglesComp';
import DummyComp from './DummyComp';



const router = createBrowserRouter([
  {path:" ",element:<HeaderComp/>},
  {path:'/',element:<JewelDashBoardComp/>,
    children: [
      { path: 'Home', element: <HomeComp /> },
      { path: 'about', element: <AboutComp /> },
      //  {path:'chains',element:<ChainComp/>},
       {path:'necklace',element:<ProductsComp/>},
      {path:'bangles',element:<BanglesComp/>},
      
      // {path:'rings',element:<ChainComp/>}
      { path:'contact', element: <ContactComp /> },
    ]},
    {path:"*", element:<JewelPageNotFound />},
]
)

export default router;