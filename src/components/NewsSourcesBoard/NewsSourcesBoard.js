import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSources } from '../../redux/actions/sourcesActions';

const NewsSourcesBoard = ({ newsSources, actions }) => {
  return <section>{console.log(newsSources)}</section>;
};

const mapStateToProps = (state) => {
  return {
    sources: state.newsSources,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadSources: bindActionCreators(loadSources, dispatch),
    },
  };
};

NewsSourcesBoard.propTypes = {
  newsSources: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSourcesBoard);
