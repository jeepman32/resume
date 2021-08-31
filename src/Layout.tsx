import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CodePaper from "./components/CodePaper";
import body from "./components/resumeContents/body.json";

/* eslint-disable import/no-webpack-loader-syntax */
// @ts-ignore
import attributes from "!!raw-loader!./components/resumeContents/attributes.tsx";
// @ts-ignore
import contact from "!!raw-loader!./components/resumeContents/contact.tsx";
// @ts-ignore
import blurb from "!!raw-loader!./components/resumeContents/blurb.txt";
// @ts-ignore
import interests from "!!raw-loader!./components/resumeContents/interests.txt";
// @ts-ignore
import awards from "!!raw-loader!./components/resumeContents/awards.tsx";
// @ts-ignore
import capabilities from "!!raw-loader!./components/resumeContents/capabilities.tsx";
// @ts-ignore
import name from "!!raw-loader!./components/resumeContents/name.txt";
/* eslint-enable import/no-webpack-loader-syntax */

const GridContainer = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: spacing(4),
  gridTemplateRows: "repeat(4, auto) 320px auto",
  gridTemplateAreas: `
      "header header header header header header header header header header header header"
      "contact contact contact contact contact blurb blurb blurb blurb blurb blurb blurb"
      "attributes attributes attributes attributes attributes attributes attributes attributes attributes attributes attributes attributes"
      "body body body body body body body body body body body body"
      "capabilities capabilities capabilities capabilities capabilities awards awards awards awards awards awards awards"
      "capabilities capabilities capabilities capabilities capabilities interests interests interests interests interests interests interests"`,
}));

const Layout = () => {
  return (
    <Box width="210mm" padding="0.35in">
      <GridContainer>
        <Box gridArea="header">
          <Typography variant="h1">{name} - CV</Typography>
        </Box>
        <Box gridArea="contact">
          <CodePaper codeString={contact} />
        </Box>
        <Box
          gridArea="blurb"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography>{blurb}</Typography>
        </Box>
        <Box gridArea="attributes">
          <CodePaper codeString={attributes} />
        </Box>
        <Box gridArea="body">
          <Typography variant="h2">Prior Experience</Typography>
          {body.map(
            ({
              title,
              company,
              team,
              startDate,
              endDate,
              description,
              duties,
              achievements,
            }) => (
              <div>
                <Typography>
                  <b>{title}</b>
                </Typography>
                <Typography>
                  <i>
                    {company}, {team ? team + ", " : ""}{startDate} to{" "}
                    {endDate ? endDate : "present"}
                  </i>
                </Typography>
                <Typography>{description}</Typography>
                <Typography>
                  <Typography variant="subtitle1">Key Duties</Typography>
                  <ul>
                    {duties.map((duty) => (
                      <li>{duty}</li>
                    ))}
                  </ul>
                </Typography>
                <Typography>
                  <Typography variant="subtitle1">Key Achievements</Typography>
                  <ul>
                    {achievements.map((achievement) => (
                      <li>{achievement}</li>
                    ))}
                  </ul>
                </Typography>
              </div>
            )
          )}
        </Box>
        <Box gridArea="capabilities">
          <CodePaper codeString={capabilities} />
        </Box>
        <Box gridArea="awards">
          <CodePaper codeString={awards} />
        </Box>
        <Box gridArea="interests">
          <Typography variant="body1">{interests}</Typography>
        </Box>
      </GridContainer>
    </Box>
  );
};

export default Layout;
