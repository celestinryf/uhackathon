"use client";

import uhackstats from "../../../public/assets/uhackstats.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: "130vh",
        padding: "0",
        margin: "0",
        backgroundImage: `url(${uhackstats.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
          paddingTop: "3rem",
          fontSize: "6rem", // BIG TITLE
          fontWeight: 800,
          textShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.45)",
          marginBottom: "12rem",
          letterSpacing: "0.05rem",
        }}
      >
        Largest Hackathon in Tacoma
      </h1>

      {/* 2-column layout */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          paddingLeft: "10rem",

        }}
      >
        {/* LEFT COLUMN — intentionally blank */}
        <div></div>

        {/* RIGHT COLUMN — Stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
        >
          <Stat number="100+" label="Participants" />
          <Stat number="24" label="Hours" />
          <Stat number="2" label="Tracks" />
          <Stat number="$??,???+" label="Prizes" />
        </div>
      </div>
    </section>
  );
}

type StatProps = {
  number: string;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontSize: "7rem", // large stat number
          fontWeight: 800,
          lineHeight: 1,
          textShadow: "0 0.3rem 1rem rgba(0,0,0,0.4)",
        }}
      >
        {number}
      </span>

      <span
        style={{
          fontSize: "1.5rem", // label size
          fontWeight: 500,
          opacity: 0.95,
          marginTop: "0.5rem",
          textShadow: "0 0.25rem 0.75rem rgba(0,0,0,0.4)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
