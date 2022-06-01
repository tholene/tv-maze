import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    app: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    text: {
      color: string;
    };
  }
}
