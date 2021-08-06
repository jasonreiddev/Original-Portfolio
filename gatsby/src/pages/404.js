import React from 'react';
import Layout from '../components/layout';
import {Link} from 'gatsby';

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <Layout title="Not Found">
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />

        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
