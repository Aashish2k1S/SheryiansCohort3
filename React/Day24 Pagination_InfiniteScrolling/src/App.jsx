import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";

const App = () => {
  let limit = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); 

  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip`);
      
      console.log(res.data);
      setPages(Math.ceil(res.data.total/limit)); 
      setTotalPages(Math.ceil(res.data.total/limit));  
      setProducts(res.data.products);
    } catch (error) { console.log(error); }
  }

  useEffect(() => { getAllProduct(); }, [] );

  let onPageChange = (newPage) => {
      setCurrentPage(newPage); 
  }

  console.log(pages);
  console.log(currentPage);
  console.log(products);
  
  


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>      

        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default App