import { DefaultTheme } from 'styled-components';

const appTheme: DefaultTheme = {
  borderRadius: '4px',
  breakpoints: {
    xs: '414px',
    small: '768px',
    med: '1024px',
    lrg: '1280px',
  },
  colors: {
    primary50: '#ecfcf9',     // primary['50']
    primary100: '#D6F9F2',    // primary['100']
    primary200: '#A9F3E3',    // primary['200']
    primary300: '#7cedd5',    // primary['300']
    primary400: '#50e6c6',    // primary['400']
    primary500: '#23E0B8',    // primary['500']
    primary600: '#22C7A4',    // primary['600']
    primary700: '#128169',    // primary['700']
    primary800: '#0B4F41',    // primary['800']
    primary900: '#041E19',    // primary['900']
    text:  '#1c1c1c',         // neutrals['900']
    neutral50: '#fcfcfc',     // neutrals['50']
    neutral100: '#f2f2f2',    // neutrals['100']
    neutral200: '#D9D9D9',    // neutrals['200']
    neutral300: '#BFBFBF',    // neutrals['300']
    neutral400: '#a6a6a6',    // neutrals['400']
    neutral500: '#8c8c8c',    // neutrals['500']
    neutral600: '#707070',    // neutrals['600']
    neutral700: '#545454',    // neutrals['700']
    neutral800: '#383838',    // neutrals['800']
    neutral900: '#1c1c1c',    // neutrals['900']
    secondary200: '#4698E6',  // secondary['200']
    secondary300: '#1d78cf',  // secondary['300']
    secondary400: '#155a9c',  // secondary['400']
    background: '#f9f9f9',
    border: '#bfbfbf',
    white: '#ffffff',
    success500: '#37871A',
    success700: '#3B5E18',
    error100: '#ffefef',
    error500: '#CA1C1C',
    error700: '#A72626',
    warning100: '#FFD58D',
    warning500: '#E9A52F',
    warning700: '#C68007',
  },
  fontFamily: {
    default: '"Inter", Roboto, "Helvetica Neue", sans-serif',
    headings: '"Karla", Roboto, "Helvetica Neue", sans-serif',
  },
  fontSize: {
    default: '14px',
    xxSmall: '12px',
    xSmall: '14px',
    small: '16px',
    medium: '20px',
    large: '24px',
    xLarge: '30px',
    xxLarge: '38px',
    xxxLarge: '44px',
    xxxxLarge: '56px',
  },
  margins: {
    small: '8px',
    default: '16px',
    med: '24px',
    double: '32px',
    triple: '48px',
    quad: '64px',
  },
  heights: {
    el: '32px',
    navbar: '64px',
  },
  transition: 'all .2s ease-in-out',
};

export type Theme = typeof appTheme;

export const themes = {
  main: appTheme
};
