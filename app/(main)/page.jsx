"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, getUser, logout } from "@/lib/auth/authClient";
import { Box, Button, Typography } from "@mui/material";

export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, []);

  const user = typeof window !== "undefined" ? getUser() : null;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Welcome to the main app</Typography>
      <Typography sx={{ mt: 1 }}>
        {user ? `Signed in as ${user.email}` : "Redirecting to login…"}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Sign out
        </Button>
      </Box>
    </Box>
  );
}
