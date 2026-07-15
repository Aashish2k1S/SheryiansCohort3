import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { MyShopContext } from "../context/MyShop";

const Navbar = () => {
    let { setToggleCart, cartItems } = useContext(MyShopContext);

    return (
        <nav className="bg-black text-white shadow-md rounded-full">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div
                    onClick={() => setToggleCart(false)}
                    className="text-2xl font-bold cursor-pointer"
                >
                    MyShop
                </div>

                <ul className="hidden md:flex items-center gap-8 text-lg">
                    <li
                        onClick={() => setToggleCart(false)}
                        className="cursor-pointer hover:text-blue-400 transition"
                    >
                        Home
                    </li>
                    <li className="cursor-pointer hover:text-blue-400 transition">
                        About
                    </li>
                    <li className="cursor-pointer hover:text-blue-400 transition">
                        Contact
                    </li>
                </ul>

                <button
                    onClick={() => setToggleCart(true)}
                    className={`bg-blue-600 hover:bg-blue-700 px-4 py-2 flex items-center justify-center gap-4 rounded-lg transition font-medium cursor-pointer ${cartItems.length && "notify"}`}
                >
                    <ShoppingCart /> Cart
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
