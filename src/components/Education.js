import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { GraduationCap } from "lucide-react";
import EducationCard from "./ui/EducationCard";
const School = () => {
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
        Education
      </Typography>

      <Box>
        <EducationCard
          icon={GraduationCap}
          school={"Instituto Tecnológico de La Paz Baja California Sur"}
          title={"Computer System Engineer"}
          description={"Security and Web Development"}
          rangeYears={"2013 - 2018"}
        />
      </Box>
      <Divider sx={{ bgcolor: "#f4faed2c", borderBottomWidth: 1, my: 3 }} />
    </Box>
  );
};

export default School;
