import toast from "react-hot-toast";
import bg from "../../../assets/others/authentication.png";
import img1 from "../../../assets/others/authentication1.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import moment from "moment/moment";
import axios from "axios";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const { RegisterUSer } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelregister = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const name = from.name.value;
    const photo = from.photo.value;
    const creationTime = moment().format("MMMM D, YYYY h:mm A");
    const registerUser = { email, name, photo, creationTime };

    console.log(registerUser);

    console.log(email, password);
    RegisterUSer(email, password)
      .then((res) => {
        console.log(res.user);
        axios
          .post("http://localhost:5000/addUser", registerUser)
          .then((res) => {
            console.log(res.data);
            console.log(" user save in database");
          })
          .catch((error) => {
            console.log(error);
          });

        toast.success("singh In Successfully ");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistro boss || Singh Up</title>
      </Helmet>{" "}
      <div
        className="min-h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Parent div with right margin */}
        <div className="border bg-white rounded-lg shadow-lg mx-[100px]">
          {/* ai div a margin dite chai */}
          <div className="flex items-center justify-between w-full p-8 flex-row-reverse">
            <div className="w-full h-auto">
              <img src={img1} alt="Authentication" />
            </div>
            <div className="w-[536px] p-10 ">
              <h2 className="text-center text-3xl font-bold">register</h2>
              <form
                onSubmit={handelregister}
                className="w-full flex flex-col space-y-5"
              >
                <div className="w-full">
                  <label>name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div className="w-full">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div className="w-full">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div className="w-full">
                  <label>photo</label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Enter photo"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div className="w-full">
                  <label>Captcha</label>
                  <input
                    type="text"
                    name="captcha"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <div className="w-full">
                  <label>Reload Captcha</label>
                  <input
                    type="text"
                    name="reloadCaptcha"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <button className="btn bg-[#dbb884] hover:bg-green-700">
                  {" "}
                  register
                </button>
              </form>
              <p className="">
                already have an account..{" "}
                <Link to="/login">
                  <span className="text-blue-700 ml-2 font-bold">
                    please log in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
