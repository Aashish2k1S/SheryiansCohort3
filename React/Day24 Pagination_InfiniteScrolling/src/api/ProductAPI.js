import axios from "axios";

export const getAllProduct = async (page = 0) => {
    try {
        //let skip = page * limit;
        let res = await axios.get(
            `https://dummyjson.com/products`//?limit=${limit}&skip=${skip}`,
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
