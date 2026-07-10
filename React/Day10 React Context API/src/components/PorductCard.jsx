const PorductCard = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="bg-white h-60 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-3">

        <h2 className="text-lg font-semibold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-400 text-sm line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-400">
            ${product.price}
          </span>

          <span className="bg-[rgba(255,255,0,0.2)] text-yellow-400 text-sm px-2 py-1 rounded font-semibold">
            ⭐ {product.rating.rate}
          </span>
        </div>

        <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-semibold transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default PorductCard;