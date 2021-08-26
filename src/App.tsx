import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CodePaper from "./components/CodePaper";

/* eslint-disable import/no-webpack-loader-syntax */
// @ts-ignore
import attributes from "!!raw-loader!./components/resumeContents/attributes.tsx";
// @ts-ignore
import contact from "!!raw-loader!./components/resumeContents/contact.tsx";
/* eslint-enable import/no-webpack-loader-syntax */

const App = () => {
  return (
    <div style={{ width: "210mm", padding: "0.5in" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">title</Typography>
        </Grid>
        <Grid item xs={5}>
          <CodePaper codeString={contact} />
        </Grid>
        <Grid
          item
          xs={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>something???</Typography>
        </Grid>
        <Grid item xs={12}>
          <CodePaper codeString={attributes} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Prior Experience</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
