import { createTheme } from "@mui/material/styles";

/* ================================
   COMMON COLORS (Shared)
================================ */
const commonPalette = {
  primary: {
    main: "#10B981", // Primary
    light: "#22D3EE", // Accent used as a bright highlight
    dark: "#059669", // Primary hover / darker
  },
  accent: {
    main: "#22D3EE",
  },
  secondary: {
    main: "#064E3B",
    light: "#0F766E",
    dark: "#013827",
  },
};

/* ================================
   STATUS COLORS (Custom Extension)
================================ */
const statusColors = {
  active: {
    main: "#10B981",
    light: "#22D3EE",
    dark: "#059669",
    gradient: "linear-gradient(135deg, #10B981 0%, #22D3EE 100%)",
    glass: "rgba(16,185,129,0.08)",
  },
  completed: {
    main: "#3b82f6",
    light: "#60a5fa",
    dark: "#1d4ed8",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    glass: "rgba(59, 130, 246, 0.1)",
  },
  paused: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    glass: "rgba(245, 158, 11, 0.1)",
  },
  failed: {
    main: "#d32f2f",
    light: "#f87171",
    dark: "#b71c1c",
    gradient: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
    glass: "rgba(211, 47, 47, 0.1)",
  },
};

/* ================================
   LIGHT THEME
================================ */
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    ...commonPalette,

    primary: {
      ...commonPalette.primary,
      contrastText: "#ffffff",
    },
    secondary: {
      ...commonPalette.secondary,
      contrastText: "#ffffff",
    },

    error: {
      main: "#d32f2f",
      dark: "#b71c1c",
      contrastText: "#ffffff",
    },

    text: {
      primary: "#064E3B",
      secondary: "#0F766E",
    },

    background: {
      default: "#F0FDFA",
      paper: "#FFFFFF",
      surface: "#FFFFFF",
      surfaceAlt: "#ECFEFF",
    },

    divider: "#D1FAE5",

    action: {
      active: "#064E3B",
      hover: "rgba(16,185,129,0.08)",
      selected: "rgba(16,185,129,0.12)",
      disabled: "rgba(6,78,59,0.26)",
      disabledBackground: "rgba(6,78,59,0.06)",
    },

    status: statusColors,
    gradients: {
      main: "linear-gradient(135deg, #10B981 0%, #22D3EE 100%)",
      radialAccent:
        "radial-gradient(circle at top right, rgba(34,211,238,0.15), transparent 60%)",
    },

    tabListBorder: {
      light: "#EEEEEE",
      dark: "#D1FAE5",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
        contained: ({ ownerState }) => ({
          color: "#ffffff",
          "&:hover": {
            backgroundColor:
              ownerState.color === "error"
                ? "#b71c1c"
                : commonPalette.primary.dark,
          },
        }),
        outlined: {
          borderColor: commonPalette.secondary.main,
          color: commonPalette.secondary.main,
          "&:hover": {
            borderColor: commonPalette.secondary.dark,
            backgroundColor: "rgba(16,185,129,0.04)",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: commonPalette.primary.main,
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            borderColor: commonPalette.primary.main,
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: commonPalette.primary.main,
          "&:hover": {
            color: commonPalette.primary.dark,
          },
        },
      },
    },
  },
});

/* ================================
   DARK THEME
================================ */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    ...commonPalette,

    primary: {
      ...commonPalette.primary,
      contrastText: "#ffffff",
    },
    secondary: {
      ...commonPalette.secondary,
      contrastText: "#ffffff",
    },

    error: {
      main: "#d32f2f",
      dark: "#b71c1c",
      contrastText: "#ffffff",
    },

    text: {
      primary: "#ECFEFF",
      secondary: "#99F6E4",
    },

    background: {
      default: "#022C22",
      paper: "#064E3B",
      surface: "#064E3B",
      surfaceAlt: "#0F766E",
    },

    divider: "#134E4A",

    action: {
      active: "#ECFEFF",
      hover: "rgba(16,185,129,0.15)",
      selected: "rgba(16,185,129,0.18)",
      disabled: "rgba(236,254,255,0.12)",
      disabledBackground: "rgba(236,254,255,0.04)",
    },

    status: {
      ...statusColors,
      active: {
        ...statusColors.active,
      },
    },

    gradients: {
      main: "linear-gradient(135deg, #10B981 0%, #22D3EE 100%)",
      radialAccent:
        "radial-gradient(circle at top right, rgba(34,211,238,0.15), transparent 60%)",
    },

    tabListBorder: {
      light: "#EEEEEE",
      dark: "#134E4A",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
        },
        contained: ({ ownerState }) => ({
          "&:hover": {
            backgroundColor:
              ownerState.color === "error"
                ? "#b71c1c"
                : commonPalette.primary.dark,
          },
        }),
        outlined: {
          borderColor: "#ffffff",
          color: "#ffffff",
          "&:hover": {
            borderColor: "#e0e0e0",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: commonPalette.primary.main,
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            borderColor: commonPalette.primary.main,
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: commonPalette.primary.main,
          "&:hover": {
            color: commonPalette.primary.light,
          },
        },
      },
    },
  },
});
