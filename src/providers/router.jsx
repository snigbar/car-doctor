import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import SignUP from "../pages/Authentication/SignUP";
import Services from "../layouts/Services";
import ServicesPage from '../pages/ServicesPage/ServicesPage'



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUP></SignUP>
        }
      ]
    },
    {
      path: "/services",
      element: <Services></Services>,
      children: [
        {
          path:'/services/:id',
          element:<ServicesPage></ServicesPage>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;