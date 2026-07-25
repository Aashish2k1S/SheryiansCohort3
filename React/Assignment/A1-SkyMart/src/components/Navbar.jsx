import { LogOut, ShoppingCart, Zap } from "lucide-react"
import { NavLink } from "react-router"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
                <div className="bg-lime-400 rounded-xl p-2">
                    <Zap size={24} className="text-black fill-black" />
                </div>
                <span className="text-xl font-bold tracking-wide">SkyMart</span>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-400' : 'text-zinc-400 hover:text-zinc-200')} end>Home</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-400' : 'text-zinc-400 hover:text-zinc-200')}>Shop</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-lime-400' : 'text-zinc-400 hover:text-zinc-200')}>About</NavLink>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 bg-[#18181b] border border-zinc-800 rounded-full px-4 py-1.5">
                    <div className="bg-[#ccff00] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                        A
                    </div>
                    <span className="text-sm text-zinc-200">Aashish Gupta</span>
                </div>
                <button className="p-2 bg-[#18181b] border border-zinc-800 rounded-full hover:bg-zinc-800 transition">
                    <ShoppingCart className="w-4 h-4 text-zinc-300" />
                </button>
                <button className="p-2 bg-[#18181b] border border-zinc-800 rounded-full hover:bg-zinc-800 transition">
                    <LogOut className="w-4 h-4 text-zinc-300" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar