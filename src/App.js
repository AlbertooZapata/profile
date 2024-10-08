import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import About from "./components/About";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import KnowledgeAndTools from "./components/KnowledgeAndTools";
import LinksInformation from "./components/ui/LinksInformation";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#111210",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="App"
        display="flex"
        flexDirection="column"
        sx={{
          backgroundColor: "#111210",
          width: "100%",
          maxWidth: "850px",
          padding: "20px",
          marginX: "auto",
        }}
      >
        <Header />
        <About />
        <ProgrammingLanguages />
        <Experience />
        <Projects />
        <KnowledgeAndTools />
        <Education />
        <LinksInformation />
      </Box>
    </Box>
  );
}

export default App;
