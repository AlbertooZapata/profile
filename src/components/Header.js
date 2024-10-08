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
        src="https://media.licdn.com/dms/image/v2/C4D03AQF6Z7VSCeQvOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1587753448489?e=1733961600&v=beta&t=0qxG5y1nfNzysEQLogXkmfKmT6imn6keFwzjyTIdwmQ"
        alt="Neo"
        sx={{ width: 110, height: 110, marginRight: "20px" }}
      />
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
