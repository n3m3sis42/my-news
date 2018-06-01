import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import Search from './Search/index';
import Source from './Source/index';
import ArticleList from './ArticleList/index';

import { fetchSources, fetchArticlesBySource } from '../../helpers/api';

// NOTE: Update this to filter on language and country with checkboxes?
// Add proptypes to all components
// Pagination or increasing # of search results
// Style this to look nicer
// Add details about the news source when it's selected

export default class NewsSearch extends Component {
  state = {
    sources: [],
    articles: []
  };

  componentDidMount() {
    fetchSources().then(sources =>
      this.setState({ sources }, () => this.handleSourceChange())
    );
  }

  handleSourceChange = (source = this.state.sources[0].id) => {
    fetchArticlesBySource(source).then(articles => this.setState({ articles }));
  };

  render() {
    return (
      <div className="container">
        <Search
          sources={this.state.sources}
          onChange={this.handleSourceChange}
        />
        <PageHeader>
          <Source />
        </PageHeader>
        <div className="row">
          <div className="col-sm-12">
            <ArticleList articles={this.state.articles} />
          </div>
        </div>
      </div>
    );
  }
}
