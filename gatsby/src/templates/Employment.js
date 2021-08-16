import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    sanityPosition(slug: { current: { eq: $slug } }) {
        jobTitle
    }
  }
`;

const ProjectPage = (props) => {
  return (
    <Layout title="Employment" subTitle={props.data.sanityPosition.jobTitle}>
      <Link to="/projects/">Visit the Employment Page</Link>
      <div className="content">
        <h1>{props.data.sanityPosition.jobTitle}</h1>
      </div>
    </Layout>
  );
};

export default ProjectPage;
