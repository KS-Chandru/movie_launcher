import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import AuthGate from "../../lib/auth/AuthGate";

export default function MainLayout({ children }) {
  return (
    <AuthGate>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: 24,
            background: "var(--background)",
          }}
        >
          {children}
        </main>
      </div>
    </AuthGate>
  );
}
