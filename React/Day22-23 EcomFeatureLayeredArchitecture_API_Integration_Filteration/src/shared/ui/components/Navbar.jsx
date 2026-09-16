import { Box, LogOut, ShoppingCart, Store } from "lucide-react";
import { NavLink } from "react-router";
import { useAuth } from "../../../features/auth/hooks/useAuth";

const Navbar = () => {
    const { logoutHandle } = useAuth();

    // Destructure isActive from the object passed by NavLinkH
    const navLinkClass = ({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-indigo-600 ${
            isActive ? "text-indigo-600 font-semibold" : "text-gray-600"
        }`;

    const iconLinkClass = ({ isActive }) =>
        `p-2 rounded-full transition-colors hover:bg-gray-100 ${
            isActive ? "text-indigo-600 bg-indigo-50" : "text-gray-600"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand Logo */}
                <NavLink to="/main" className="flex items-center gap-2" end>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                        <Store className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        Store
                    </span>
                </NavLink>

                {/* Action Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <NavLink to="/main/products" className={navLinkClass}>
                        Shop
                    </NavLink>
                    <NavLink to="/main/about" className={navLinkClass}>
                        About
                    </NavLink>
                    <NavLink
                        to="/main/cart"
                        aria-label="Shopping Cart"
                        className={iconLinkClass}
                    >
                        <div className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            {/* Optional badge indicator */}
                            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                                0
                            </span>
                        </div>
                    </NavLink>

                    <NavLink
                        to="/main/orders"
                        aria-label="Orders"
                        className={iconLinkClass}
                    >
                        <Box className="h-5 w-5" />
                    </NavLink>

                    <button
                        type="button"
                        onClick={logoutHandle}
                        aria-label="Logout"
                        className="p-2 rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600"
                    >
                        <LogOut className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
