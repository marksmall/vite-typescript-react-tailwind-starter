import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.component';

import { ThemeProvider } from './theme/theme.context';

import './i18n/i18n';

import './index.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider initialTheme="dark">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// Don't use MSW when docker running, only during local development.
if (import.meta.env.VITE_USE_MSW) {
  const { worker } = await import('~/mocks/browser');
  worker.start();
}
