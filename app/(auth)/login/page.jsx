"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  Divider,
  Stack,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth/authClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login({ email, password });
      router.push("/");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={(t) => ({
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
        boxSizing: "border-box",
        background: t.palette.background.default,
      })}
    >
      <Paper
        elevation={10}
        sx={(t) => ({
          width: "min(92vw, 1200px)",
          borderRadius: 3,
          overflow: "hidden",
          display: "flex",
          backdropFilter: "blur(6px)",
          boxShadow: t.shadows[12],
          maxHeight: "calc(100vh - 48px)",
          overflowY: "auto",
          boxSizing: "border-box",
        })}
      >
        {/* Left visual panel */}
        <Box
          sx={(t) => ({
            flex: 1,
            minHeight: 360,
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            p: 6,
            backgroundImage: `linear-gradient(135deg, ${
              t.palette.primary.main
            } 0%, ${t.palette.accent?.main || t.palette.primary.light} 100%)`,
          })}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
            MovieTube
          </Typography>
          <Typography sx={{ opacity: 0.95, mb: 3 }}>
            Find movies you'll love.
          </Typography>

          <Box
            sx={{
              width: 160,
              height: 160,
              borderRadius: 4,
              background: "rgba(255,255,255,0.12)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 48 }}>🎬</Typography>
          </Box>
        </Box>

        {/* Right form panel */}
        <Box sx={{ flex: 1, p: { xs: 3, md: 6 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Avatar
              sx={(t) => ({
                backgroundImage: t.palette.gradients?.main,
                width: 48,
                height: 48,
              })}
            >
              ▶
            </Avatar>
            <Box>
              <Typography variant="h6">Welcome back</Typography>
              <Typography variant="body2" color="text.secondary">
                Sign in to continue
              </Typography>
            </Box>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "grid", gap: 2, mt: 2 }}
          >
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((s) => !s)}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Button
                variant="text"
                onClick={() => alert("Forgot password flow not implemented")}
              >
                Forgot?
              </Button>
            </Box>

            {error && (
              <Typography color="error" sx={{ fontSize: 13 }}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              fullWidth
              sx={(t) => ({
                py: 1.25,
                backgroundImage: `linear-gradient(90deg, ${
                  t.palette.primary.main
                }, ${t.palette.accent?.main || t.palette.primary.light})`,
              })}
            >
              {loading ? "Signing in…" : "Sign in"}
            </Button>

            <Divider sx={{ my: 1 }} />

            <Stack direction="row" spacing={1} justifyContent="center">
              <Button
                variant="outlined"
                onClick={() => alert("Continue with Google")}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                onClick={() => alert("Continue with GitHub")}
              >
                GitHub
              </Button>
            </Stack>

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Button variant="text" onClick={() => router.push("/signup")}>
                  Create one
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
