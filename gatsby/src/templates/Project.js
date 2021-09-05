import React from 'react';
import {graphql, Link} from 'gatsby';
import {AiOutlineLeft} from 'react-icons/ai';
import ExternalLink from '../components/ExternalLink';

import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      lastWorkedOn(formatString: "MMMM YYYY")
      projectTitle
      repoUrl
      siteUrl
      details
      position {
        jobTitle
        slug {
          current
        }
        organisation {
          organisation
        }
        hideOnEmployment
      }
    }
  }
`;

export default function ProjectPage(props) {
  return (
    <Layout title="Projects" subTitle={props.data.sanityProject.projectTitle}>
      <br/>
      <Link to="/projects/1"><AiOutlineLeft/>Project Page</Link>
      <div className="content">
        <h2>{props.data.sanityProject.projectTitle}</h2>
        <p className="organisation">
          {!props.data.sanityProject.position.hideOnEmployment ?
           <span>
             <Link to={`/employment/${props.data.sanityProject.position.slug.current}/`}>
               {props.data.sanityProject.position.jobTitle}
             </Link>
           &nbsp;-&nbsp;
             {props.data.sanityProject.position.organisation.organisation}
           </span> :
           props.data.sanityProject.position.organisation.organisation
          }
        </p>
        <span className="meta">
          {props.data.sanityProject.lastWorkedOn ?
          <>Last worked on: {props.data.sanityProject.lastWorkedOn}</> :
          <>Ongoing</>
          }
        </span>
        <hr/>
        <p>{props.data.sanityProject.details}</p>
        {props.data.sanityProject.repoUrl &&
          <p><ExternalLink to={props.data.sanityProject.repoUrl}>View Repository</ExternalLink></p>
        }
        {props.data.sanityProject.siteUrl &&
          <p><ExternalLink to={props.data.sanityProject.siteUrl}>View Site</ExternalLink></p>
        }
      </div>
    </Layout>
  );
};
