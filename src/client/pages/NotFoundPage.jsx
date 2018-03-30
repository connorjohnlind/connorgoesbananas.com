import React from 'react';
import { Helmet } from 'react-helmet';

import banana from '../images/banana.png';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  const head = () => (
    <Helmet>
      <title>{`Page Not Found!`}</title>
      <meta property="og:title" context="Page Not Found!" />
    </Helmet>
  );
  return (
    <div>
      {head()}
      <img src={banana} alt='banana' />
      <h1>Oops, route not found.</h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};
