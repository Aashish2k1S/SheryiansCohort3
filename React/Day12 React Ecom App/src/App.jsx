import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { MyShopContext } from "./context/MyShop";
import axios from "axios";
import Cart from "./pages/Cart";

const App = () => {
    const [products, setProducts] = useState([]);

    let { toggleCart, cartItems, setCartItems } = useContext(MyShopContext);



    // console.log(cartItems);

    const apiCall = async () => {
        try {
            if (localStorage.getItem("products")) { 
                setProducts(JSON.parse(localStorage.getItem("products")));
                setCartItems(JSON.parse(localStorage.getItem("cartProducts")));
                return;
            }
            const res = await axios.get("https://fakestoreapi.com/products");
            let data = await res.data; 
            // console.log(data); 

            localStorage.setItem("products", JSON.stringify(data));
            setProducts(data);
        } catch (err) {
            console.log("API error:", err);
        }
    };

    useEffect(() => { apiCall(); }, []);

    // console.log(products);

    return (
        <div className="min-h-screen bg-slate-900 text-white p-4">
            <Navbar />
            {toggleCart ? (
                <Cart products={cartItems} />
            ) : (
                <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((elem) => {
                        let isInCart = cartItems.find(
                            (item) => item.id === elem.id,
                        );

                        return (
                            <ProductCard
                                key={elem.id}
                                product={elem}
                                isInCart={isInCart}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default App;
