import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

const ArticleList = props => {
  const formatDate = cell => cell.replace(/[a-zA-Z]/g, ' ').trim();

  const formatUrl = cell => (
    <a href={cell} target="_blank">
      Read More
    </a>
  );

  const columns = [
    {
      dataField: 'title',
      text: 'Title',
      sort: true
    },
    {
      dataField: 'publishedAt',
      text: 'Date Published',
      sort: true,
      formatter: formatDate
    },
    {
      dataField: 'url',
      text: 'Link to Full Article',
      formatter: formatUrl
    }
  ];

  if (!props.articles || props.articles.length === 0)
    return <div>No articles found</div>;

  return (
    <div className="col-md-12">
      <BootstrapTable keyField="url" data={props.articles} columns={columns} />
    </div>
  );
};

export default ArticleList;

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
      }),
      author: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
      urlToImage: PropTypes.string,
      publishedAt: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
