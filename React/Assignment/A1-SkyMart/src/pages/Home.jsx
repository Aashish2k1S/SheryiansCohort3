import { ArrowRight, Package, Star, Tag, TrendingUp } from "lucide-react";


const Home = () => {
  return (
      <main>
        <section className="relative w-full rounded-4xl border border-zinc-800 bg-[#131313] overflow-hidden p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]"></div>

          <div className="relative z-10 max-w-xl">
            <p className="text-[#ccff00] font-semibold text-sm tracking-widest uppercase mb-4">
              Good Morning 👋
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
              Welcome back, <br />
              <span className="text-[#ccff00]">Aashish!</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8 max-w-md leading-relaxed">
              Discover today's picks — hand-curated products across electronics, fashion, and more.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 py-3 rounded-full transition">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-zinc-700 hover:border-zinc-500 text-zinc-300 px-6 py-3 rounded-full transition font-medium text-sm">
                View All Products
              </button>
            </div>
          </div>

          {/* Right Side Stats Cards */}
          <div className="relative z-10 flex flex-col gap-4">
            <div className="bg-[#1e2612] border border-[#2c3b17] rounded-2xl p-6 w-52 flex flex-col items-center justify-center shadow-lg">
              <h2 className="text-[#ccff00] text-4xl font-extrabold mb-1">20+</h2>
              <p className="text-zinc-400 text-xs font-medium">Products Available</p>
            </div>

            <div className="bg-transparent border border-zinc-700 rounded-2xl p-6 w-52 flex flex-col items-center justify-center backdrop-blur-sm shadow-lg">
              <h2 className="text-white text-3xl font-extrabold mb-2 tracking-wide">Free</h2>
              <p className="text-zinc-400 text-xs font-medium">Delivery on ₹999+</p>
            </div>
          </div>
        </section>

        {/* Info Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-[#131313] border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="bg-[#1a2e10] p-3 rounded-xl flex-shrink-0">
              <Package className="w-5 h-5 text-[#ccff00]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-0.5">0</h3>
              <p className="text-sm font-medium text-zinc-400 leading-tight">Cart Items</p>
              <p className="text-xs text-zinc-600 mt-1">In your bag</p>
            </div>
          </div>

          <div className="bg-[#131313] border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="bg-[#101b33] p-3 rounded-xl flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-0.5">$0.00</h3>
              <p className="text-sm font-medium text-zinc-400 leading-tight">Cart Value</p>
              <p className="text-xs text-zinc-600 mt-1">Ready to checkout</p>
            </div>
          </div>

          <div className="bg-[#131313] border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="bg-[#33260c] p-3 rounded-xl flex-shrink-0">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-0.5">5</h3>
              <p className="text-sm font-medium text-zinc-400 leading-tight">Top Products</p>
              <p className="text-xs text-zinc-600 mt-1">Highly rated</p>
            </div>
          </div>

          <div className="bg-[#131313] border border-zinc-800 rounded-2xl p-6 flex items-center gap-4">
            <div className="bg-[#1f1033] p-3 rounded-xl flex-shrink-0">
              <Tag className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-0.5">6</h3>
              <p className="text-sm font-medium text-zinc-400 leading-tight">Categories</p>
              <p className="text-xs text-zinc-600 mt-1">To explore</p>
            </div>
          </div>
        </section>
      </main>
  );
};

export default Home;