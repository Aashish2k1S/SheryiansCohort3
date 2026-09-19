import axios from "axios";

export const getAllProduct = async (limit = 10, page = 0) => {
    try {
        let skip = page * limit;
        let res = await axios.get(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        );
        // console.log('calling data from api...', res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getInfiniteProduct = async (limit = 10, pageParam = 0) => {
    try {
        console.log('limit:', limit, ' pageParam:', pageParam);

        let res = await axios.get(
            `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
        );
        // console.log('calling data from api...', res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
