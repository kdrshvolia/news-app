import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetFilter } from '../../redux/actions/filterActions';

const SelectedFilter = ({ type, filter, resetFilter }) => {
  return <div onClick={() => resetFilter(type, filter)}>{filter}</div>;
};

const mapDispatchToProps = {
  resetFilter,
};

export default connect(null, mapDispatchToProps)(SelectedFilter);
