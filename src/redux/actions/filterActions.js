import * as types from './actionTypes';const setFilter = (type, filterParam) => {  return {    type: types.SET_FILTER,    payload: {      type,      value: filterParam,    },  };};export { setFilter };