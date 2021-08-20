import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export default function ProjectsPage({data, pageContext}) {
  const projects = data.projects.nodes;

  projects.forEach((project) => {
    project.lastWorkedOn = project.lastWorkedOn ? project.lastWorkedOn : 'Ongoing';
  });

  return (
    <Layout title="Projects">
      <ul className="posts" style={{margin: '0', padding: '0', listStyleType: 'none'}}>
        {projects.map((project) => {
          return (
            <li className="post" key={project._id}>
              <h2>
                <Link to={`/projects/${project.slug.current}/`}>{project.projectTitle}</Link>
              </h2>
              <div className="excerpt">
                {project.excerpt}
              </div>
              <p className="meta">
                <span>{project.lastWorkedOn}</span>
              </p>
              <div className="button">
                <Link to={`/projects/${project.slug.current}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.projects.totalCount}
        currentPage={pageContext.currentPage || 'All'}
        skip={pageContext.skip}
        base="/projects"
      />
    </Layout>
  );
};

export const query = graphql`
   query($skip: Int = 0, $pageSize: Int = 99999) {
        projects: allSanityProject(
          limit: $pageSize, skip: $skip,
          sort: { fields: lastWorkedOn, order: DESC }
          ) {
          totalCount
          nodes {
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
      
`;
