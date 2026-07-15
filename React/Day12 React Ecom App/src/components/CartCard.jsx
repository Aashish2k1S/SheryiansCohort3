import { Trash } from "lucide-react";
import { MyShopContext } from "../context/MyShop";
import { useContext } from "react";

const CartCard = ({ product }) => {
    let { qtyIncrement, qtyDecrement, cartProductRemove } =
        useContext(MyShopContext);

    // console.log(product);

    return (
        <div className="flex items-center justify-between bg-black shadow rounded-lg p-4">
            <div className="flex items-center gap-4">
                <img
                    src={product.image}
                    alt="Product"
                    className="w-24 h-24 object-contain"
                />

                <div>
                    <h2 className="font-semibold text-lg">{product.title}</h2>
                    <p className="text-gray-500">${product.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => {
                            qtyDecrement(product.id);
                        }}
                        className="bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 transition cursor-pointer"
                    >
                        -
                    </button>
                    <span className="font-semibold">{product.qty}</span>
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
        </div>
    );
};

export default CartCard;
