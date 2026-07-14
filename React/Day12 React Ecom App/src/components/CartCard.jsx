import { Trash } from "lucide-react";

const CartCard = ({ product }) => {
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
          <h2 className="font-semibold text-lg">
            {product.title}
          </h2>
          <p className="text-gray-500">$99.99</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <button className="bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 transition cursor-pointer">-</button>
          <span className="font-semibold">1</span>
          <button className="bg-slate-900 px-3 py-1 rounded hover:bg-slate-800 transition cursor-pointer">+</button>
        </div>

        <button className="text-red-500 font-medium flex items-center justify-center gap-4 hover:text-red-700">
          <Trash /> Remove
        </button>
      </div>
    </div>
  )
}

export default CartCard