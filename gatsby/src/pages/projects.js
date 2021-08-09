import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';

import Layout from '../components/layout';

const Projects = () => {
  const data = useStaticQuery(
      graphql`
      query {
        allSanityProject(sort: { fields: lastWorkedOn, order: DESC }) {
          edges {
            node {
              lastWorkedOn(formatString: "MMMM YYYY")
              projectTitle
              repoUrl
              siteUrl
              slug{
                current
              }
              _id
            }
          }
        }
      }
    `,
  );
  return (
    <Layout title="Projects">
      <ul className="posts" style={{margin: '0', padding: '0', listStyleType: 'none'}}>
        {data.allSanityProject.edges.map((edge) => {
          return (
            <li className="post" key={edge.node._id}>
              <h2>
                <Link to={`/projects/${edge.node.slug.current}/`}>{edge.node.projectTitle}</Link>
              </h2>
              <div className="meta">
                <span>{edge.node.lastWorkedOn}</span>
              </div>
              <div className="button">
                <Link to={`/projects/${edge.node.slug.current}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Projects;
