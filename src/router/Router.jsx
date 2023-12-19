import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/Home/SingleProduct";
import ProductsDisplay from "../pages/Home/ProductsDisplay";
import Login from "../pages/Home/Login";
import Cart from "../pages/Home/Cart/Cart";
import Signup from "../pages/Home/Signup";

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App/>,
//       children: [
//         {
//             path: "/",
//             element:<Home/>
//         }, 
       
//         {
//           path: "/shop/:id",
//           element:<SingleProduct/>
//         },
//         {
//           path: "/women",
//           element:<ProductsDisplay category="women"/>
//         },
//         {
//           path: "/men",
//           element:<ProductsDisplay category="men"/>
//         },
//         {
//           path: "/newcollection",
//           element:<ProductsDisplay />
//         },
//         {
//           path: "/kids",
//           element:<ProductsDisplay category="kid"/>
//         },
//         {
//           path: "/menwomen",
//           element:<ProductsDisplay category1="men" category2="women"/>
//         },
//         {
//           path: "/signup",
//           element:<Signup/>
//         },
//         {
//           path: "/login",
//           element:<Login/>
//         },
//         {
//           path: "/cart",
//           element:<Cart/>
//         }
//       ]
//     },
//   ]);
  

// export default router