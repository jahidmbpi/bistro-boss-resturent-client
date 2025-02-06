import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <Link to="/menu" className="px-3">
              Our Menu
            </Link>
            <Link to="/shop" className="px-3">
              Our Shop
            </Link>
            <Link to="/signout" className="px-3">
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
