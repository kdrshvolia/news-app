import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSources } from '../../redux/actions/sourcesActions';

const NewsSourcesBoard = ({ sources, actions }) => {
  return <section>{console.log(sources)}</section>;
};

const mapStateToProps = (state) => {
  return {
    sources: state.sources,
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
  sources: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSourcesBoard);
