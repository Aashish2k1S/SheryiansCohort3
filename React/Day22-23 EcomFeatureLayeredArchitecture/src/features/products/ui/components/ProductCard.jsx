import { useState } from "react";
import { Star, ShoppingCart, Heart, Check, Eye } from "lucide-react";
import { Link } from "react-router";

const ProductCard = ({ product, onAddToCart }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    if (!product) return null;

    const {
        id,
        title = "Untitled Product",
        description = "",
        brand = "Generic",
        price = 0,
        discountPercentage = 0,
        rating = 0,
        stock = 0,
        availabilityStatus = "In Stock",
        thumbnail = "",
        tags = [],
    } = product;

    // Calculate original price before discount
    const originalPrice =
        discountPercentage > 0
            ? (price / (1 - discountPercentage / 100)).toFixed(2)
            : null;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsAdded(true);
        if (onAddToCart) onAddToCart(product);

        // Reset button icon after 1.5 seconds
        setTimeout(() => {
            setIsAdded(false);
        }, 1500);
    };

    const handleToggleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishlisted((prev) => !prev);
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Image Container with Badges & Hover Actions */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Top Left Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5 z-10">
                    {discountPercentage > 0 && (
                        <span className="rounded-md bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                            -{Math.round(discountPercentage)}%
                        </span>
                    )}
                    {availabilityStatus && (
                        <span
                            className={`rounded-md px-2.5 py-1 text-xs font-medium shadow-sm ${
                                stock > 0
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                        >
                            {availabilityStatus}
                        </span>
                    )}
                </div>

                {/* Top Right Wishlist Action */}
                <button
                    type="button"
                    onClick={handleToggleWishlist}
                    aria-label={
                        isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                    }
                    className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-sm transition-colors shadow-sm ${
                        isWishlisted
                            ? "bg-red-50 text-red-500"
                            : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
                    }`}
                >
                    <Heart
                        className={`h-4 w-4 ${isWishlisted ? "fill-red-500" : ""}`}
                    />
                </button>

                {/* Quick Details Overlay Link */}
                {id && (
                    <Link
                        to={`/main/products/${id}`}
                        aria-label={`View details for ${title}`}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                        <span className="flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
                            <Eye className="h-3.5 w-3.5" /> Quick View
                        </span>
                    </Link>
                )}
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col p-4">
                {/* Brand & Category Tags */}
                <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-gray-500">
                    <span className="uppercase tracking-wider text-indigo-600 font-semibold">
                        {brand}
                    </span>
                    <div className="flex gap-1">
                        {tags.slice(0, 2).map((tag, idx) => (
                            <span
                                key={idx}
                                className="rounded bg-gray-100 px-1.5 py-0.5 capitalize text-gray-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Product Title */}
                <h3 className="line-clamp-1 text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {id ? (
                        <Link to={`/main/products/${id}`}>{title}</Link>
                    ) : (
                        title
                    )}
                </h3>

                {/* Description Shortened */}
                <p className="mt-1 line-clamp-2 text-xs text-gray-500 leading-relaxed">
                    {description}
                </p>

                {/* Rating & Stock Row */}
                <div className="mt-auto pt-3 flex items-center gap-1.5">
                    <div className="flex items-center text-amber-400">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="ml-1 text-xs font-bold text-gray-900">
                            {Number(rating).toFixed(1)}
                        </span>
                    </div>
                    <span className="text-xs text-gray-300">•</span>
                    <span
                        className={`text-xs ${
                            stock <= 10
                                ? "font-semibold text-amber-600"
                                : "text-gray-500"
                        }`}
                    >
                        {stock > 0 ? `${stock} left in stock` : "Out of stock"}
                    </span>
                </div>

                {/* Footer: Price & Add to Cart */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                            ${Number(price).toFixed(2)}
                        </span>
                        {originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                                ${originalPrice}
                            </span>
                        )}
                    </div>

                    <button
                        type="button"
                        disabled={stock <= 0}
                        onClick={handleAddToCart}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-white shadow-sm transition-all active:scale-95 ${
                            stock <= 0
                                ? "bg-gray-300 cursor-not-allowed"
                                : isAdded
                                  ? "bg-emerald-600"
                                  : "bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                        }`}
                    >
                        {isAdded ? (
                            <>
                                <Check className="h-4 w-4" />
                                <span>Added</span>
                            </>
                        ) : (
                            <>
                                <ShoppingCart className="h-4 w-4" />
                                <span>Add</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
