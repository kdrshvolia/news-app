import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadSources } from '../../redux/actions/sourcesActions';
import SourceItem from '../SourceItem/SourceItem';
import { StyledBoard } from './StyledComponents';
import PaginationLink from '../Pagination/Pagination';

const NewsSourcesBoard = ({ newsSources, sourcesPerPage, selectedFilters, actions }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    actions.loadSources();
  }, [actions]);

  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter((product) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        // Loops again if product[key] is an array (for material attribute).
        if (Array.isArray(product[key])) {
          return product[key].some((keyEle) => filters[key].includes(keyEle));
        }
        return filters[key].includes(product[key]);
      });
    });
  };

  const displayedSources = multiPropsFilter(newsSources, selectedFilters);

  return (
    <StyledBoard>
      {displayedSources
        .slice((currentPage - 1) * sourcesPerPage, sourcesPerPage * currentPage)
        .map((source) => (
          <SourceItem source={source} />
        ))}
      <PaginationLink
        currentPage={currentPage}
        setPage={setPage}
        sourcesLength={displayedSources.length}
        sourcesPerPage={sourcesPerPage}
      />
    </StyledBoard>
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
