import React from "react";
import { Box } from "@mui/material";

const PrimaryBadge = ({ icon: Icon, text }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 0.75,
        borderRadius: "9999px",
        backgroundColor: "rgba(27, 94, 32, 0.2)",
        color: "#4caf50",
        margin: "4px",
        flexShrink: 0,
        "&:hover": {
          backgroundColor: "rgba(46, 125, 50, 0.4)",
          transition: "background-color 0.2s ease",
          cursor: "default",
        },
      }}
    >
      <Icon size={16} />
      <Box
        component="span"
        sx={{
          fontSize: "0.875rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

export default PrimaryBadge;
