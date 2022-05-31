import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    app: {
      foreground: string;
      primary: string;
      accent: string;
      critical: string;
    };
    text: {
      color: string;
    };
  }
}
