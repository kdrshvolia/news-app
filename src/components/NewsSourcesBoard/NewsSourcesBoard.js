import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSources } from '../../redux/actions/sourcesActions';
import SourceItem from '../SourceItem/SourceItem';

const NewsSourcesBoard = ({ newsSources, selectedFilters, actions }) => {
  useEffect(() => {
    actions.loadSources();
  }, [actions]);

  const displayedSources = () =>
    newsSources.filter((obj) =>
      Object.keys(selectedFilters).every(
        (parameter) => obj[parameter] === selectedFilters[parameter],
      ),
    );

  return (
    <section>
      {displayedSources().map((source) => (
        <SourceItem source={source} />
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    newsSources: state.newsSources,
    selectedFilters: state.filterReducer,
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
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsSourcesBoard);
