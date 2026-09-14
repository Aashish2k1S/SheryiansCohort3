import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllProductAPI, getAllProductCategoryAPI } from "../api/productAPI";

export const useAllProduct = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [searchInput, setSearchInput] = useState(searchTerm);

        
    useEffect(() => {
        const timer = setTimeout(() => { 
            setSearchTerm(searchInput); 
        }, 1500); 

        return () => clearTimeout(timer); 
    }, [searchInput]); 

    useEffect(() => { setSearchInput(searchTerm); }, [searchTerm]);


    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["products", searchTerm, selectedCategory],
        queryFn: () => getAllProductAPI(searchTerm, selectedCategory),
    });

    // console.log("products data", data);

    return { 
        data, isPending, error, refetch, 
        searchTerm, setSearchTerm, 
        searchInput, setSearchInput, 
        selectedCategory, setSelectedCategory 
    }; 
}; 

export const useAllCategory = () => {
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ["products/category"],
        queryFn: getAllProductCategoryAPI,
    });

    return { data, isPending, error, refetch };
};
