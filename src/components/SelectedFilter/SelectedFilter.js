import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetFilter } from '../../redux/actions/filterActions';
import IconDelete from '../../images/icon-delete.svg';
import { StyledSelectedFilter } from './StyledComponents';

const SelectedFilter = ({ type, filter, resetFilter }) => {
  return (
    <StyledSelectedFilter onClick={() => resetFilter(type, filter)}>
      {filter}
      <img src={IconDelete} />
    </StyledSelectedFilter>
  );
};

SelectedFilter.propTypes = {
  type: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default connect(null, { resetFilter })(SelectedFilter);
