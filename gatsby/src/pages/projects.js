import React from 'react';
import {graphql} from 'gatsby';

import Layout from '../components/Layout/Layout';
import {Pagination} from '../components/Pagination/Pagination';
import {Posts} from '../components/Posts/Posts';

export default function ProjectsPage({data, pageContext}) {
  const projects = data.projects.nodes;
  projects.forEach((project) => {
    project.id = project._id;
    project.h2InsteadOfh3 = true;
    project.title = project.projectTitle;
    project.linkUrl = `/projects/${project.slug.current}`;
    project.meta = project.lastWorkedOn ? 'Project last worked on ' + project.lastWorkedOn : 'Project ongoing';
    project.excerpt.slice(-3) != '...' ? project.excerpt = project.excerpt +'...' : '';
  });
  return (
    <Layout title="Projects">
      <Posts posts={projects}/>
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
    ){
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
