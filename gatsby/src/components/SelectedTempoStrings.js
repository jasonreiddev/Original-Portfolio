import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.a`
  cursor: pointer;
`;

export default function SelectedTempoStrings({selected, removeTempoString /* tempoStrings,*/}) {
  return (
    <>
      {selected && selected.map((tempoString, index) => {
        // The following line would allow us to just pass IDs inside selected and get more data, not currently needed
        // const tempoString = tempoStrings.find((tempoString) => tempoString === singleTempoString);
        return (
          <ContainerStyles key={index}
            onClick={() => removeTempoString(index)}>
            <p>&times; {
              <span className="selected">
                {tempoString}
              </span>
            }</p>
          </ContainerStyles>
        );
      })}
    </>
  );
}
