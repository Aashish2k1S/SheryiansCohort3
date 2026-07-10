import { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { MyShop } from "../context/MyShopContext";

const Navbar = () => {
  const { setToggle, users } = useContext(MyShop);

  return (
    <nav className="sticky top-0 m-6 z-50 bg-gray-800 shadow-lg rounded-lg">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <h1
          className="text-2xl font-bold text-indigo-400 cursor-pointer"
          onClick={() => setToggle(false)}
        >
          MyShop
        </h1>

        {/* Cart Button */}
        <button
          onClick={() => setToggle(true)}
          className="relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition cursor-pointer"
        >
          <ShoppingCart size={20} />

          <span>Cart</span>

          {/* Badge */}
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            {users.length}
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;