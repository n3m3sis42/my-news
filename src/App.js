import React from 'react';

import Header from './components/Layout/Header/index';
import NewsSearch from './components/NewsSearch/index';
import Footer from './components/Layout/Footer/index';

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
