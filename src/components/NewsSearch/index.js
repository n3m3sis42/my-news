import React, { Component } from 'react';

import Select from '../Layout/Select/index';
import ArticleList from './ArticleList/index';

import { fetchSources, fetchArticlesBySource } from '../../helpers/api';

export default class NewsSearch extends Component {
  state = {
    sources: [],
    articles: []
  };

  componentDidMount() {
    fetchSources()
      .then(sources => this.setState({ sources },
        () => this.handleSourceChange(this.state.sources[0].id)
      ))
      .catch(err => console.error(err));
  }

  handleSourceChange = (source) => {
    fetchArticlesBySource(source)
      .then(articles => this.setState({ articles }))
      .catch(err => console.error(err));
  };

  render() {
    const {
      sources,
      articles
    } = this.state;

    const selectOptions = sources && sources.map(source => ({ value: source.id, text: source.name }));

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-4 text-center">
            <Select
              label="Select a news source to browse its top headlines!"
              options={selectOptions}
              onChange={this.handleSourceChange}
            />
          </div>
          <div className="col-sm-4" />
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ArticleList articles={articles} />
          </div>
        </div>
      </div>
    );
  }
}
