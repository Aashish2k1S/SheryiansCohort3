import { api } from "../../../configs/apiInstance";

export const loginUserAPI = async (credentials) => {
    try {
        let res = await api.post('/auth/login', credentials);
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log('error in authAPI/loginUserAPI:', error);
    }
};

export const hydrateUserAPI = async () => {
    let accessToken = JSON.parse(localStorage.getItem('accessToken'));
    if (!accessToken) {
        throw new Error('No access token found');
    }
    // console.log(accessToken);

    try {
        let res = await api.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log('error in login api:', error);
    }
};