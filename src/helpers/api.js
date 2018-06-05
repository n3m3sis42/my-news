import axios from 'axios';
import { merge } from 'lodash';
import { keys } from '../config/prod';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = keys.newsApi;
const options = { headers: { Authorization: `${API_KEY}` } };

export const fetchSources = async () => {
  const params = { params: { language: 'en' } };
  try {
    const res = await axios.get(`${BASE_URL}/sources`, merge(options, params));
    return res.data.sources;
  } catch (err) {
    console.error(err);
  }
};

export const fetchArticlesBySource = async (source = 'abc-news') => {
  const params = { params: { sources: source } };
  try {
    const res = await axios.get(
      `${BASE_URL}/top-headlines`,
      merge(options, params)
    );
    return res.data.articles;
  } catch (err) {
    console.error(err);
  }
};
