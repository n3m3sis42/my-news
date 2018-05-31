import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = () => {
  return (
    <Jumbotron className="text-center">
      <h1>MyNews</h1>
      <p>
        Powered by <a href="https://newsapi.org/">NewsAPI</a>
      </p>
    </Jumbotron>
  );
};

export default Header;
