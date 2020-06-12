import React from 'react';
import PropTypes from 'prop-types';
import SelectedFilter from '../SelectedFilter/SelectedFilter';

const SelectedFiltersList = ({ selectedFilters }) => {
  return (
    <div>
      {Object.keys(selectedFilters).map((key) =>
        selectedFilters[key].map((filter) => <SelectedFilter type={key} filter={filter} />),
      )}
    </div>
  );
};

export default SelectedFiltersList;
