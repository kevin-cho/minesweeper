import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export const useTheme = (): [ThemeMode, () => void, boolean] => {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: ThemeMode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const toggleTheme = () => {
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as ThemeMode | null;
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
