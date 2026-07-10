const Cart = ({ users }) => {
  const total = users.reduce((sum, users) => sum + users.price, 0);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {users.length === 0 ? (
        <div className="bg-gray-800 rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold">
            🛒 Your cart is empty
          </h2>

          <p className="text-gray-400 mt-2">
            Add some products to get started.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">

            {users.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-xl p-4 flex gap-4"
              >
                <div className="bg-white rounded-lg w-32 h-32 flex justify-center items-center p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <h2 className="font-semibold text-lg">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 mt-2">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">
                      <button className="bg-gray-700 w-8 h-8 rounded">
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button className="bg-gray-700 w-8 h-8 rounded">
                        +
                      </button>
                    </div>

                    <button className="text-red-400 hover:text-red-500">
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="bg-gray-800 rounded-xl p-6 h-fit sticky top-24">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Total Items</span>
              <span>{users.length}</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t border-gray-700 pt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition">
              Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;