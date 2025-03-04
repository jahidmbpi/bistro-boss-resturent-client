import {
  FaBook,
  FaContao,
  FaHome,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import UseCard from "../../sheard/useCard/UseCard";
import Users from "../../sheard/useUser/Users";

const Deshbord = () => {
  const [data] = UseCard();
  const { saveData } = Users();
  console.log(saveData);

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <div className=" text-center items-center">
          <h2 className="text-2xl font-bold uppercase">Bistro Booss</h2>
          <p className="text-xl font-bold uppercase">resturent</p>
        </div>
        <ul className="menu p-4">
          {saveData?.role === "admin" ? (
            <>
              {" "}
              <li className="text-black text-xl">
                <NavLink to="/dashboard/adminhome">
                  <FaHome /> admin Home
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/manageitemadmin">
                  <FaUtensils />
                  manage item
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/additemadmin">
                  <FaList></FaList>
                  add items
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/managebookingadmin">
                  <FaBook />
                  manage booking
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/alluseradmin">
                  <FaUsers />
                  all user
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="text-black text-xl">
                <NavLink to="/dashboard">
                  <TiShoppingCart className="text-xl" />
                  my card({data?.length})
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/userhome">
                  <FaHome /> user Home
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/reservation">
                  <FaCalendar /> reservation
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/review">
                  <VscPreview />
                  add review
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/booking">
                  <TbBrandBooking />
                  my booking
                </NavLink>
              </li>
              <li className="text-black text-xl">
                <NavLink to="/dashboard/paymenthistory">
                  <RiSecurePaymentFill />
                  pay Histroy
                </NavLink>
              </li>
            </>
          )}

          {/* devider.............. */}
          <div className="divider divider-warning"></div>
          <li className="text-black text-xl">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className="text-black text-xl">
            <NavLink to="/ourshop">
              <TiShoppingCart />
              our shop
            </NavLink>
          </li>
          <li className="text-black text-xl">
            <NavLink to="/contact">
              <FaContao />
              constct
            </NavLink>
          </li>
          <li className="text-black text-xl">
            <NavLink to="/contact">
              <FaList />
              our menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshbord;
