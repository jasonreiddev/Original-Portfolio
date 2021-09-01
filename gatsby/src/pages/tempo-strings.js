import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import useTempoStrings from '../utils/useTempoStrings';
import SelectedTempoStrings from '../components/SelectedTempoStrings';
import styled from 'styled-components';

const ButtonContainerStyles = styled.div`
  display:flex;
  justify-content: flex-end;
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
      <div onSubmit={submitOrder}>
        <fieldset disabled={loading} className="options">
          <legend>{tempoStrings.title}</legend>
          {tempoStrings.tempoString.map((tempoString, index) => (
            <div key={index}
              style={{cursor: 'pointer'}}
              onClick={() =>
                addTempoString(tempoString)
              }>
              <p>{tempoString}</p>
            </div>
          ))}
          <ButtonContainerStyles>
            <button onClick={() => setSelectedTempoString(tempoStrings.tempoString)
            }>Select All</button>
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
            <button onClick={() => copyToClipboard()}>Copy</button>
          </ButtonContainerStyles>
        </fieldset>
        <br/>
        <sub>{tempoStrings.credit}</sub>
      </div>
    </Layout>
  );
}

function copyToClipboard() {
  const textarea = document.createElement('textarea');
  textarea.textContent = '';

  const StringsToCopy = document.getElementsByClassName('selected');
  for (let i = 0; i < StringsToCopy.length; i++) {
    textarea.textContent += StringsToCopy[i].innerHTML+'. ';
    console.log(textarea.textContent);
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
