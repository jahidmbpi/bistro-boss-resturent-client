import bg from "../../../assets/others/authentication.png";
import img1 from "../../../assets/others/authentication1.png";

const LogIn = () => {
  return (
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
        <div className="flex items-center justify-between w-full p-8">
          <div className="w-full h-auto">
            <img src={img1} alt="Authentication" />
          </div>
          <div className="w-[536px] p-10 ">
            <h2 className="text-center text-3xl font-bold">Log In</h2>
            <div className="w-full flex flex-col space-y-5">
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
                log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
