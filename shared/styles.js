import { Global } from "@emotion/core";

const mediaQueries = {
  dark: "@media (prefers-color-scheme: dark)",
  light: "@media (prefers-color-scheme: dark)",
  small: "@media only screen and (max-width: 600px)",
  root: ":root",
};

const tokens = {
  white: "#ffffff",
  black: "#000000",
  dark: "#151515",
  light: "#ededed",
  darkOverlay: "#ededed10",
  lightOverlay: "#15151510",
  padding: "2rem",
  lightBorder: "#cccccc",
  darkBorder: "#333333",
  lightPrimary: "#006cca",
  darkPrimary: "#0088ff",
  shadow: "#00000020",
  maxWidth: "800px",
};

const theme = {
  [mediaQueries.root]: {
    "--padding": tokens.padding,
    "--background": tokens.light,
    "--text": tokens.dark,
    "--border": tokens.lightBorder,
    "--primary": tokens.lightPrimary,
    "--link": "var(--primary)",
    "--shadow-color": tokens.shadow,
    "--white": tokens.white,
    "--overlay": tokens.lightOverlay,
    "--max-width": tokens.maxWidth,
    [mediaQueries.dark]: {
      "--background": tokens.dark,
      "--text": tokens.light,
      "--border": tokens.darkBorder,
      "--overlay": tokens.darkOverlay,
      "--primary": tokens.darkPrimary,
    },
  },
};

const base = {
  "html, body": {
    padding: 0,
    margin: 0,
    background: "var(--background)",
    color: "var(--text)",
    fontFamily: "sans-serif",
    height: "100%",
  },
  "*": {
    lineHeight: "2rem",
    boxSizing: "border-box",
  },
  main: {
    padding: "var(--padding)",
  },
  header: {
    padding: 0,
    h1: {
      marginTop: 0,
    },
  },
  article: {
    width: "100%",
    maxWidth: "var(--max-width)",
  },
  nav: {
    background: "var(--background)",
    position: "sticky",
    top: 0,
    padding: 0,
    borderBottom: "1px solid var(--border)",
    display: "flex",
    padding: "calc(var(--padding) / 2)",
    flexDirection: "row",
    overflowX: "scroll",
    boxShadow: "0px 0px 0.5rem var(--shadow-color)",
    zIndex: 1,
    a: {
      padding: "calc(var(--padding) / 2)",
      fontWeight: "bold",
      textDecoration: "none",
      "&.active": {
        background: "var(--overlay)",
        borderRadius: "0.5rem",
      },
    },
  },
  a: {
    color: "var(--link)",
  },
  img: {
    maxWidth: "var(--max-width)",
    width: "100%",
  },
  li: {
    padding: "calc(var(--padding) / 4) 0",
  },
  blockquote: {
    textAlign: "left",
    width: "100%",
    maxWidth: "var(--max-width)",
    footer: {
      fontStyle: "italic",
      fontWeight: "bold",
    },
  },
  "#__next": {
    height: "auto !important",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  ".slide": {
    flexDirection: "row",
    maxWidth: "var(--max-width)",
    display: "flex",
    border: "1px solid var(--border)",
    boxShadow: "0px 0px 0.5rem var(--shadow-color)",
    background: "var(--overlay)",
    [mediaQueries.small]: {
      flexDirection: "column",
    },
    img: {
      objectFit: "cover",
      width: "40%",
      margin: "0 auto",
      [mediaQueries.small]: {
        objectPosition: "top",
        width: "100%",
        maxHeight: "15rem",
      },
    },
    ul: {
      margin: "0 0 0 1rem",
      padding: "var(--padding)",
    },
  },
  ".center": {
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "calc(var(--padding) * 2)",
    textAlign: "center",
    margin: "auto",
  },
  ".project": {
    flexDirection: "row",
    maxWidth: "var(--max-width)",
    display: "flex",
    border: "1px solid var(--border)",
    boxShadow: "0px 0px 0.5rem var(--shadow-color)",
    background: "var(--overlay)",
    marginBottom: "var(--padding)",
    [mediaQueries.small]: {
      flexDirection: "column",
    },
    a: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
    article: {
      padding: "var(--padding)",
    },
    img: {
      objectFit: "cover",
      width: "30%",
      maxWidth: "14rem",
      [mediaQueries.small]: {
        objectPosition: "top",
        width: "100%",
        maxWidth: "100%",
        maxHeight: "14rem",
      },
    },
  },
  ".react-pdf__Page": {
    zIndex: 0,
  },
  ".react-pdf__Page__svg": {
    backgroundColor: "transparent !important",
    "& *": {
      fill: "transparent !important",
    },
  },
  ".react-pdf__Page__textContent": {
    color: "var(--text) !important",
  },
};
export const globalStyles = (
  <Global
    styles={{
      ...theme,
      ...base,
    }}
  />
);
