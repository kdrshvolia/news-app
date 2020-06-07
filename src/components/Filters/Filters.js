import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterSelect from '../FilterSelect/FilterSelect';
import SelectedFiltersList from '../SelectedFiltersList/SelectedFiltersList';

const Filters = ({ newsFilters, selectedFilters }) => {
  return (
    <div>
      {Object.keys(newsFilters).map((key, index) => (
        <FilterSelect type={key} filterParam={newsFilters[key]} />
      ))}
      {Object.keys(selectedFilters).length === 0 ? null : (
        <SelectedFiltersList selectedFilters={selectedFilters} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsFilters: state.newsFilters,
    selectedFilters: state.filterReducer,
  };
};

Filters.propTypes = {
  newsFilters: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Filters);
