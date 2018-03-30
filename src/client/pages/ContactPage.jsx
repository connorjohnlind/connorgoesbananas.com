import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const head = () => (
    <Helmet>
      <title>{`contact CGB`}</title>
      <meta property="og:title" context="Contact CGB" />
    </Helmet>
  );
  return (
    <div>
      {head()}
      <h1>Contact</h1>
    </div>
  );
};
export default {
  component: Contact
};
