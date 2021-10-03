import React from 'react';
import {graphql, Link} from 'gatsby';
import {AiOutlineLeft} from '@react-icons/all-files/ai/AiOutlineLeft';

import {Posts} from '../components/Posts/Posts';
import {Layout} from '../components/Layout/Layout';
import {HoverColor} from '../components/HoverColor/HoverColor';

export default function EmpoymentPage(props) {
  const employment = props.data.employment;
  const projects = props.data.projects.edges;
  projects.forEach((project) => {
    project.id = project.node._id;
    project.h2InsteadOfh3 = false;
    project.title = project.node.projectTitle;
    project.linkUrl = `/projects/${project.node.slug.current}`;
    project.meta = project.node.lastWorkedOn ?
      'Project last worked on ' + project.node.lastWorkedOn : 'Project ongoing';
    project.node.excerpt.slice(-3) != '...' ?
      project.excerpt = project.node.excerpt +'...' :
      project.excerpt = project.node.excerpt;
  });

  return (
    <Layout title="Employment" subTitle={employment.jobTitle}>
      <div>
        <br/>
        <Link to="/employment/1"><AiOutlineLeft/>Employment Page</Link>
        <div className="content">
          <HoverColor><h2>
            {employment.jobTitle}
          </h2></HoverColor>
          <div className="organisation"><span>{employment.organisation.organisation}</span></div>
          <p className="meta">
          Start Date:&nbsp;
            {employment.startDate}
            {employment.endDate && <> End Date: {employment.endDate}</>}
          </p>
          <hr/>
          <p>{employment.details}</p>
        </div>
        <div className="Related">
          <HoverColor><h2>
            Related Projects
          </h2></HoverColor>
          <Posts posts={projects}/>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    employment: sanityPosition(slug: { current: { eq: $slug } }) {
        jobTitle
        details    
        endDate(formatString: "MMMM YYYY")
        startDate(formatString: "MMMM YYYY")
        organisation {
          organisation
        }
      }
      projects: allSanityProject
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
