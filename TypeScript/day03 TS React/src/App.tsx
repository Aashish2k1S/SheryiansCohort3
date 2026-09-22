import axios from "axios";
import { useEffect, useState } from "react";
import type { ApiResponse, Product } from "./types";
import { ProductCard } from "./ProductCard";



const App = () => {

  const [productsData, setProductsData] = useState<Product[]> ([])

  let getdata = async () => {
    let res = await axios.get<ApiResponse>('https://fakestoreapi.com/products'); 
    console.log(res.data);
    setProductsData(res.data); 
  }; 

  useEffect(()=> { getdata() }, [])


  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-extrabold text-gray-900">Featured Products</h1>
        
        {/* Mapping through products array */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App