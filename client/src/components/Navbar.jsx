import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full bg-blue-600 text-white shadow-lg p-6 w-48 flex flex-col items-start">
      <h1 className="text-xl font-bold mb-6">Navigation</h1>
      <div className="flex flex-col space-y-4 w-full">
        <Link to="/users" className="text-lg font-semibold hover:bg-blue-700 p-2 w-full text-left">
          Users
        </Link>
        <Link to="/popular" className="text-lg font-semibold hover:bg-blue-700 p-2 w-full text-left">
          Popular Posts
        </Link>
        <Link to="/latest" className="text-lg font-semibold hover:bg-blue-700 p-2 w-full text-left">
          Latest Posts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
