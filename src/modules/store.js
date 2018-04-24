import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import allReducer from 'modules';

export default store = createStore(allReducer, applyMiddleware(thunk));