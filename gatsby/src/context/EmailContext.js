import React, {useState} from 'react';

const EmailContext = React.createContext();

export function TempoStringsProvider({children}) {
  const [selected, setSelected] = useState([]);
  return (
    <EmailContext.Provider value={[selected, setSelected]}>
      {children}
    </EmailContext.Provider>
  );
}

export default EmailContext;
