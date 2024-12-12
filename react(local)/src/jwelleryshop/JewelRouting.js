import { createBrowserRouter } from 'react-router-dom';
import JewelDashBoardComp from '../jwelleryshop/JewelDashBoardComp'
import HomeComp from '../jwelleryshop/HomeComp';
import AboutComp from '../jwelleryshop/AboutComp';
import MyImagesComp from './MyImagesComp';
import ContactComp from '../jwelleryshop/ContactComp';
import ProductsComp from "./MyImagesComp";
import JewelPageNotFound from '../jwelleryshop/JewelPageNotFound';

const router = createBrowserRouter([
 {path:"home",element:<HomeComp/>},
  {
    path: '/',element:<JewelDashBoardComp/>,
    children: [

      {path:"*", element:<JewelPageNotFound />},

      { path: 'Home', element: <HomeComp /> },
      { path: 'about', element: <AboutComp /> },
      {path:'images',element:<MyImagesComp/>},
      { path: 'products', element: <ProductsComp /> },
      { path: 'contact', element: <ContactComp /> },
      

    ],
  },
]);

export default router;