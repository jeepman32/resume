import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CodePaper from "./components/CodePaper";

const App = () => {
  return (
    <div style={{ width: "210mm", padding: "0.5in" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h1">Lorem ipsum.</Typography>
        </Grid>
        <Grid item xs={5}>
          <CodePaper codeString={""} />
        </Grid>
        <Grid
          item
          xs={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>
            Lorem ipsum.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CodePaper codeString={""} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Prior Experience</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
