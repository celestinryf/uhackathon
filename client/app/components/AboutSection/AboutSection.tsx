"use client";

import uhackstats from "../../../public/assets/uhackstats.svg";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: "110vh",
        padding: "0",
        margin: "0",
        backgroundImage: `url(${uhackstats.src})`,
        backgroundSize: "cover",
        backgroundPosition: "74% center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* Title */}
      <h1
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          paddingTop: "5vh",
          fontSize: "clamp(2.5rem, 6vw, 6rem)", // Won't go below 2.5rem
          fontWeight: 800,
          textShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.45)",
          marginBottom: "15vh",
          letterSpacing: "0.05rem",
        }}
      >
        Largest Hackathon in Tacoma
      </h1>
    </section>
  );
}