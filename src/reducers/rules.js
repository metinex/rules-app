import { FETCH_RULES_START, RECEIVE_RULES, FETCH_RULES_ERROR } from '../actions/index';
const INTIAL_STATE = { 
    all: [], 
    fetching: false, 
    fetched: false,
    error: null
};

export default function(state = INTIAL_STATE, action) {
  switch(action.type) {
    case FETCH_RULES_START:
      return {
        ...state, fetching: true
      }
    case RECEIVE_RULES:
      return {
        ...state,
        fetching: false,
        fetched: true,
        all: action.payload.data
      }
    case FETCH_RULES_ERROR:
      return{
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
