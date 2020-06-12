import React from 'react';
import PropTypes from 'prop-types';
import { SourceInfo, Source } from './StyledComponents';

const SourceItem = ({ source }) => {
  return (
    <Source>
      {source.name}
      <SourceInfo>
        {source.description}
        <a href={source.url} target="_blank" rel="noopener norefferer">
          {source.url}
        </a>
      </SourceInfo>
    </Source>
  );
};

SourceItem.propTypes = {
  source: PropTypes.object.isRequired,
};
export default SourceItem;
