import Paper from "@material-ui/core/Paper";
import styled from "@material-ui/core/styles/styled";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("ts", ts);

const StyledPaper = styled(Paper)(({ theme: { spacing } }) => ({
  borderRadius: spacing(1),
  overflow: "hidden",
}));

const CodePaper = ({ codeString }: { codeString: string }) => {
  return (
    <StyledPaper elevation={5}>
      <SyntaxHighlighter
        customStyle={{
          fontSize: "11pt",
          padding: "2em",
          margin: "-1em",
        }}
        language="ts"
        style={prism}
      >
        {codeString}
      </SyntaxHighlighter>
    </StyledPaper>
  );
};

export default CodePaper;
