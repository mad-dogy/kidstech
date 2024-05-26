import { useLayoutEffect } from 'react';

import { HomePage } from '@/pages/HomePage';
import { ThemeProvider, useTheme } from '@/shared/providers/ThemeProvider';

import '@/app/styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}
