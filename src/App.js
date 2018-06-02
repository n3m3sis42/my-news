import React from 'react';

import Header from './components/Layout/Header/index';
import NewsSearch from './components/NewsSearch/index';
import Footer from './components/Layout/Footer/index';

// Add code and unit test for Source component or remove component
// Fix tests for NewsSearch
// Check props for child components in unit tests
// Simulate changing value of Select field in unit test?
// Add proptypes to all components
// Test to see if app is at least somewhat responsive?
// Fix styling
// Deploy to heroku or github.io

const App = () => {
  return (
    <div>
      <Header />
      <NewsSearch />
      <Footer />
    </div>
  );
};

export default App;
