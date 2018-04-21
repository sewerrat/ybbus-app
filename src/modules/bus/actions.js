import types from './types';

const loading_buses = query => ({
  type: type.LOADING_BUSES
});

const load_buses_succeed = buses => ({
  type: type.LOAD_BUSES_SUCCEED,
  payload: {
    buses
  }
});

const load_buses_error = error => ({
  type: type.LOAD_BUSES_ERROR,
  payload: {
    error
  }
});

const choose_bus = id => ({
  type: CHOOSE_BUS,
  payload: {
    id
  }
});

export default {
  loading_buses,
  load_buses_succeed,
  load_buses_error,
  choose_bus
}