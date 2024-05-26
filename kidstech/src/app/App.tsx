import { useLayoutEffect } from 'react';
import { HomePage } from '@/pages/HomePage';
import { useTheme } from '@/shared/providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <HomePage />
  )
}
