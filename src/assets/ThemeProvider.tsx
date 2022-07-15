import { ThemeProvider as FluentThemeProvider, createTheme } from '@fluentui/react';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themePalette } from '../constants/palette';
import { themes } from '../constants/themes';

const appTheme = createTheme(themePalette);

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <FluentThemeProvider theme={appTheme}>
      <StyledThemeProvider theme={themes.main}>{children}</StyledThemeProvider>
    </FluentThemeProvider>
  );
};
