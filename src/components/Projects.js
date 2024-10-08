// src/components/Header.js
import React from "react";
import { Box, Typography } from "@mui/material";
import ProjectCard from "./ui/ProjectCard";
import {
  Code2,
  Smartphone,
  Laptop,
  Server,
  MapPin,
  FileCode,
  SquareDashedBottomCode,
  Braces,
  SquareLibrary,
  Database,
} from "lucide-react";

const Projects = () => {
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
        Projects
      </Typography>

      <Box>
        <ProjectCard
          icon={Smartphone}
          company={"Gruas La Paz"}
          role={"Full Stack mobile developer"}
          description={
            "I developed an Android mobile application and its backend for inventory management and crane service administration."
          }
          languagesOrTools={[
            [Braces, "Kotlin"],
            [SquareLibrary, "Laravel"],
            [Code2, "Php"],
            [Server, "Firebase"],
            [MapPin, "Google Maps Platform"],
            [Server, "Google Console"],
            [Database, "MYSQL"],
            [FileCode, "RESTFUL API"],
          ]}
        />
        <ProjectCard
          icon={Smartphone}
          company={"Promociones Pacifico"}
          role={"Full Stack mobile developer"}
          description={
            "I Developed a mobile application for managing sales, inventory, payments and customer relationships for the company."
          }
          languagesOrTools={[
            [FileCode, "Java"],
            [SquareLibrary, "Laravel"],
            [Code2, "Php"],
            [Server, "Firebase"],
            [MapPin, "Google Maps Platform"],
            [Server, "Google Console"],
            [Database, "MYSQL"],
            [FileCode, "RESTFUL API"],
          ]}
        />

        <ProjectCard
          icon={Laptop}
          company={"El Chicho Jr"}
          role={"Full stack developer"}
          description={
            "I Developed all stages of a web application for inventory management and sales tracking for the car retail company."
          }
          languagesOrTools={[
            [SquareDashedBottomCode, "Javascript"],
            [SquareLibrary, "React Jr."],
            [Database, "MYSQL"],
          ]}
        />
      </Box>
    </Box>
  );
};

export default Projects;
