import { ThemeProvider, createTheme } from "@material-ui/core";
import Layout from "./Layout";

const theme = createTheme({
  typography: {
    fontFamily: "'Atkinson Hyperlegible', sans-serif",
    h1: {
      fontSize: "28pt",
      fontWeight: 700,
    },
    h2: {
      fontSize: "14pt",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "9pt",
      textTransform: "uppercase",
      fontWeight: 700,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
