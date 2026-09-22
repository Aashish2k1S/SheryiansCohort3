import type { Product } from "./types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { title, price, description, category, image, rating } = product;

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        {/* Category Badge & Image */}
        <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-gray-50 p-4">
          <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold capitalize text-gray-600 backdrop-blur-md">
            {category}
          </span>
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="mt-4 flex flex-col gap-2">
          {/* Title */}
          <h3 className="line-clamp-1 text-base font-bold text-gray-900" title={title}>
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="flex items-center text-amber-500 font-semibold">
              ★ {rating.rate.toFixed(1)}
            </span>
            <span>•</span>
            <span>({rating.count} reviews)</span>
          </div>

          {/* Description */}
          <p className="line-clamp-2 text-xs leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* Footer: Price and Action */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Price</span>
          <span className="text-lg font-extrabold text-gray-900">
            ${price.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => onAddToCart?.(product)}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md transition-colors hover:bg-indigo-700 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};