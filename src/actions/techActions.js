import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    DELETE_LOG
} from './types';

export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const api = '/techs';
        const res = await fetch(api);
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    };
};

export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const api = '/techs';
        const res = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    };
};

export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

        const api = `/techs/${id}`;
        await fetch(api, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    };
};


export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};