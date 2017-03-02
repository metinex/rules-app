import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import rulesReducer from './rules';

const rootReducer = combineReducers({
  rules: rulesReducer,
  form : formReducer
});

export default rootReducer;
