import React, { FC, ReactElement } from 'react';

import { useDarkMode } from './useDarkMode';

import { MoonIcon } from './moon-icon.component';
import { SunIcon } from './sun-icon.component';

interface Props {
  className: string;
}

const LIGHT_LABEL = 'Activate Light Mode';
const DARK_LABEL = 'Activate Dark Mode';

export const ThemeSwitcher: FC<Props> = ({ className }): ReactElement => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      aria-label={isDark ? LIGHT_LABEL : DARK_LABEL}
      className={className}
      title={isDark ? LIGHT_LABEL : DARK_LABEL}
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
      {/* <div class="m-4 inline-grid grid-cols-2">

  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 col-start-1 row-start-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>

  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 m-1 col-start-2 row-start-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>

  <input type="checkbox" class="toggle bg-transparent col-start-1 row-start-1 col-span-2 [--b1:219_14%_80%] checked:[--b1:215_28%_17%]">
</div> */}
    </button>
  );
};
