import Paper from "@material-ui/core/Paper";
import styled from "@material-ui/core/styles/styled";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("typescript", typescript);

const StyledPaper = styled(Paper)(({ theme: { spacing } }) => ({
  borderRadius: spacing(1),
  overflow: "hidden",
}));

const CodePaper = ({ codeString }: { codeString: string }) => {
  return (
    <StyledPaper elevation={5}>
      <SyntaxHighlighter
        customStyle={{
          fontSize: "10.5pt",
          padding: "2em",
          margin: "-1em",
          fontFamily: `"IBM Plex mono", monospace`,
        }}
        language="typescript"
        style={prism}
      >
        {codeString}
      </SyntaxHighlighter>
    </StyledPaper>
  );
};

export default CodePaper;
