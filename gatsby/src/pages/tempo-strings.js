import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import useTempoStrings from '../utils/useTempoStrings';
import SelectedTempoStrings from '../components/selectedTempoStrings';

export default function OrderPage({data}) {
  const tempoStrings = data.tempoStrings.edges[0].node;

  const {
    selected,
    addTempoString,
    removeTempoString,
    loading,
    message,
    submitOrder,
  } = useTempoStrings({
    tempoStrings,
  });

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <Layout title="Tempo Strings">
      <div onSubmit={submitOrder}>
        <fieldset disabled={loading} className="menu">
          <legend>Tempo Strings</legend>
          {tempoStrings.tempoString.map((tempoString, index) => (
            <div key={index}
              style={{cursor: 'pointer'}}
              onClick={() =>
                addTempoString({
                  id: tempoString,
                })
              }>
              <p>{tempoString}</p>
            </div>
          ))}
        </fieldset>
        <fieldset className="selected">
          <legend>Selected</legend>
          <SelectedTempoStrings
            selected={selected}
            removeTempoString={removeTempoString}
            /* tempoStrings={tempoStrings}*/
          />
        </fieldset>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    tempoStrings: allContentfulTempoString {
      edges {
        node {
          id
          tempoString
          title
          credit
        }
      }
    }
  }
`;
