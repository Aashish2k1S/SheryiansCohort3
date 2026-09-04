import { useState, useMemo } from "react";
import { AlertCircle, PackageX, RefreshCw } from "lucide-react";
import { useAllProduct } from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";
import Filter from "../components/Filter";

const ProductPage = () => {
    const { data, isPending, error } = useAllProduct();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const products = data?.products || [];


    const filteredProducts = useMemo(() => {
        return products; 
        // return products.filter((product) => {
        //     const matchesSearch =
        //         product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //         product.brand?.toLowerCase().includes(searchTerm.toLowerCase());
            
        //     const matchesCategory =
        //         selectedCategory === "all" ||
        //         product.category === selectedCategory;
            
        //     return matchesSearch && matchesCategory;
        // });
    // }, [products, searchTerm, selectedCategory]);
    }, [products]);


    return (
        <div className="min-h-screen bg-gray-50/50 pb-16 pt-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header & Controls Bar */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            All Products
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Explore our latest collection of items
                        </p>
                    </div>
                    
                    {/* Filter Component */}
                    <Filter 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>

                {/* 1. Loading State */}
                {isPending && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <ProductSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* 2. Error State */}
                {!isPending && error && (
                    <div className="my-12 flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50/50 p-8 text-center">
                        <AlertCircle className="h-10 w-10 text-red-500" />
                        <h3 className="mt-3 text-lg font-semibold text-gray-900">
                            Failed to load products
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {error.message || "Something went wrong while fetching products."}
                        </p>
                        {refetch && (
                            <button
                                type="button"
                                onClick={() => refetch()}
                                className="mt-4 flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 active:scale-95 transition-all"
                            >
                                <RefreshCw className="h-4 w-4" />
                                <span>Try Again</span>
                            </button>
                        )}
                    </div>
                )}

                {/* 3. Empty State */}
                {!isPending && !error && filteredProducts.length === 0 && (
                    <div className="my-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center shadow-sm">
                        <PackageX className="h-12 w-12 text-gray-400" />
                        <h3 className="mt-4 text-base font-semibold text-gray-900">
                            No products found
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {searchTerm || selectedCategory !== "all"
                                ? "Try adjusting your search query or filters."
                                : "There are currently no products available."}
                        </p>
                        {(searchTerm || selectedCategory !== "all") && (
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchTerm("");
                                    setSelectedCategory("all");
                                }}
                                className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>
                )}

                {/* 4. Product Grid */}
                {!isPending && !error && filteredProducts.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;