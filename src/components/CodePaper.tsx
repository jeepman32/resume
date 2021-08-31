import Paper from "@material-ui/core/Paper";

import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

SyntaxHighlighter.registerLanguage("ts", ts);

const CodePaper = ({ codeString }: { codeString: string }) => {
  return (
    <Paper elevation={5} style={{ borderRadius: 8, overflow: "hidden" }}>
      <SyntaxHighlighter
        customStyle={{ margin: 0, fontSize: "11pt" }}
        language="ts"
        style={prism}
      >
        {codeString}
      </SyntaxHighlighter>
    </Paper>
  );
};

export default CodePaper;
