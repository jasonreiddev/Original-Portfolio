import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';

export default function EmploymentPage({data, pageContext}) {
  const positions = data.positions.nodes;

  positions.forEach((position) => {
    position.endDate = position.currentJob ? 'Ongoing' : position.endDate;
  });

  return (
    <Layout title="Employment">
      <ul className="posts" style={{margin: '0', padding: '0', listStyleType: 'none'}}>
        {positions.map((position, index) => (
          <li className="post" key={`${index}-cl`}>
            <h2>
              <Link to={`/employment/${position.slug.current}/`}>{position.jobTitle}</Link>
            </h2>
            <p className="meta">
              <span>{position.startDate}{position.endDate && <> - {position.endDate}</>}</span>
            </p>
            <p>
              <Link to={`/employment/${position.slug.current}/`}>
                <span className="excerpt">Working at {position.organisation.organisation}</span>...
              </Link>
            </p>
          </li>
        ))
        }
        <Pagination
          pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
          totalCount={data.positions.totalCount}
          currentPage={pageContext.currentPage || 'All'}
          skip={pageContext.skip}
          base="/employment"
        />
      </ul>
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
