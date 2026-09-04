import { api } from "../../../configs/apiInstance";

export const getAllProductAPI = async () => {
    try {
        let res = await api.get("/products");
        return res.data;
    } catch (error) {
        console.log("error in productAPI/getAllProductAPI", error);
    }
};


export const getAllProductCategoryAPI = async () => {
    try {
        let res = await api.get("/products/categories");
        return res.data;
    } catch (error) {
        console.log("error in productAPI/getAllProductCategoryAPI", error);
    }
};