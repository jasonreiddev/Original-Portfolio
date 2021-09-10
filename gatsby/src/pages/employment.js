import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Posts from '../components/Posts';

export default function EmploymentPage({data, pageContext}) {
  const positions = data.positions.nodes;

  positions.forEach((position) => {
    position.id = position._id;
    position.h2InsteadOfh3 = true;
    position.title = position.jobTitle;
    position.linkUrl = `/employment/${position.slug.current}`;
    position.meta = `${position.startDate} - ${position.currentJob ? 'Ongoing' : position.endDate}`;
    position.excerpt = `Working at ${position.organisation.organisation}`;
  });

  return (
    <Layout title="Employment">
      <Posts posts={positions}/>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.positions.totalCount}
        currentPage={pageContext.currentPage || 'All'}
        skip={pageContext.skip}
        base="/employment"
      />
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 99999) {
    positions: allSanityPosition(
        sort: {fields: endDate, order: DESC}
        filter: {hideOnEmployment: {eq: false}}
        limit: $pageSize, skip: $skip
      ){
        totalCount
        nodes {
          jobTitle
          currentJob
          endDate
          startDate
          organisation {
            organisation
          }
          slug {
            current
          }
        }
      }
    }
`;
