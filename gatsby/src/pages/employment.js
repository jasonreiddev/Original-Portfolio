import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

export default function EmploymentPage({data}) {
  let positions = data.positions.nodes;
  console.log(positions);

  positions.forEach((position) => {
    position.endDate = position.currentJob ? 'ongoing' : position.endDate;
  });

  positions = positions.sort(
      (a, b) => Date.parse(b.startDate) - Date.parse(a.startDate),
  );

  return (
    <Layout title="Employment">
      {positions.map((position, index) => (
        <div key={`${index}-cl`}>
          {console.log(position.jobTitle)}
          <h2>{position.jobTitle}</h2>
          <h3>{position.organisation.organisation}</h3>
          <p>{position.startDate}{position.endDate && <> - {position.endDate}</>}</p>
        </div>
      ))
      }
      {console.log(positions)}
    </Layout>
  );
}

export const query = graphql`
  query PositionQuery {
    positions: allSanityPosition {
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
