'use strict';

import {combineReducers} from 'redux';
import repos from './repos';

const rootReducer = combineReducers({
  repos
});

export default rootReducer;