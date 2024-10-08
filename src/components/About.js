// src/components/Header.js
import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Box sx={{ margin: "20px" }}>
        <Typography
          variant="h6"
          color="#9e9e9e"
          sx={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          About
        </Typography>

        <Typography
          variant="body2"
          color="#9e9e9e"
          alignItems={"center"}
          sx={{ marginBottom: "10px" }}
        >
          Systems Engineer with 6+ years of experience, dedicated to delivering
          high-quality software solutions. Currently seeking new opportunities,
          I am passionate about learning and applying emerging technologies as
          well as modern project development techniques. Committed to continuous
          improvement, I thrive in dynamic environments where innovation and
          problem-solving are key to driving success.
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "#f4faed2c", borderBottomWidth: 1, my: 3 }} />
    </div>
  );
};

export default About;
