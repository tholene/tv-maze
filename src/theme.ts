import { Theme } from "@emotion/react";

export const MAX_WIDTH = "900px";

type Spacing = "large" | "medium" | "small" | "xSmall" | "xxSmall" | "xxxSmall";

export const Spacings: Record<Spacing, string> = {
  large: "1.5rem",
  medium: "1rem",
  small: "0.75rem",
  xSmall: "0.5rem",
  xxSmall: "0.25rem",
  xxxSmall: "0.125rem",
};

type Device = "mobile";

export const BreakPoints: Record<Device, string> = {
  mobile: "768px",
};

const theme = {
  app: {
    foreground: "#a3b18a",
    primary: "#588157",
    accent: "#3a5a40",
    critical: "#344e41",
  },
  text: {
    color: "rgb(0,0,0);",
  },
} as Theme;

export default theme;
