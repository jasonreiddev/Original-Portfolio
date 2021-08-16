import React, {useState} from 'react';

const TempoStringsContext = React.createContext([]);

export function TempoStringsProvider({children}) {
  const [selected, setSelected] = useState([]);
  return (
    <TempoStringsContext.Provider value={[selected, setSelected]}>
      {children}
    </TempoStringsContext.Provider>
  );
}

export default TempoStringsContext;
