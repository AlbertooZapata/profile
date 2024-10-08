import React from "react";
import { Box, Typography } from "@mui/material";
import SecondaryBadge from "./SecondaryBadge";

const ExperienceCard = ({
  icon: Icon,
  company,
  role,
  description,
  rangeYears,
  languagesOrTools,
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
            {company}
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
              // "&:hover": {
              //   backgroundColor: "rgba(46, 125, 50, 0.4)",
              //   transition: "background-color 0.2s ease",
              // },
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
          {role}
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          {description}
        </Typography>
        {languagesOrTools !== undefined && languagesOrTools.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: {
                xs: "flex-start", // center on mobile
                sm: "flex-start", // Left on big screens
              },
              width: "100%",
            }}
          >
            {/* TODO: improve this (Json obj) */}
            {languagesOrTools.map((item) => (
              <SecondaryBadge icon={item[0]} text={item[1]} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ExperienceCard;
