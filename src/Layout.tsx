import styled from "@material-ui/core/styles/styled";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CodePaper from "./components/CodePaper";
import body from "./components/contents/body.json";
import interests from "./components/contents/interests.json";

// Ignore these imports as we need raw files, not compiled code for the ✨ effects ✨
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
import { useMemo, useState } from "react";
/* eslint-enable import/no-webpack-loader-syntax */

export type JobType = typeof body[number];

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

const fudgeFactor = 72; // px

const Layout = () => {
  const [jobsElement, setJobsElement] = useState<HTMLDivElement | null>(null);
  const [infraElement, setInfraElement] = useState<HTMLDivElement | null>(null);
  const jobsHeight = jobsElement ? jobsElement.scrollHeight : 0;
  const floatHeight = useMemo(() => {
    if (infraElement) {
      const infraHeight = infraElement.scrollHeight;

      return Math.max(0, jobsHeight - infraHeight + fudgeFactor);
    }

    return 0;
  }, [infraElement, jobsHeight]);

  console.log();

  return (
    <Box width="210mm" /* padding="1in" */>
      <div>
        <Header>
          <Typography variant="h1">{name} - CV</Typography>
          <Link
            variant="subtitle2"
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.REACT_APP_GITHUB_URL}
          >
            Check out my resume's source code!
          </Link>
        </Header>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={4}
        >
          <Box marginRight={2}>
            <CodePaper codeString={contact} />
          </Box>
          <Box marginLeft={2}>
            <Typography>{blurb}</Typography>
          </Box>
        </Box>
        <Box marginTop={4}>
          <CodePaper codeString={attributes} />
        </Box>
        <Box marginTop={4}>
          <div style={{ float: "right", height: floatHeight }} />
          <div
            ref={setInfraElement}
            style={{ float: "right", clear: "right", marginLeft: 32 }}
          >
            <div style={{ height: 24 }} />
            <CodePaper codeString={capabilities} />
            <div style={{ height: 48 }} />
            <CodePaper codeString={awards} />
          </div>
          <TitleWrapper>
            <Typography variant="h2">Prior Experience</Typography>
          </TitleWrapper>
          <div ref={setJobsElement}>{body.map(Job)}</div>
        </Box>
      </div>
      <Interests>
        <TitleWrapper>
          <Typography variant="h2">Personal Interests</Typography>
        </TitleWrapper>
        <Typography variant="body1">
          {interests.map((interest) =>
            typeof interest === "string" ? (
              <p>{interest}</p>
            ) : (
              <p style={interest.style}>{interest.text}</p>
            )
          )}
        </Typography>
      </Interests>
    </Box>
  );
};

export default Layout;
