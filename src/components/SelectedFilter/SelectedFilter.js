import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetFilter } from '../../redux/actions/filterActions';

const SelectedFilter = ({ type, filter, resetFilter }) => {
  return <div onClick={() => resetFilter(type, filter)}>{filter}</div>;
};

SelectedFilter.propTypes = {
  type: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default connect(null, { resetFilter })(SelectedFilter);
