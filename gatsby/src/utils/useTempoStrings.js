import {useContext} from 'react';
import TempoStringsContext from '../context/TempoStringsContext';

export default function useTempoStrings() {
  const [selected, setSelected] = useContext(TempoStringsContext);

  function addTempoString(addedTempoString) {
    setSelected([...selected, addedTempoString]);
  }

  function removeTempoString(index) {
    setSelected([
      ...selected.slice(0, index),
      ...selected.slice(index + 1),
    ]);
  }

  function setSelectedTempoString(setTempoString) {
    setSelected(setTempoString);
  }

  return {
    selected,
    addTempoString,
    removeTempoString,
    setSelectedTempoString,
  };
}
