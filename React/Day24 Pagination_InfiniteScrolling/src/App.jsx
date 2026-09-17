import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";

const App = () => {
    let limit = 50;
    const [totalPages, setTotalPages] = useState(0);
    const [pages, setPages] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getAllProduct = async (page = 0) => {
            try {
                let skip = page * limit;
                let res = await axios.get(
                    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
                );

                console.log(res.data);
                setTotalPages(Math.ceil(res.data.total / limit));
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        getAllProduct(pages);
        console.log("call at page ", pages);
    }, [pages]);

    return (
        <div className="py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="flex items-center justify-center mt-8 space-x-2">
                <button
                    disabled={pages <= 0}
                    onClick={() => {
                        setPages((prev) => prev - 1);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border 
                    border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                <span className="text-sm text-gray-500">
                    Page {pages + 1} of {totalPages}
                </span>

                <button
                    disabled={pages >= totalPages - 1}
                    onClick={() => {
                        setPages((prev) => prev + 1);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border 
                    border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
