import { ShoppingCart, Trash } from "lucide-react";
import { useContext } from "react";
import { MyShopContext } from "../context/MyShop";

const ProductCard = ({ product, isInCart }) => {
    let { setCartItems, qtyIncrement, qtyDecrement, cartProductRemove } =
        useContext(MyShopContext);

    let addToCart = () => {
        setCartItems((prev) => { 
            localStorage.setItem("cartProducts", JSON.stringify([...prev, { ...product, qty: 1 }]));
            return [...prev, { ...product, qty: 1 }];
        });
    };

    return (
        <div className="bg-black rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col hover:-translate-y-1">
            <div className="h-56 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                />
            </div>

            <span className="mt-4 text-sm text-blue-600 font-medium capitalize">
                {product.category}
            </span>

            <h2 className="mt-2 text-lg font-semibold line-clamp-2 h-14">
                {product.title}
            </h2>

            <p className="mt-3 text-2xl font-bold text-green-600">
                ${product.price}
            </p>

            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                <span>⭐ {product.rating.rate}</span>
                <span>({product.rating.count} reviews)</span>
            </div>

            {isInCart ? (
                <div className="px-2 pt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                qtyDecrement(product.id);
                            }}
                            className="bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 transition cursor-pointer"
                        >
                            -
                        </button>
                        <span className="font-semibold">{isInCart.qty}</span>
                        <button
                            onClick={() => {
                                qtyIncrement(product.id);
                            }}
                            className="bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 transition cursor-pointer"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            cartProductRemove(product.id);
                        }}
                        className="text-red-500 font-medium flex items-center justify-center gap-4 hover:text-red-700"
                    >
                        <Trash /> Remove
                    </button>
                </div>
            ) : (
                <button
                    onClick={addToCart}
                    className="mt-5 bg-slate-900 hover:bg-slate-800 text-white py-2 flex items-center justify-center gap-4 rounded-lg transition cursor-pointer"
                >
                    <ShoppingCart /> Add to Cart
                </button>
            )}
        </div>
    );
};

export default ProductCard;
