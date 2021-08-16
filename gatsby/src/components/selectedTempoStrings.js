import React from 'react';

export default function SelectedTempoStrings({selected, removeTempoString /* tempoStrings,*/}) {
  return (
    <>
      {selected && selected.map((tempoString, index) => {
        // The following line would allow us to just pass IDs inside selected and get more data, not currently needed
        // const tempoString = tempoStrings.find((tempoString) => tempoString === singleTempoString);
        return (
          <div key={index}
            style={{cursor: 'pointer'}}
            onClick={() => removeTempoString(index)}>
            <p>&times; {tempoString.id}</p>
          </div>
        );
      })}
    </>
  );
}
