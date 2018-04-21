import actions from './actions';
import busService from 'src/services/bus';

const loadBuses = query => {
  return async function (dispatch, getState) {
    dispatch(actions.loading_buses())
    try { 
      const response = await busService.load(query);
      dispatch(actions.load_buses_succeed(data));
    }catch (ex) {
      dispatch(actions.load_buses_error(ex));
    }
  }
}