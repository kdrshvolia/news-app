import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterSelect from '../FilterSelect/FilterSelect';

const Filters = ({ newsFilters }) => {
  return (
    <div>
      {Object.keys(newsFilters).map((key, index) => (
        <FilterSelect type={key} filterParam={newsFilters[key]} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsFilters: state.newsFilters,
  };
};

Filters.propTypes = {
  newsFilters: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Filters);
