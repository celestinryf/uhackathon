"use client";

import { useEffect, useState } from "react";

// Submission deadline: Saturday, May 23, 2026 at 12:00 PM Pacific (PDT, UTC-7)
const DEADLINE = new Date("2026-05-23T12:00:00-07:00").getTime();

function formatRemaining(ms: number): { label: string; value: string } {
  if (ms <= 0) {
    return { label: "Submissions closed — judging in progress", value: "MLG 110 · 12:00–3:00 PM" };
  }
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");
  const value =
    days > 0
      ? `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
      : `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;

  return { label: "Submissions due in", value };
}

export default function HeroSection() {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(DEADLINE - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToSubmission = () => {
    const el = document.getElementById("submission");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#submission");
    }
  };

  const countdown = remaining === null ? null : formatRemaining(remaining);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10vh 5vw',
        background: 'linear-gradient(135deg, #6b0f1a, #b91372)',
        position: 'relative',
        textAlign: "center",
      }}
    >
      <div style={{ zIndex: 2 }}>
        <h1
          style={{
            fontFamily: "'Horizon', sans-serif",
            fontSize: "7vw",
            fontWeight: 900,
            color: "#f0e6f6",
            lineHeight: "0.9",
            WebkitTextStroke: "0.5vw",
            transform: "scaleX(1.6) scaleY(0.9)",
            transformOrigin: "center",
          }}
        >
          UHACKATHON
        </h1>

        <h2
          style={{
            fontSize: "clamp(18px, 1.5vw, 40px)",
            color: "#f0e6f6",
            fontFamily: "'Poppins', sans-serif",
            transform: "scaleX(1.25)",
            transformOrigin: "center",
            fontWeight: 600,
            marginTop: "2vh",
          }}
        >
          May 22-23, 2026
        </h2>

        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 22px)",
            color: "#f0e6f6",
            fontFamily: "'Poppins', sans-serif",
            transform: "scaleX(1.25)",
            transformOrigin: "center",
            fontWeight: 300,
            marginTop: "1vh",
          }}
        >
          University of Washington, Tacoma
        </p>
      </div>

      {/* Live countdown to submission deadline */}
      {countdown && (
        <button
          onClick={scrollToSubmission}
          style={{
            position: 'absolute',
            bottom: '5vh',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '14px 28px',
            fontFamily: "'Poppins', sans-serif",
            borderRadius: '12px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.2s ease',
            backdropFilter: 'blur(10px)',
            minWidth: '260px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            e.currentTarget.style.transform = 'translateX(-50%) translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
          }}
        >
          <span style={{
            fontSize: 'clamp(11px, 1vw, 13px)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            opacity: 0.8,
            fontWeight: 500,
          }}>
            {countdown.label}
          </span>
          <span style={{
            fontSize: 'clamp(20px, 2vw, 28px)',
            fontWeight: 700,
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '0.5px',
          }}>
            {countdown.value}
          </span>
        </button>
      )}
    </section>
  );
}
