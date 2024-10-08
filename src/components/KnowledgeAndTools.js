// src/components/Header.js
import React from "react";
import { Box, Typography } from "@mui/material";
import PrimaryBadge from "./ui/PrimaryBadge";
import {
  SquareLibrary,
  Database,
  Server,
  MapPin,
  GitCompare,
  RefreshCw,
  Cloud,
} from "lucide-react";

const KnowledgeAndTools = () => {
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
        Knowledge and tools
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
        <PrimaryBadge icon={SquareLibrary} text="React js" />
        <PrimaryBadge icon={SquareLibrary} text="Laravel" />
        <PrimaryBadge icon={SquareLibrary} text="Symfony" />
        <PrimaryBadge icon={SquareLibrary} text="Spring Boot" />
        <PrimaryBadge icon={SquareLibrary} text="Node.js" />

        <PrimaryBadge icon={Database} text="SQL Server" />
        <PrimaryBadge icon={Database} text="MSQL" />
        <PrimaryBadge icon={Database} text="SQLite" />

        <PrimaryBadge icon={Server} text="AWS" />
        <PrimaryBadge icon={Server} text="Microsoft Azure" />
        <PrimaryBadge icon={Server} text="Google Firebase" />

        <PrimaryBadge icon={MapPin} text="Google Maps Platform" />
        <PrimaryBadge icon={GitCompare} text="Git" />
        <PrimaryBadge icon={Server} text="Google Play Console" />
        <PrimaryBadge icon={Server} text="Firebase" />
        <PrimaryBadge icon={RefreshCw} text="CI/CD" />
        <PrimaryBadge icon={Cloud} text="DevOps" />
      </Box>
    </Box>
  );
};

export default KnowledgeAndTools;
