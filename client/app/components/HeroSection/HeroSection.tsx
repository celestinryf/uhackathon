"use client";

export default function HeroSection() {
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
      {/* STACKED CONTENT */}
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

    </section>
  );
}