import * as types from '../actions/actionTypes';

const filterReducer = (selectedFilters = {}, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return {
        ...selectedFilters,
        [action.payload.type]: selectedFilters[action.payload.type]
          ? [...selectedFilters[action.payload.type], action.payload.value]
          : [action.payload.value],
      };
    default:
      return selectedFilters;
  }
};

export { filterReducer };
