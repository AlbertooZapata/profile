import React from "react";
import { Box } from "@mui/material";

const SecondaryBadge = ({ icon: Icon, text }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1,
        py: 0.25,
        borderRadius: "9999px",
        backgroundColor: "#f4f5f312",
        color: "#9e9e9e",
        margin: "4px",
        flexShrink: 0,
        "&:hover": {
          backgroundColor: "#f4f5f333",
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
          //fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

export default SecondaryBadge;
