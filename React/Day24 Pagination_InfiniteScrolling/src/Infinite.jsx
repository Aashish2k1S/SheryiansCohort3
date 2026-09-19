import { useInfiniteQuery } from "@tanstack/react-query";
import { getInfiniteProduct } from "./api/ProductAPI";
import ProductCard from "./component/ProductCard";

const Infinite = () => {
    let limit = 40;

    let test = useInfiniteQuery({
        queryKey: ["/products", limit],
        queryFn: ({ pageParam }) => getInfiniteProduct(limit, pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPage) => {
            const nextSkip = lastPage.skip + lastPage.limit;
            if (nextSkip < lastPage.total) return nextSkip;
            return undefined;
        },
    });

    let {
        data,
        isPending,
        isError,
        error,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = test;

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Something went wrong {error.message} ...</div>;

    // console.log(test);
    // console.log(data);

    let allProduct = data.pages.flatMap((page) => page.products) ?? [];

    return (
        <div className="py-6 flex flex-col items-center justify-center gap-4">
            <div
                //style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
            >
                {allProduct.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {hasNextPage && (
                <div className="flex flex-col items-center justify-center">
                    <button
                        onClick={() => fetchNextPage()}
                        className={
                            data.pages[0].total === allProduct.length
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                        }
                    >
                        {isFetchingNextPage
                            ? "Loading"
                            : hasNextPage
                              ? "Load more..."
                              : "No more products"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Infinite;
