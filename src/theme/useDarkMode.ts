import { useEffect } from 'react';
import { usePrefersDarkMode } from './usePrefersDarkMode';
import { useLocalStorage } from '~/hooks/useLocalStorage';

export const useDarkMode = () => {
  const [isEnabled, setIsEnabled] = useLocalStorage('dark-mode', undefined);
  const prefersDarkMode = usePrefersDarkMode();

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;
  console.log('IS ENABLED: ', isEnabled);
  console.log('ENABLED: ', enabled);

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  }, [enabled]);

  return [enabled, setIsEnabled];
};
