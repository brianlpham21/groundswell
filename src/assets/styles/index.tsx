import { createGlobalStyle } from 'styled-components';
import { themes } from 'constants/themes';

const { borderRadius, colors, fontFamily, fontSize, margins } = themes.main;

export const GlobalStyle = createGlobalStyle`
  
  #root {
    height: 100%;
    > [class*="body-"] {
      height: 100%;
    }
  }

  html,
  body {
    height: 100%;
    margin: 0;
    width: 100%;
  }

  body {
    background: ${colors.primary100};
    box-sizing: border-box;
    font-family: ${fontFamily.default};
  }

  .App {
    box-sizing: border-box;
    height: 100%;
    max-width: 100%;
    overflow: scroll;
    padding: 0;
    width: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.neutral700};
    font-family: ${fontFamily.headings};
    line-height: 1.4;
    margin: 0;
  }

  h1 {
    font-size: ${fontSize.xxLarge};
  }

  h2 {
    font-size: ${fontSize.xLarge};
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  h3 {
    font-size: ${fontSize.large};
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.17;
  }

  h4 {
    font-size: ${fontSize.medium};
    font-weight: 400;
    letter-spacing: -.02em;
    margin: ${margins.med} auto;
    max-width: 75%;
    text-align: center;
    line-height: 1.17;
  }

  h5 {
    font-size: ${fontSize.medium};
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.25;
    margin-top: ${margins.small};
  }

  h6 {
    font-size: ${fontSize.xSmall};
  }

  p {
    color: ${colors.neutral700};
    font-size: ${fontSize.xSmall};
    margin-bottom: 0;
  }

  a {
    color: ${colors.secondary300};
    text-decoration: none;
    transition: all .2s ease-in-out;
    &:hover {
      color: ${colors.secondary400};
    }
  }
  
  ul {
    margin: 8px 0 0 16px;
    padding: 0;
    li {
      margin-bottom: 4px;
    }
  }
  
  hr {
    background: ${colors.neutral100};
    border: none;
    height: 1px;
    width: 100%;
  }
  
  /* Global Fluent UI override specifications */
  .ms-Button {
    width: 100%;
    .ms-Button-flexContainer {
      justify-content: center;
    }
    i {
      order: 1;
    }
  }
  
  button, [class*="ms-Button"] {
    border-radius: ${borderRadius};
    transition: background-color .15s ease-in-out;
    .ms-Button-label {
      white-space: nowrap;
    }
    &.ms-Nav-link {
      border-radius: 0;
    }
    &.is-disabled {
      border-color: ${colors.neutral300};
      color: ${colors.neutral400};
      &.ms-Button--icon {
        background: transparent;
      }
    }
    &.ms-Button--primary {
      color: ${colors.text};
      &.is-disabled {
        background: ${colors.neutral100};
        border-color: ${colors.neutral100};
        color: ${colors.neutral400};
      }
    }
    &.ms-Button--action {
      font-weight: 500;
      padding: 0 16px;
      &.is-disabled {
        color: ${colors.neutral400};
      }
      .ms-Dropdown-items & {
        border-radius: 0;
        color: ${colors.neutral600};
        font-size: ${fontSize.xxSmall};
        font-weight: normal;
      }
    }
    [class*="icon-"] {
      color: inherit;
    }
    &[class*="dropdownItemSelected"] {
      border-radius: 0;
    }
    &:hover {
      [class*="icon-"] {
        color: inherit;
      }
    }
  }
`;
