import { api } from "../../../configs/apiInstance";

export const getAllProductAPI = async (searchTerm = "", selectedCategory = "all") => {
    try {
        let products = [];
        const cleanSearch = searchTerm.toLowerCase().trim();
        const hasSearch = cleanSearch.length > 0;
        const hasCategory = selectedCategory !== "all";

        if (hasSearch) {
            const res = await api.get(`/products/search?q=${cleanSearch}`);
            products = res.data.products;

            if (hasCategory) {
                products = products.filter(
                    (product) => product.category.toLowerCase() === selectedCategory.toLowerCase().trim()
                );
            }
        }
        // 2. If ONLY category is selected
        else if (hasCategory) {
            const res = await api.get(`/products/category/${selectedCategory}`);
            products = res.data.products;
        }
        // 3. If neither is provided, fetch everything
        else {
            const res = await api.get("/products");
            products = res.data.products;
        }

        // console.log("final products:", products);
        return products;

    } catch (error) {
        console.error("error in productAPI/getAllProductAPI", error);
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
