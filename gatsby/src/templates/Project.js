import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      lastWorkedOn(formatString: "MMMM YYYY")
      projectTitle
      repoUrl
      siteUrl
      details
    }
  }
`;

export default function ProjectPage(props) {
  return (
    <Layout title="Projects" subTitle={props.data.sanityProject.projectTitle}>
      <br/>
      <Link to="/projects/">← Project Page</Link>
      <div className="content">
        <h2>{props.data.sanityProject.projectTitle}</h2>
        <span className="meta">
          {props.data.sanityProject.lastWorkedOn ?
          <>Last worked on: {props.data.sanityProject.lastWorkedOn}</> :
          <>Ongoing Project</>
          }
        </span>
        <hr/>
        <p>{props.data.sanityProject.details}</p>
      </div>
    </Layout>
  );
};
