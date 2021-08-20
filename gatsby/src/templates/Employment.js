import React from 'react';
import {graphql, Link} from 'gatsby';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    sanityPosition(slug: { current: { eq: $slug } }) {
        jobTitle
        details
        endDate
        startDate
    }
  }
`;

export default function ProjectPage(props) {
  return (
    <Layout title="Employment" subTitle={props.data.sanityPosition.jobTitle}>
      <Link to="/projects/">Visit the Employment Page</Link>
      <div className="content">
        <h1>{props.data.sanityPosition.jobTitle}</h1>
        <span className="meta">
          Start Date:&nbsp;
          {props.data.sanityPosition.startDate}
          {props.data.sanityPosition.endDate && <> End Date: {props.data.sanityPosition.endDate}</>}
        </span>
        <hr/>
        <p>{props.data.sanityPosition.details}</p>
      </div>
    </Layout>
  );
};
