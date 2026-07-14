import CartCard from "../components/CartCard";

const Cart = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {
            products.map((elem) => {
              return (<CartCard key={elem.id} product={elem} />);
            })
          }
        </div>

        {/* Order Summary */}
        <div className="bg-black shadow-lg rounded-lg p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>$99.99</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>$99.99</span>
          </div>

          <button className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;