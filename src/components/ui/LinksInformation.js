import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import { Mail, FileText, Github, Linkedin } from "lucide-react";

const iconsStyles = {
  color: "#4caf50",
  border: "2px solid #4caf50",
  borderRadius: "30px",
  padding: "5px",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#263238",
  },
};

const LinksInformation = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:alberto.zapatat95@gmail.com";
  };
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/AlbertooZapata";
  };
  const handleLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/alberto-zapata-telles/";
  };
  const handleResumeClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/190Eb3NkxBWwRsNeWjntRWawK7JKvDl6E/view?usp=sharing/";
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        flexWrap: "wrap", // Asegurar que los íconos se ajusten en pantallas pequeñas
        gap: "5px",
      }}
    >
      <Button
        variant="contained"
        startIcon={<Mail size={18} />}
        onClick={handleEmailClick} // Añadimos el manejador de clics aquí
        sx={{
          backgroundColor: "#4caf50",
          textTransform: "none",
          borderRadius: "50px",
          padding: "5px 15px",
          fontSize: "0.875rem",
        }}
      >
        alberto.zapatat95@gmail.com
      </Button>
      <IconButton sx={iconsStyles} onClick={handleResumeClick}>
        <FileText size={18} />
      </IconButton>
      <IconButton sx={iconsStyles} onClick={handleGitHubClick}>
        <Github size={18} />
      </IconButton>
      <IconButton sx={iconsStyles} onClick={handleLinkedInClick}>
        <Linkedin size={18} />
      </IconButton>
    </Stack>
  );
};

export default LinksInformation;
