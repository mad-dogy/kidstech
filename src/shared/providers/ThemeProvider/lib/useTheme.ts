import { useContext } from 'react';

import { Theme, ThemeContext } from '../model/ThemeContext';

interface IUseTheme {
  theme: Theme;
}

export const useTheme = (): IUseTheme => {
  const { theme } = useContext(ThemeContext);

  return {
    theme: theme || Theme.Light
  };
};
