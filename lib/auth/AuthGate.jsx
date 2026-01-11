"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAuthenticated } from "./authClient";

export default function AuthGate({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authed = isAuthenticated();

    const isAuthRoute = pathname === "/login" || pathname === "/signup";

    if (authed && isAuthRoute) {
      // If already authed, keep them in app root
      router.replace("/");
      return;
    }

    if (!authed && !isAuthRoute) {
      // If not authed and trying to access protected routes, send to login
      router.replace("/login");
      return;
    }
    // otherwise do nothing
  }, [pathname, router]);

  return <>{children}</>;
}
