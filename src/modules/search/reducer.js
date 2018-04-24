import types from './types';

const initialState = {
  buses: [],
  loading: false,
  currentBus: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.LOADIND_BUSES: {
      return {
        ...state,
        loading: true
      }
    }
    case types.LOAD_BUSES_SUCCEED: {
      return {
        ...state,
        buses: state.buses,
        loading: false
      }
    }
    case types.LOAD_BUSES_ERROR: {
      return {
        ...state,
        error: action.error,
        loading: false
      }
    }
    case types.CHOOSE_BUS: {
      return {
        ...state,
        currentBus: action.currentBus
      }
    }
    default: return state;
  }
}