const colors = {
  primary: "#8C2035",
  secondary: "#574142",
  tertiary: "#BFA5A6",
  black: "#000000",
  white: "#FFFFFF",
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
    backgroundColor: "rgba(252,252,252, 0.9)",
    shadow: "rgba(173,168,182, 0.5)",
  },
  navigationLink: {
    color: {
      default: "#ADA8B6",
      highlighted: "#8C2035",
      selected: "#1A1423",
    },
  },
  pageHeading: {
    color: "#FCFCFC",
    backgroundColor: "#8C2035",
    backgroundImage: `linear-gradient(19deg, ${"#8C2035"} 0%, ${"#ADA8B6"} 100%)`,
  },
  footer: {
    color: "#474350",
    backgroundColor: "#ADA8B6",
    backgroundImage: `linear-gradient(0deg, ${"#ADA8B6"} 0%, ${"#FCFCFC"} 100%)`,
  },
}
