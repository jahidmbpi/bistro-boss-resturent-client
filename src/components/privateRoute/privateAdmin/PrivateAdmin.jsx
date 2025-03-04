/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Users from "../../sheard/useUser/Users";

const PrivateAdmin = ({ children }) => {
  const { saveData } = Users();
  console.log(saveData);
  console.log(saveData?.role);

  // Checking if the role is not 'admin'
  if (saveData?.role !== "admin") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="p-5 rounded-lg shadow-lg text-center text-black">
          <h2 className="text-2xl font-bold text-center">Access Denied</h2>
          <p>
            This page is for admins only. You do not have the required
            permissions to view this content.
          </p>
          <Link to="/">
            <button className="btn btn-primary mt-6">Home</button>
          </Link>
        </div>
      </div>
    );
  }

  return children;
};

export default PrivateAdmin;
