import { useQuery } from "@tanstack/react-query";
import { getAllProductAPI, getAllProductCategoryAPI } from "../api/productAPI";

export const useAllProduct = () => {
    let { data, isPending, error } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProductAPI,
    });

    // console.log("products data", data);

    return { data, isPending, error };
};


export const useAllCategory = () => {
    return useQuery({
        queryKey: ["products/category"],
        queryFn: getAllProductCategoryAPI,
    });
};
