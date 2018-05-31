import React from 'react';

import Header from './components/Layout/Header/index';
import NewsSearch from './components/NewsSearch/index';
import Footer from './components/Layout/Footer/index';

// NOTE: Update this to filter on language and country with checkboxes?
// Add tests
// Add proptypes to all components
// Add redux?!
// Test to see if app is at least somewhat responsive?

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
