import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CodePaper from "./components/CodePaper";
import body from "./components/contents/body.json";
import interests from "./components/contents/interests.json";

/* eslint-disable import/no-webpack-loader-syntax */
// @ts-ignore
import attributes from "!!raw-loader!./components/contents/attributes.tsx";
// @ts-ignore
import contact from "!!raw-loader!./components/contents/contact.tsx";
// @ts-ignore
import blurb from "!!raw-loader!./components/contents/blurb.txt";
// @ts-ignore
import awards from "!!raw-loader!./components/contents/awards.tsx";
// @ts-ignore
import capabilities from "!!raw-loader!./components/contents/capabilities.tsx";
// @ts-ignore
import name from "!!raw-loader!./components/contents/name.txt";
import Job from "./components/Job";
import Link from "@material-ui/core/Link";
/* eslint-enable import/no-webpack-loader-syntax */

export type JobType = typeof body[number];

const GridContainer = styled("div")(({ theme: { spacing } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridGap: spacing(4),
  gridTemplateAreas: `
      "header header header header header header header header header header header header"
      "contact contact contact contact contact blurb blurb blurb blurb blurb blurb blurb"
      "attributes attributes attributes attributes attributes attributes attributes attributes attributes attributes attributes attributes"
      "body body body body body body body body body body body body"
      "bodyNarrow bodyNarrow bodyNarrow bodyNarrow bodyNarrow bodyNarrow bodyNarrow capabilities capabilities capabilities capabilities capabilities"`,
}));

const Narrow = styled("div")(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gridArea: "capabilities",
  "& > div:not(:last-child)": {
    marginBottom: spacing(6),
    "@media print": {
      marginBottom: spacing(13),
    },
  },
}));

const BodyNarrow = styled("div")({
  gridArea: "bodyNarrow",
  pageBreakInside: "avoid",
  "& > div:last-child": {
    margin: "0",
  },
});

const TitleWrapper = styled("div")(({ theme: { spacing } }) => ({
  margin: spacing(2, 0, 4, 0),
}));

const Interests = styled("div")(({ theme: { spacing } }) => ({
  marginTop: spacing(4),
  position: "relative",
  pageBreakInside: "avoid",
}));

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gridArea: "header",
});

const bodySplit = 3;

// capabilities
const Layout = () => {
  return (
    <Box width="210mm" padding="0.5in">
      <GridContainer>
        <Header>
          <Typography variant="h1">{name} - CV</Typography>
          <Link href="https://github.com/jeepman32/resume">
            Check out the source code!
          </Link>
        </Header>
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
          <TitleWrapper>
            <Typography variant="h2">Prior Experience</Typography>
          </TitleWrapper>
          {body.slice(0, bodySplit).map(Job)}
        </Box>
        <BodyNarrow>
          {body.slice(bodySplit, body.length - 1).map(Job)}
        </BodyNarrow>
        <Narrow>
          <CodePaper codeString={capabilities} />
          <CodePaper codeString={awards} />
        </Narrow>
      </GridContainer>
      <Interests>
        <TitleWrapper>
          <Typography variant="h2">Personal Interests</Typography>
        </TitleWrapper>
        <Typography variant="body1">
          {interests.map((interest) => (
            <p dangerouslySetInnerHTML={{ __html: interest }} />
          ))}
        </Typography>
      </Interests>
    </Box>
  );
};

export default Layout;
