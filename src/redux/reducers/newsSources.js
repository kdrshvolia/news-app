import * as types from '../actions/actionTypes';

const newsSources = (sources = [], action) => {
  switch (action.type) {
    case types.LOAD_SOURCES_SUCCESS:
      return action.sources;
    default:
      return sources;
  }
};

const filters = {
  category: [
    'business',
    'entertainment',
    'gaming',
    'general',
    'music',
    'politics',
    'science-and-nature',
    'sport',
    'technology',
  ],
  language: ['en', 'de', 'fr'],
  country: ['au', 'de', 'gb', 'in', 'it', 'us'],
};

const newsFilters = (state = filters) => {
  return state;
};

export { newsSources, newsFilters };
