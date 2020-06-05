import * as types from './actionTypes';
import { getSources } from '../../api/sourcesApi';

const loadSourcesSuccess = (sources) => {
  return {
    type: types.LOAD_SOURCES_SUCCESS,
    sources,
  };
};

const loadSources = () => (dispatch) => {
  return getSources().then((sources) => dispatch(loadSourcesSuccess(sources.sources)));
};

export { loadSourcesSuccess, loadSources };
