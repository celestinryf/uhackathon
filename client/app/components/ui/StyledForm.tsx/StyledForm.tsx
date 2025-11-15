"use client";

export default function StyledForm({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "3rem 1rem",
        fontFamily: "Inter, sans-serif",
        color: "#eee",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          fontWeight: 600,
          color: "#f4f4f4",
        }}
      >
        {title}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {children}
      </div>
    </div>
  );
}
