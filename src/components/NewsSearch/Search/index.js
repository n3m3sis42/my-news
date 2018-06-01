import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../Layout/Select/index';

const Search = props => {
  const { sources } = props;

  const selectOptions =
    sources && sources.map(source => ({ value: source.id, text: source.name }));

  return (
    <div className="row">
      <div className="col-sm-4" />
      <div className="col-sm-4 text-center">
        <Select
          label="Select a news source to get started!"
          options={selectOptions}
          onChange={props.onChange}
        />
      </div>
      <div className="col-sm-4" />
    </div>
  );
};

export default Search;

Search.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string,
      category: PropTypes.string,
      language: PropTypes.string,
      country: PropTypes.string
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired
};
