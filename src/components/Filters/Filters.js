import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilterSelect from '../FilterSelect/FilterSelect';

const Filters = ({ filters }) => {
  return (
    <div>
      {filters.values().map((filter) => (
        <FilterSelect filterParam={filter} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.newsFilters,
  };
};

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Filters);
