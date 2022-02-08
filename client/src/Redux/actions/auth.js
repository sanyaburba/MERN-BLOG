import * as api from "../../api/index.js";
import {AUTH} from "../../constants/actionTypes";

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data} = await api.login(formData);
        dispatch({type: AUTH, data});
        navigate('/');
    } catch (e) {
        return new Error(e.message);
    }
};
export const registration = (formData, navigate) => async (dispatch) => {
    try {
        const { data} = await api.registration(formData);

        dispatch({type: AUTH, data});
        navigate('/');
    } catch (e) {
        return new Error(e.message);
    }
};