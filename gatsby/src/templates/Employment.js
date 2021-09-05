import React from 'react';
import {graphql, Link} from 'gatsby';
import {AiOutlineLeft} from 'react-icons/ai';
import ProjectListing from '../components/ProjectListing';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    sanityPosition(slug: { current: { eq: $slug } }) {
        jobTitle
        details    
        endDate(formatString: "MMMM YYYY")
        startDate(formatString: "MMMM YYYY")
        organisation {
          organisation
        }
      }
    allSanityProject
      (filter: {position: {slug: {current: {eq: $slug}}}}) {
        edges {
          node {
              lastWorkedOn(formatString: "MMMM YYYY")
              projectTitle
              repoUrl
              siteUrl
              excerpt
              slug{
                current
              }
              _id
            }
        }
      }
    }
`;

export default function ProjectPage(props) {
  return (
    <Layout title="Employment" subTitle={props.data.sanityPosition.jobTitle}>
      <br/>
      <Link to="/employment/1"><AiOutlineLeft/>Employment Page</Link>
      <div className="content">
        <h2>{props.data.sanityPosition.jobTitle}</h2>
        <div className="organisation"><span>{props.data.sanityPosition.organisation.organisation}</span></div>
        <p className="meta">
          Start Date:&nbsp;
          {props.data.sanityPosition.startDate}
          {props.data.sanityPosition.endDate && <> End Date: {props.data.sanityPosition.endDate}</>}
        </p>
        <hr/>
        <p>{props.data.sanityPosition.details}</p>
      </div>
      <div className="Related">
        <h2>Related Projects</h2>
        <ul className="posts" style={{margin: '0', padding: '0', listStyleType: 'none'}}>
          {props.data.allSanityProject.edges.map((project) => {
            return (
              <ProjectListing className="post" project={project.node} key={project.node._id}>
                <h3>
                  <Link to={`/projects/${project.node.slug.current}/`}>{project.node.projectTitle}</Link>
                </h3>
              </ProjectListing>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};
