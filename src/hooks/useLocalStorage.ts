import React, { useState } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
  { serialize = JSON.stringify, deserialize = JSON.stringify } = {},
): [string, typeof setState] => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }

    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  const prevKeyRef = React.useRef(key);

  // React.useEffect(() => {
  //   const prevKey = prevKeyRef.current;
  //   if (prevKey !== key) {
  //     window.localStorage.removeItem(prevKey);
  //   }
  //   prevKeyRef.current = key;
  //   window.localStorage.setItem(key, serialize(state));
  // }, [key, state, serialize]);

  return [state, setState];
};
