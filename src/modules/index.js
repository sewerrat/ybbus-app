import { combineReducers } from 'redux';

import {reducer as bus} from './bus';
import {reducer as trip} from './trip';
import {reducer as search} from './search';

export default combineReducers({
  bus,
  trip,
  search
  //common
});