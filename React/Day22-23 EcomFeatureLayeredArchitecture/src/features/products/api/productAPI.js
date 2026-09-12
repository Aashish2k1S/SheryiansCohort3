import { api } from "../../../configs/apiInstance";

export const getAllProductAPI = async (
    searchTerm = "",
    selectedCategory = "all",
) => {
    try {
        let products = [];

        console.log("search:", searchTerm);
        console.log("category:", selectedCategory);

        // 1. Get products based on category
        if (selectedCategory !== "all") {
            const res = await api.get(`/products/category/${selectedCategory}`);
            products = res.data;
        } else {
            const res = await api.get("/products");
            products = res.data;
        }

        console.log("products after API:", products);

        // 2. Filter products by search term
        if (searchTerm.trim()) {
            products = products.filter((product) =>
                String(product.title)
                    .toLowerCase()
                    .includes(searchTerm.trim().toLowerCase()),
            );
        }

        console.log("final products:", products);

        return products;
    } catch (error) {
        console.log("error in productAPI/getAllProductAPI", error);

        return [];
    }
};

export const getAllProductCategoryAPI = async () => {
    try {
        const res = await api.get("/products/categories");

        return res.data;
    } catch (error) {
        console.log("error in productAPI/getAllProductCategoryAPI", error);

        return [];
    }
};
