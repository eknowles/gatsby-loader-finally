import React from 'react';
import { Link } from 'gatsby';

import { RSAA } from 'redux-api-middleware';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>{RSAA}</p>
    <Link to="/product/1">view product 1</Link>
    <Link to="/product/2">view product 2</Link>
  </div>
);

export default IndexPage;
