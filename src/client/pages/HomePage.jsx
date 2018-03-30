import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  const head = () => (
    <Helmet>
      <title>{`connor goes bananas`}</title>
      <meta property="og:title" context="connor goes bananas" />
    </Helmet>
  );
  return (
    <div>
      {head()}
      <h1>Home</h1>
    </div>
  );
};
export default {
  component: Home
};
