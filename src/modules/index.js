import { combineReducers } from 'redux';

import bus from './bus';
import trip from './trip';
import search from './search';
import Store from './store';

export default {
  BusReducer: combineReducers({
    bus,
    trip,
    search
  }),
  Store: store
};