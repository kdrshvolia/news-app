import React from 'react';import PropTypes from 'prop-types';const NewsSourcesBoard = ({ sources }) => {  return (    <section>      {sources.map((source) => (        <SourceItem source={source} />      ))}    </section>  );};export default NewsSourcesBoard;