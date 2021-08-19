import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export default function EmploymentPage({data, pageContext}) {
  const positions = data.positions.nodes;

  positions.forEach((position) => {
    position.endDate = position.currentJob ? 'ongoing' : position.endDate;
  });

  return (
    <Layout title="Employment">
      {positions.map((position, index) => (
        <div key={`${index}-cl`}>
          <h2>
            <Link to={`/employment/${position.slug.current}/`}>{position.jobTitle}</Link>
          </h2>
          <h3>{position.organisation.organisation}</h3>
          <p>{position.startDate}{position.endDate && <> - {position.endDate}</>}</p>
        </div>
      ))
      }
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
    positions: allSanityPosition(limit: $pageSize, skip: $skip) {
        totalCount
        nodes {
          jobTitle
          currentJob
          endDate
          salary
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
