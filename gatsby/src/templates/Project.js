import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      lastWorkedOn
      projectTitle
      repoUrl
      siteUrl
    }
  }
`;

const ProjectPage = (props) => {
  return (
    <Layout title="Projects" subTitle={props.data.sanityProject.projectTitle}>
      <Link to="/projects/">Visit the Project Page</Link>
      <div className="content">
        <h1>{props.data.sanityProject.projectTitle}</h1>
      </div>
    </Layout>
  );
};

export default ProjectPage;
