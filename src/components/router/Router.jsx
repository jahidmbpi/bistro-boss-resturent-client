import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../home/Home";
import OurMenuPage from "../OurMenuPage/OurMenuPage";
import OurshopPage from "../OurSop/OurshopPage";
import ContactPage from "../contactPage/ContactPage";
import LogIn from "../athentication/loginPage/LogIn";
import Register from "../athentication/registerPage/Register";
import Deshbord from "../layout/deshbord/Deshbord";
import MyCard from "../deshbrdComponents/mycard/MyCard";
import UserHome from "../deshbrdComponents/userHome/UserHome";
import Bookings from "../deshbrdComponents/myBooking/Bookings";
import Rservation from "../deshbrdComponents/reservation/Rservation";
import PayHistrory from "../deshbrdComponents/paymentHistory/PayHistrory";
import Review from "../deshbrdComponents/addReview/Review";
import AdminHome from "../deshbrdComponents/adminComponents/adminHome/AdminHome";
import ManageItem from "../deshbrdComponents/adminComponents/manageItem/ManageItem";
import AddItem from "../deshbrdComponents/adminComponents/addItem/AddItem";
import AllUser from "../deshbrdComponents/adminComponents/allUser/AllUser";
import PrivateAdmin from "../privateRoute/privateAdmin/PrivateAdmin";
import ManageBooking from "../deshbrdComponents/adminComponents/manageBooking/ManageBooking";
import UpdateItem from "../deshbrdComponents/adminComponents/manageItem/UpdateItem";
import Payment from "../deshbrdComponents/payment/Payment";

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
  {
    path: "/dashboard", // ✅ Absolute path
    element: <Deshbord />, // ✅ Self-closing tag
    children: [
      {
        index: true,
        element: <MyCard />,
      },
      {
        path: "userhome", // ✅ Correct relative path
        element: <UserHome />,
      },
      {
        path: "booking",
        element: <Bookings />,
      },
      {
        path: "reservation",
        element: <Rservation />,
      },
      {
        path: "paymenthistory",
        element: <PayHistrory />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "adminhome",
        element: (
          <PrivateAdmin>
            <AdminHome></AdminHome>
          </PrivateAdmin>
        ),
      },
      {
        path: "manageitemadmin",
        element: (
          <PrivateAdmin>
            <ManageItem></ManageItem>
          </PrivateAdmin>
        ),
      },
      {
        path: "additemadmin",
        element: (
          <PrivateAdmin>
            <AddItem></AddItem>
          </PrivateAdmin>
        ),
      },
      {
        path: "managebookingadmin",
        element: (
          <PrivateAdmin>
            <ManageBooking></ManageBooking>
          </PrivateAdmin>
        ),
      },
      {
        path: "alluseradmin",
        element: (
          <PrivateAdmin>
            <AllUser></AllUser>
          </PrivateAdmin>
        ),
      },
      {
        path: "update/:id",
        element: <UpdateItem></UpdateItem>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
