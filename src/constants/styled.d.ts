import 'styled-components';
import { Theme } from './themes';

/* Declare theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    borderRadius: string;
    breakpoints: {
      xs: string;
      small: string;
      med: string;
      lrg: string;
    };
    colors: {
      primary50: string;
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;
      primary900: string;
      text: string;
      neutral50: string;
      neutral100: string;
      neutral200: string;
      neutral300: string;
      neutral400: string;
      neutral500: string;
      neutral600: string;
      neutral700: string;
      neutral800: string;
      neutral900: string;
      secondary300: string;
      secondary200: string;
      secondary400: string;
      background: string;
      border: string;
      white: string;
      success500: string;
      success700: string;
      error500: string;
      error700: string;
      error100: string;
      warning100: string;
      warning500: string;
      warning700: string;
    };
    fontFamily: {
      default: string;
      headings: string;
    };
    fontSize: {
      default: string;
      xxSmall: string;
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
      xxxLarge: string;
      xxxxLarge: string;
    };
    heights: {
      el: string;
      navbar: string;
    };
    margins: {
      small: string;
      default: string;
      med: string;
      double: string;
      triple: string;
      quad: string;
    };
    transition: string;
  }
}
