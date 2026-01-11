"use client";

import { useState } from "react";

const MENU = [
  { label: "Home", icon: "🏠" },
  { label: "Trending", icon: "🔥" },
  { label: "Subscriptions", icon: "📺" },
  { label: "Library", icon: "📚" },
  { label: "History", icon: "🕘" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{
        width: expanded ? 260 : 72,
        transition: "width 500ms cubic-bezier(0.16,1,0.3,1)",
        background: "var(--surface)",
        borderRight: "1px solid var(--border-color)",
        padding: "16px 8px",
        height: "calc(100vh - 64px)",
        boxShadow: "var(--shadow)",
        position: "sticky",
        top: 64,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* MENU */}
      <div>
        {MENU.map((item) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: expanded ? 14 : 0,
              padding: "10px 12px",
              marginBottom: 6,
              borderRadius: 14,
              cursor: "pointer",
              fontWeight: 500,
              transition:
                "background 200ms ease, gap 420ms cubic-bezier(0.16,1,0.3,1)",
              justifyContent: expanded ? "flex-start" : "center",
              willChange: "gap, background",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--background)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {/* Icon */}
            <span style={{ fontSize: 20 }}>{item.icon}</span>

            {/* Label (always rendered, animated) */}
            <span
              style={{
                display: "inline-block",
                marginLeft: expanded ? 12 : 0,
                opacity: expanded ? 1 : 0,
                transform: expanded ? "translateX(0)" : "translateX(-6px)",
                maxWidth: expanded ? 160 : 0,
                overflow: "hidden",
                whiteSpace: "nowrap",
                transition:
                  "max-width 420ms cubic-bezier(0.16,1,0.3,1), opacity 350ms ease, transform 420ms cubic-bezier(0.16,1,0.3,1), margin-left 420ms ease",
                willChange: "transform, opacity, max-width",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div style={{ flexGrow: 1 }} />

      {/* FOOTER */}
      <div
        style={{
          fontSize: 11,
          opacity: 0.6,
          padding: "12px 0",
          borderTop: "1px solid var(--border-color)",
          display: "flex",
          justifyContent: "center",
          whiteSpace: "nowrap",
          alignItems: "center",
        }}
      >
        <span>©</span>
        <span
          style={{
            display: "inline-block",
            marginLeft: 8,
            opacity: expanded ? 1 : 0,
            transform: expanded ? "translateX(0)" : "translateX(-6px)",
            maxWidth: expanded ? 220 : 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            transition:
              "max-width 420ms cubic-bezier(0.16,1,0.3,1), opacity 350ms ease, transform 420ms cubic-bezier(0.16,1,0.3,1), margin-left 420ms ease",
            willChange: "transform, opacity, max-width",
          }}
        >
          {` ${new Date().getFullYear()} MovieTube`}
        </span>
      </div>
    </aside>
  );
}
