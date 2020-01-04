const colors = {
  primary: "#8C2035",
  secondary: "#574142",
  tertiary: "#BFA5A6",
  black: "#000000",
  white: "#FFFFFF",
  facebook: "#3b5998",
  shadow: "rgba(87, 65, 66, 0.25)",
}

export const theme = {
  colors: colors,
  font: {
    family: {
      primary: `'Roboto', sans-serif`,
      secondary: `'IBM Plex Sans', sans-serif`,
    },
  },
  header: {
    backgroundColor: "rgb(252,252,252, 0.9)",
    shadow: "rgb(173,168,182, 0.5)",
  },
  navigationLink: {
    color: {
      default: "#ADA8B6",
      highlighted: "#8C2035",
      selected: "#1A1423",
    },
  },
  pageHeading: {
    color: "#fcfcfc",
    backgroundColor: "#8c2035",
    backgroundImage: `linear-gradient(19deg, ${"#8c2035"} 0%, ${"#ada8b6"} 100%)`,
  },
}
