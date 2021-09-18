import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import useTempoStrings from '../utils/useTempoStrings';

import {SelectedTempoStrings} from '../components/SelectedTempoStrings/SelectedTempoStrings';
import {Layout} from '../components/Layout/Layout';

const ButtonContainerStyles = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const TempoStringStyles = styled.div`
  cursor: pointer;
`;

export default function TempoStringsPage({data}) {
  const tempoStrings = data.tempoStrings.edges[0].node;

  const {
    selected,
    addTempoString,
    removeTempoString,
    setSelectedTempoString,
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
      <h2>{tempoStrings.title}</h2>
      <div onSubmit={submitOrder}>
        <fieldset disabled={loading} className="options">
          <legend>Click to Select</legend>
          {tempoStrings.tempoString.map((tempoString, index) => (
            <TempoStringStyles key={index}
              onClick={() =>
                addTempoString(tempoString)
              }>
              <p>{tempoString}</p>
            </TempoStringStyles>
          ))}
          <ButtonContainerStyles>
            <button onClick={() => setSelectedTempoString(tempoStrings.tempoString)
            }>Select All</button>
            <button onClick={() => copyToClipboard(tempoStrings.tempoString)}>Copy All</button>
          </ButtonContainerStyles>
        </fieldset>
        <fieldset className="selectedOptions">
          <legend>Selected</legend>
          <SelectedTempoStrings
            selected={selected}
            removeTempoString={removeTempoString}
            /* tempoStrings={tempoStrings}*/
          />
          <ButtonContainerStyles>
            <button onClick={() => setSelectedTempoString([])}>Clear</button>
            <button onClick={() => copyToClipboard(selected)}>Copy</button>
          </ButtonContainerStyles>
        </fieldset>
        <br/>
        <sub>{tempoStrings.credit}</sub>
      </div>
    </Layout>
  );
}

function copyToClipboard(selected) {
  const textarea = document.createElement('textarea');
  textarea.textContent = '';

  for (let i = 0; i < selected.length; i++) {
    textarea.textContent += selected[i]+'. ';
  }

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
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
