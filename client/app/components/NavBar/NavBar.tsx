"use client";

import { useEffect } from "react";

export default function NavBar() {
  // Handle hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Tracks", id: "tracks" },
    { label: "Schedule", id: "schedule" },
    { label: "FAQ", id: "faq" },
    { label: "Register", id: "form" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        gap: "clamp(8px, 3vw, 40px)",
        padding: "20px 0",
        fontSize: "clamp(12px, 2vw, 16px)",
        fontWeight: 600,
        color: "#fff",
        flexWrap: "wrap",
      }}
    >
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.id);
          }}
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            transition: "color 0.2s",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ff79c6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}