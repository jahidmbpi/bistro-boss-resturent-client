import { useContext } from "react";
import bg from "../../../assets/others/authentication.png";
import img1 from "../../../assets/others/authentication1.png";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
  // const [captchaInput, setCaptchaInput] = useState("");
  const { logInUser } = useContext(AuthContext);

  // Handle form submission
  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        console.log("User Logged In Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // if (validateCaptcha(captchaInput)) {
    //   alert("Captcha Matched");
    // } else {
    //   alert("Captcha Does Not Match");
    // }
  };
  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  // const handleCaptchaChange = (e) => {
  //   setCaptchaInput(e.target.value);
  // };

  return (
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
              onSubmit={handelLogin}
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
                {/* <LoadCanvasTemplate /> */}
              </div>
              <div className="w-full">
                <label>Type Captcha</label>
                <input
                  type="text"
                  id="user_captcha_input"
                  // value={captchaInput}
                  // onChange={handleCaptchaChange}
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
    </div>
  );
};

export default LogIn;
