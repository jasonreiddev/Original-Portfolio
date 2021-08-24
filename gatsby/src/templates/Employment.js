import React from 'react';
import {graphql, Link} from 'gatsby';
import {AiOutlineLeft} from 'react-icons/ai';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    sanityPosition(slug: { current: { eq: $slug } }) {
        jobTitle
        details    
        endDate(formatString: "MMMM YYYY")
        startDate(formatString: "MMMM YYYY")
    }
  }
`;

export default function ProjectPage(props) {
  return (
    <Layout title="Employment" subTitle={props.data.sanityPosition.jobTitle}>
      <br/>
      <Link to="/employment/"><AiOutlineLeft/>Employment Page</Link>
      <div className="content">
        <h2>{props.data.sanityPosition.jobTitle}</h2>
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
