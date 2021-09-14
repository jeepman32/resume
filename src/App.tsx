import { ThemeProvider, createTheme } from "@material-ui/core";
import Layout from "./Layout";

const defaultTheme = createTheme();
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
      margin: defaultTheme.spacing(2, 0, 1, 0),
    },
    subtitle2: {
      fontSize: "9pt",
      fontStyle: "italic",
      color: defaultTheme.palette.grey[900],
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
