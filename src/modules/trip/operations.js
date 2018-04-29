import actions from './actions';
import busService from 'services/bus';

const loadFeaturedTrips = () => {
  const featuredLinesListQuery = [
    {
      'fromRegionID': 1,
      'toRegionID': 2,
      'startTime': getTimeString(new Date()),
      'lineName': 'TP Yên Bái-Hà Nội',
      'preKey': 'YBHN'
    },
    {
      'fromRegionID': 1,
      'toRegionID': 2,
      'startTime': getTimeString(new Date()),
      'lineName': 'TP Yên Bái-Lào Cai',
      'preKey': 'YBLC'
    },
  ];
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