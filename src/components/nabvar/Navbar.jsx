import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import { TiShoppingCart } from "react-icons/ti";
import UseCard from "../sheard/useCard/UseCard";
import UseAdmin from "../hook/UseAdmin";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const crurrentUserEmail = user?.email;
  console.log(crurrentUserEmail);

  const [data] = UseCard();
  const handelSinghOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { isAdmin } = UseAdmin();
  console.log(isAdmin);
  return (
    <div>
      <nav className="mx-auto w-full">
        <div className="fixed top-[20px] z-10 w-[1499px] bg-black/10 rounded-l-lg mx-auto">
          <div className="flex p-4 w-full justify-between items-center">
            <div className="text-white">
              <h2 className="text-xl font-bold">Bistro Boss</h2>
            </div>
            <div className="font-bold flex text-white">
              <Link to="/" className="px-3">
                Home
              </Link>
              <Link to="/contact" className="px-3">
                Contact
              </Link>
              {user && (
                <Link
                  to={isAdmin ? "/dashboard/adminhome" : "/dashboard/userhome"}
                  className="px-3"
                >
                  Dashboard
                </Link>
              )}

              <Link to="/menu" className="px-3 uppercase">
                Our Menu
              </Link>

              <Link to="/ourshop" className="px-3">
                Our Shop
              </Link>

              <Link
                to="/dashboard/mycard"
                className="flex items-center relative"
              >
                <TiShoppingCart className="text-3xl" />
                <div className="badge badge-sm badge-secondary absolute -top-2 -right-5">
                  +{data?.length}
                </div>
              </Link>

              {crurrentUserEmail ? (
                <Link onClick={handelSinghOut} className="px-3">
                  Sign Out
                </Link>
              ) : (
                <Link to="/login" className="pl-3">
                  logIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
