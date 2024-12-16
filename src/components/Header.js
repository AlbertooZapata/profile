import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { MapPin } from "lucide-react";
import LinksInformation from "./ui/LinksInformation";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Avatar 
      src="/alberto-profile.jpeg"
      alt="A" sx={{ width: 110, height: 110, marginRight: "20px" }} />
      <Box>
        <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
          José Alberto Zapata Telles
        </Typography>
        <Typography
          variant="subtitle1"
          color="#9e9e9e"
          sx={{ fontWeight: "bold" }}
        >
          Software Developer Engineer
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: "10px",
            color: "#9e9e9e",
          }}
        >
          <MapPin size={18} />
          <Typography variant="body2">La Paz, Baja California Sur</Typography>
        </Box>
        <LinksInformation />
      </Box>
    </Box>
  );
}

export default Header;
