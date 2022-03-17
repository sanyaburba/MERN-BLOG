import * as api from "../../api/index.js";
import {AUTH, MY_ERROR, MY_ERROR_CLEAR} from "../../constants/actionTypes";

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.login(formData);
        dispatch({type: AUTH, data});
        navigate('/');
    } catch (e) {
        alert(e.response.data.message);
        dispatch({type: MY_ERROR, payload: e.response.data.message});
        setTimeout(() => dispatch({type: MY_ERROR_CLEAR}),10000);
    }
};

export const registration = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.registration(formData);
        dispatch({type: AUTH, data});
        navigate('/');
    } catch (e) {
        alert(e.response.data.message);
        dispatch({type: MY_ERROR, payload: e.response.data.message});
        setTimeout(() => dispatch({type: MY_ERROR_CLEAR}),10000);
    }
};