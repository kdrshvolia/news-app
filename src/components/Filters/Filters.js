import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterSelect from '../FilterSelect/FilterSelect';

const Filters = ({ newsFilters }) => {
  return (
    <div>
      {Object.values(newsFilters).map((filter) => (
        <FilterSelect filterParam={filter} />
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
