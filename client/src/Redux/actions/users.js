import {END_LOADING, FETCH_USERS_FOR_ADMIN, START_LOADING} from "../../constants/actionTypes";
import * as api from "../../api";

export const getUsersForAdmin = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchAllUsersForAdmin();
        dispatch({type: FETCH_USERS_FOR_ADMIN, payload: data});
        dispatch({type: END_LOADING});
    } catch (e) {
        return new Error(e.message);
    }
};