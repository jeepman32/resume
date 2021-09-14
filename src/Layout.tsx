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

const InfraNarrow = styled("div")(({ theme: { spacing } }) => ({
  float: "right",
  marginLeft: spacing(2),
  width: `calc(((5 / 12) * 100%) - ${spacing(2)})`,
  "& > div:not(:last-child)": {
    marginBottom: spacing(6),
  },
}));

const BodyNarrow = styled("div")(({ theme: { spacing } }) => ({
  float: "left",
  marginRight: spacing(2),
  width: `calc(((7 / 12) * 100%) - ${spacing(2)})`,
  "& > div:last-child": {
    margin: "0",
  },
}));

const TitleWrapper = styled("div")(({ theme: { spacing } }) => ({
  margin: spacing(2, 0, 4, 0),
}));

const Interests = styled("div")(({ theme: { spacing } }) => ({
  paddingTop: spacing(4),
  clear: "both",
  pageBreakInside: "avoid",
}));

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gridArea: "header",
});

const bodySplit = 3;

const Layout = () => {
  return (
    <Box width="210mm" padding="0.5in">
      <div>
        <Header>
          <Typography variant="h1">{name} - CV</Typography>
          <Link variant="subtitle2" href="https://github.com/jeepman32/resume">
            Check out my resume's source code!
          </Link>
        </Header>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={4}
        >
          <Box marginRight={2} width="calc((4 / 12) * 100%)">
            <CodePaper codeString={contact} />
          </Box>
          <Box marginLeft={2} width="calc((8 / 12) * 100%)">
            <Typography>{blurb}</Typography>
          </Box>
        </Box>
        <Box marginTop={4}>
          <CodePaper codeString={attributes} />
        </Box>
        <Box marginTop={4}>
          <TitleWrapper>
            <Typography variant="h2">Prior Experience</Typography>
          </TitleWrapper>
          {body.slice(0, bodySplit).map(Job)}
        </Box>
        <div>
          <BodyNarrow>
            {body.slice(bodySplit, body.length - 1).map(Job)}
          </BodyNarrow>
          <InfraNarrow>
            <CodePaper codeString={capabilities} />
            <CodePaper codeString={awards} />
          </InfraNarrow>
        </div>
      </div>
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
