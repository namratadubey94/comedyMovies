import { combineReducers } from 'redux';

import romanticComedyReducer from '../romanticComedy/romanticComedyReducer';


export const rootReducer = combineReducers({
  romanticComedy: romanticComedyReducer
});
