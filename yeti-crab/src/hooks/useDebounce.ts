import { useEffect, useState } from 'react';

export const useDebounce = (value: string): string => {
 const [debouncedValue, setDebouncedValue] = useState<string>(value);
 useEffect(() => {
  const t = setTimeout(() => {
   setDebouncedValue(value);
  }, 1000);

  return () => {
   clearTimeout(t);
  };
 }, [value]);
 return debouncedValue;
};
