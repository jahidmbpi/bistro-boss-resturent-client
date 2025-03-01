import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const crurrentUserEmail = user?.email;
  console.log(crurrentUserEmail);
  const [saveUser, setSaveUser] = useState();
  console.log(saveUser);

  useEffect(() => {
    if (crurrentUserEmail) {
      axios
        .get(`http://localhost:5000/user?email=${crurrentUserEmail}`)
        .then((res) => {
          console.log(res.data);
          setSaveUser(res.data);
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [crurrentUserEmail]);

  const handelSinghOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="mx-auto w-full">
        <div className="fixed top-[20px] z-10 w-[1299px] bg-black/10 rounded-l-lg mx-auto">
          <div className="flex p-4 w-full justify-between items-center">
            <div className="text-white">
              <h2 className="text-xl font-bold">Bistro Boss</h2>
            </div>
            <div className="font-bold  text-white">
              <Link to="/" className="px-3">
                Home
              </Link>
              <Link to="/contact" className="px-3">
                Contact
              </Link>
              <Link to="/dashboard" className="px-3">
                Dashboard
              </Link>
              <Link to="/menu" className="px-3 uppercase">
                Our Menu
              </Link>
              <Link to="/ourshop" className="px-3">
                Our Shop
              </Link>

              {crurrentUserEmail ? (
                <Link onClick={handelSinghOut} className="px-3">
                  Sign Out
                </Link>
              ) : (
                <Link to="/login" className="px-3">
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
