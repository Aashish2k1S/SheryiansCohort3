const ProductCard = ({ product }) => {
    // Calculate the original price before the discount to show savings
    const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

    return (
        <div className="flex flex-col justify-between w-full max-w-sm bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">

            {/* Image Section */}
            <div className="relative flex items-center justify-center w-full h-56 p-4 bg-gray-50">
                <img
                    // Fallback to a placeholder if your JSON has "..." instead of a real URL
                    src={product.thumbnail !== "..." ? product.thumbnail : "https://via.placeholder.com/400x300?text=No+Image"}
                    alt={product.title}
                    className="object-contain w-full h-full mix-blend-multiply"
                />

                {/* Discount Badge */}
                {product.discountPercentage > 0 && (
                    <span className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded top-3 left-3">
                        -{Math.round(product.discountPercentage)}%
                    </span>
                )}

                {/* Stock Status Badge */}
                {product.availabilityStatus === "Low Stock" && (
                    <span className="absolute px-2 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded top-3 right-3">
                        Low Stock
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col grow p-4">
                <span className="mb-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    {product.brand}
                </span>

                <h3 className="mb-2 text-lg font-bold text-gray-800 line-clamp-1" title={product.title}>
                    {product.title}
                </h3>

                <p className="grow mb-4 text-sm text-gray-600 line-clamp-2" title={product.description}>
                    {product.description}
                </p>

                {/* Price & Rating */}
                <div className="flex items-center justify-between mt-auto">
                    <div>
                        <span className="text-xl font-extrabold text-gray-900">${product.price}</span>
                        <span className="ml-2 text-sm text-gray-400 line-through">${originalPrice}</span>
                    </div>

                    <div className="flex items-center text-sm font-medium text-gray-700">
                        {/* Star Icon */}
                        <svg className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating} <span className="ml-1 text-xs text-gray-400">({product.reviews.length})</span>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <div className="px-4 pb-4">
                <button
                    className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    disabled={product.stock === 0}
                >
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;