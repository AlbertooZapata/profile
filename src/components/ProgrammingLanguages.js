// src/components/Header.js
import React from "react";
import { Box, Typography } from "@mui/material";
import PrimaryBadge from "./ui/PrimaryBadge";
import {
  Code2,
  FileCode,
  FileJson2,
  Braces,
  SquareDashedBottomCode,
  Code,
} from "lucide-react";

const ProgrammingLanguages = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        color="#9e9e9e"
        sx={{
          fontWeight: "bold",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "10px",
        }}
      >
        Programming Languages
      </Typography>

      <Box
        sx={{
          marginLeft: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center", // center on mobile
            sm: "flex-start", // Left on big screens
          },
          width: "100%",
        }}
      >
        <PrimaryBadge icon={FileJson2} text="C#" />
        <PrimaryBadge icon={FileCode} text="Java" />
        <PrimaryBadge icon={Braces} text="Kotlin" />
        <PrimaryBadge icon={Code2} text="Php" />
        <PrimaryBadge icon={SquareDashedBottomCode} text="Javascript" />
        <PrimaryBadge icon={Code} text="TypeScript" />
      </Box>
    </Box>
  );
};

export default ProgrammingLanguages;
