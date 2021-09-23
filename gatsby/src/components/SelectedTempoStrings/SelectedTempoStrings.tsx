import React from 'react';

import {ContainerStyles} from './SelectedTempoStrings.styles';

interface SelectedTempoStringsProps{
  selected?: any;
  removeTempoString?: any;
}

export const SelectedTempoStrings = (
    {selected,
      removeTempoString,
      /* tempoStrings,*/
    }:SelectedTempoStringsProps ) => {
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
};
