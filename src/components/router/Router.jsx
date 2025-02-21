import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../home/Home";
import OurMenuPage from "../OurMenuPage/OurMenuPage";
import OurshopPage from "../OurSop/OurshopPage";
import ContactPage from "../contactPage/ContactPage";
import LogIn from "../athentication/loginPage/LogIn";
import Register from "../athentication/registerPage/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenuPage></OurMenuPage>,
      },
      {
        path: "/ourshop",
        element: <OurshopPage></OurshopPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
