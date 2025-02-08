import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../home/Home";
import OurMenuPage from "../OurMenuPage/OurMenuPage";

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
    ],
  },
]);
