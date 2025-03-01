import { useContext, useEffect, useState } from "react";
import bg from "../../../assets/others/authentication.png";
import img1 from "../../../assets/others/authentication1.png";
import toast, { Toaster } from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const [captchaInput, setCaptchaInput] = useState("");
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("Navigating to:", from);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("User Input:", email, password);

    if (validateCaptcha(captchaInput)) {
      alert("Captcha Matched");
      logInUser(email, password)
        .then((res) => {
          console.log("User Logged In Successfully", res.user);
          toast.success("Sign In Successfully!");
          setTimeout(() => {
            navigate(from, { replace: true }); // ✅ Ensure it's a valid path
          }, 1500);
        })
        .catch((error) => {
          console.error("Login Error:", error.message);
        });
    } else {
      alert("Captcha Does Not Match");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign In</title>
      </Helmet>
      <div
        className="min-h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="border bg-white rounded-lg shadow-lg mx-[100px]">
          <div className="flex items-center justify-between w-full p-8">
            <div className="w-full h-auto">
              <img src={img1} alt="Authentication" />
            </div>
            <div className="w-[536px] p-10">
              <h2 className="text-center text-3xl font-bold">Log In</h2>
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col space-y-5"
              >
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
                  <label>Captcha</label>
                  <LoadCanvasTemplate />
                </div>
                <div className="w-full">
                  <label>Type Captcha</label>
                  <input
                    type="text"
                    id="user_captcha_input"
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-[#dbb884] hover:bg-green-700"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default LogIn;
