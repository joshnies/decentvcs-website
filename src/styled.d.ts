import "solid-styled-components";

declare module "solid-styled-components" {
  export interface DefaultTheme {
    colors: {
      neutral: {
        0: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      primary: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      info: {
        100: string;
        200: string;
        300: string;
      };
      success: {
        100: string;
        200: string;
        300: string;
      };
      warning: {
        100: string;
        200: string;
        300: string;
      };
      error: {
        100: string;
        200: string;
        300: string;
      };
    };
    shadows: {
      large: string;
    };
  }
}