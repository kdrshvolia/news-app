import React from 'react';
import PropTypes from 'prop-types';
import { SourceInfo, Source } from './StyledComponents';

const SourceItem = ({ source }) => {
  return (
    <Source>
      {source.name}
      <SourceInfo>
        {source.description}
        {source.url}
      </SourceInfo>
    </Source>
  );
};

SourceItem.propTypes = {
  source: PropTypes.object.isRequired,
};
export default SourceItem;
