import { handleResponse, handleError } from './apiUtils';

const getSources = () => {
  return fetch('https://newsapi.org/v2/sources?apiKey=37d3cffc174f4fdd82c1ca7c33b4fe61')
    .then(handleResponse)
    .catch(handleError);
};

export { getSources };
