import axios from 'axios';

// type for get rules
export const FETCH_RULES_START = 'FETCH_RULES_START';
export const RECEIVE_RULES = 'RECEIVE_RULES';
export const FETCH_RULES_ERROR = 'FETCH_RULES_ERROR';

// type for post rules
export const CREATE_RULE = 'CREATE_RULE';

const ROOT_URL = 'http://localhost:4000/data';

export const fetchRules = () => {
    const request = axios.get(`${ROOT_URL}`);

    return function(dispatch) {
        dispatch({
            type: FETCH_RULES_START
        })

        return request.then((response) => {
            dispatch({
                type: RECEIVE_RULES,
                payload: response
            })
        }).catch((err) => {
            dispatch({
                type: FETCH_RULES_ERROR,
                payload: err
            })
        })
    }
}

export const createRuleAction = (props) => {
    const request = axios.post(`${ROOT_URL}`, props);

    return {
        type: CREATE_RULE,
        payload: request
    }
}