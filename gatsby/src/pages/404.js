import React from 'react';
import {Link} from 'gatsby';
import {AiOutlineLeft} from 'react-icons/ai';

import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title="Not Found">
      <div className="post">
        <br/>
        <Link to="/"><AiOutlineLeft/>Home</Link>
        <title>Not found</title>
        <h2>Page not found</h2>
        <p>
          Sorry,
          we couldn’t find what you were looking for.
          <br/>
          The page may have been moved or deleted.
          <br />
        </p>
      </div>
    </Layout>
  );
};
