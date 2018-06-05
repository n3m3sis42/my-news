import React from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';

const ArticleList = props => {
  const { articles } = props;
  if (articles.length === 0) return <div>No articles found</div>;

  // ============ react-bootstrap-table-next configuration ================= //

  const formatTitle = cell => cell || 'Untitled';

  const formatDate = cell => new Date(cell).toLocaleString();

  const formatUrl = cell => (
    <a href={cell} target="_blank">
      Read More
    </a>
  );

  const columns = [
    {
      dataField: 'title',
      text: 'Title',
      sort: true,
      formatter: formatTitle
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

  // ======================================================================= //

  return (
    <div className="col-md-12">
      <BootstrapTable
        keyField="url"
        data={articles}
        columns={columns}
        striped
      />
    </div>
  );
};

export default ArticleList;

ArticleList.defaultProps = {
  articles: []
};

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
