import { useEffect, useState } from 'react';

export function usePrefersDarkMode(): boolean {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect((): (() => void) => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handler = (): void => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDarkMode;
}
