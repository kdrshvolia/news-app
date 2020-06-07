import * as types from '../actions/actionTypes';

const filterReducer = (selectedFilters = {}, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return { ...selectedFilters, ...action.payload };
    default:
      return selectedFilters;
  }
};

export { filterReducer };
