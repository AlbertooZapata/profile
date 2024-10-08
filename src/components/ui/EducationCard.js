import React from "react";
import { Box, Typography } from "@mui/material";

const EducationCard = ({
  icon: Icon,
  school,
  title,
  description,
  rangeYears,
}) => {
  return (
    <Box
      sx={{
        marginBottom: "0px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: 2,
        borderRadius: "8px",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(27, 94, 32, 0.2)",
          color: "#4caf50",
        }}
      >
        <Icon size={24} />
      </Box>

      <Box sx={{ marginLeft: 2, flexGrow: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>
            {school}
          </Typography>
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
              flexShrink: 0,
            }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              {rangeYears}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default EducationCard;
