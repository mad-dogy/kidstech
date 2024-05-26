import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App.tsx';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import '@/app/styles/index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
