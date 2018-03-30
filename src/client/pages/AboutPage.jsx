import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  const head = () => (
    <Helmet>
      <title>{`about CGB`}</title>
      <meta property="og:title" context="About CGB" />
    </Helmet>
  );
  return (
    <div>
      {head()}
      <h1>About</h1>
    </div>
  );
};
export default {
  component: About
};
