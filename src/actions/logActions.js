import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT,
} from './types';

/*
export const getLogs = () => {
    return async (dispatch) => {
        setLoading();

        const api = '/logs';
        const res = await fetch(api);
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    };
};
*/

//in a try-catch
//get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const api = '/logs';
        const res = await fetch(api);
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    };
};

export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const api = '/logs';
        const res = await fetch(api, {
            method: 'POST',
            body: JSON.stringify(log),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    };
};

export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        const api = `/logs/${id}`;
        await fetch(api, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    };
};

export const updateLog = (log) => async dispatch => {
    try {
        setLoading();

        const api = `/logs/${log.id}`;
        const res = await fetch(api, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    };
};

export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();

        const api = `/logs?q=${text}`;
        const res = await fetch(api);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    };
};

//set current log
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}
//clear currne tlog
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};