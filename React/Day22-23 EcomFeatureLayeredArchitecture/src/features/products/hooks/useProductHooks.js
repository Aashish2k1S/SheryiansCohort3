import { useQuery } from "@tanstack/react-query";
import { getAllProductAPI, getAllProductCategoryAPI } from "../api/productAPI";

export const useAllProduct = (searchTerm = "", selectedCategory = "all") => {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["products", searchTerm, selectedCategory],
        queryFn: () => getAllProductAPI(searchTerm, selectedCategory),
    });

    // console.log("products data", data);

    return {data, isPending, error, refetch };
};

export const useAllCategory = () => {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["products/category"],
        queryFn: getAllProductCategoryAPI,
    });

    return {data, isPending, error, refetch };
};
