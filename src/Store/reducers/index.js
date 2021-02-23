import { combineReducers } from 'redux';
import rules from './rule_reducer';
import rates from './cab_reducer';

const rootReducer = combineReducers({
	rules,
	rates
});

export default rootReducer;
