import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localData, setLocalData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialValue;
  });

  const updateLocalData = (newData) => {
    setLocalData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return [localData, updateLocalData];
}

export default useLocalStorage;
