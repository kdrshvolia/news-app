import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

const browserHistory = createBrowserHistory();

export default function PaginationLink({ currentPage, setPage, sourcesLength, sourcesPerPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Router history={browserHistory}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          console.log(location.search);
          // const page = parseInt(query.get('page') || '1', 10);
          return (
            <Pagination
              onChange={handleChange}
              page={currentPage}
              count={Math.trunc(sourcesLength / sourcesPerPage)}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </Router>
  );
}
