"use client";

import ThemeToggle from "@/lib/theme/ThemeToggle";
import { Box, Avatar } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box
      component="header"
      sx={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2.5,
        backgroundColor:
          theme.palette.background.surface || theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows?.[1] ?? "none",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LEFT: Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: 0.3,
        }}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            px: 1.25,
            py: 0.5,
            borderRadius: 1,
            fontSize: 14,
            display: "inline-block",
          }}
        >
          ▶
        </Box>
        MovieTube
      </Box>

      {/* CENTER: Search */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Box
          component="input"
          aria-label="Search"
          placeholder="Search movies, shows..."
          sx={(t) => ({
            width: "60%",
            maxWidth: 520,
            px: 2.25,
            py: 1.25,
            borderRadius: 999,
            border: `1px solid ${t.palette.divider}`,
            backgroundColor: t.palette.background.default,
            color: t.palette.text.primary,
            outline: "none",
            fontSize: 14,
            transition: "border 0.18s, box-shadow 0.18s",
            "&:focus": {
              border: `1px solid ${t.palette.primary.main}`,
              boxShadow: `0 0 0 6px ${alpha(t.palette.primary.main, 0.06)}`,
            },
          })}
        />
      </Box>

      {/* RIGHT: Actions */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <ThemeToggle />

        <Avatar
          sx={(t) => ({
            width: 36,
            height: 36,
            bgcolor: "transparent",
            backgroundImage:
              t.palette.gradients?.main ||
              `linear-gradient(135deg, ${t.palette.primary.main} 0%, ${
                t.palette.accent?.main || t.palette.primary.light
              } 100%)`,
            display: "grid",
            placeItems: "center",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          })}
        >
          U
        </Avatar>
      </Box>
    </Box>
  );
}
