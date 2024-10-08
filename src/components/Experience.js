import React from "react";
import { Box, Typography } from "@mui/material";
import ExperienceCard from "./ui/ExperienceCard";
import {
  Code2,
  Smartphone,
  SquareDashedBottomCode,
  Code,
  SquareLibrary,
  FileCode,
  Braces,
  RefreshCw,
  Database,
  Server,
  Cloud,
} from "lucide-react";

const Experience = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        color="#9e9e9e"
        sx={{
          fontWeight: "bold",
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "10px",
        }}
      >
        Experience
      </Typography>

      <Box>
        <ExperienceCard
          icon={Code2}
          company={"True Insurtech Solutions"}
          role={"Software developer engineer"}
          description={
            "I developed and optimized enterprise applications using React.js and C# for insurance companies"
          }
          rangeYears={"2022 - 2024"}
          languagesOrTools={[
            [SquareDashedBottomCode, "Javascript"],
            [Code, "Typescript"],
            [Code2, "C#"],
            [SquareLibrary, "React Js."],
            [Server, "Microsoft Azure"],
            [RefreshCw, "CI/CD"],
            [Database, "SQL Server"],
            [Cloud, "DevOps"],
          ]}
        />
        <ExperienceCard
          icon={Smartphone}
          company={"Intercam Banco"}
          role={"Android developer"}
          description={
            "I developed and optimized mobile applications using Kotlin and Java, and integrated REST APIs into financial systems"
          }
          rangeYears={"2021 - 2022"}
          languagesOrTools={[
            [FileCode, "Java"],
            [Braces, "Kotlin"],
            [Server, "Firebase"],
          ]}
        />
        <ExperienceCard
          icon={Code2}
          company={"Malmur"}
          role={"Full stack developer"}
          description={
            " I implemented microservices that improved scalability and response time in enterprise applications for airlines"
          }
          rangeYears={"2019 - 2021"}
          languagesOrTools={[
            [FileCode, "Java"],
            [SquareLibrary, "Laravel"],
            [Code2, "Php"],
            [Server, "AWS"],
            [SquareLibrary, "Spring Boot"],
            [Code2, "Linux"],
          ]}
        />
      </Box>
    </Box>
  );
};

export default Experience;
