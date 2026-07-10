import { useContext } from "react";
import { MyShop } from "./context/MyShopContext";
import Navbar from "./components/Navbar";
import PorductCard from "./components/PorductCard";
import Cart from "./components/Cart";

const App = () => {
  const { toggle, users } = useContext(MyShop);

  // <div className="h-screen bg-gray-900 text-white scrollbar-thin scrollbar-thumb-red-600">
  // <div className="h-screen overflow-y-auto bg-gray-900 text-white scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800">
  return (
    <div className="h-screen overflow-y-auto bg-gray-900 text-white no-scrollbar">
      <Navbar />

      {toggle ? (
        <Cart users={users} />
      ) : (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((val) => (
            <PorductCard
              key={val.id}
              product={val}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;