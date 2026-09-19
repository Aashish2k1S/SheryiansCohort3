import { useRef, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ProductCard from "./component/ProductCard";
import { getAllProduct } from "./api/ProductAPI";

const TanStack = () => {
    let limit = 10;
    const [pages, setPages] = useState(0);
    const renderCount = useRef(0);

    let test = useQuery({
        queryKey: ["/products", limit, pages],
        queryFn: () => getAllProduct(limit, pages),
        placeholderData: keepPreviousData,
    });

    let { data, isPending, isError, error, isPlaceholderData, isFetching, isFetched, refetch, isRefetching, isRefetchError  } = test

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Something went wrong {error.message} ...</div>;

    const totalPages = Math.ceil(data.total / limit);

    renderCount.current++;
    // console.log(`Counter : ${renderCount.current}, data: `);
    // console.log(data);

    // console.log(test);

    return (
        <div className="py-6 flex flex-col items-center justify-center gap-4">
            TanStack
            <div
                style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
            >
                {data?.products.map((product) => (
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

export default TanStack;
