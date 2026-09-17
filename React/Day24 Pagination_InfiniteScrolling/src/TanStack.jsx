import { useQuery } from "@tanstack/react-query";
import ProductCard from "./component/ProductCard";
import { getAllProduct } from "./api/ProductAPI";

const TanStack = () => {
    let { isPending, isError, data, error } = useQuery({
        queryKey: ["/products"],
        queryFn: getAllProduct,
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Something went wrong {error.message} ...</div>;

    console.log(data);

    return (
        <div className="py-6 flex flex-col items-center justify-center gap-4">
            TanStack
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {data?.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default TanStack;
