import React from 'react';import PropTypes from 'prop-types';import SelectedFilter from '../SelectedFilter/SelectedFilter';const SelectedFiltersList = ({ selectedFilters }) => {  return (    <div>      {selectedFilters.map((filter) => (        <SelectedFilter filter={filter} />      ))}    </div>  );};export default SelectedFiltersList;