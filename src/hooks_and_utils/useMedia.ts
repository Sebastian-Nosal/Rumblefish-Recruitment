import { useState, useEffect } from 'react';

export default function useMedia(query: string) {
  const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener("change",handleChange);
    return () => {
      mediaQueryList.removeEventListener("change",handleChange);
    };
  }, [query]);

  return matches;
}