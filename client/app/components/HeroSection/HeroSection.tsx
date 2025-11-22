"use client";

export default function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById("form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#form");
    }
  };

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
          April, 2026
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

      {/* Register Button */}
      <button
        onClick={scrollToForm}
        style={{
          position: 'absolute',
          bottom: '5vh',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          border: 'none',
          color: '#fff',
          padding: '12px 24px',
          fontSize: 'clamp(14px, 1.2vw, 18px)',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          borderRadius: '30px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        }}
      >
        Register Here
        <span style={{
          fontSize: '20px',
          lineHeight: '1',
          animation: 'bounce 2s infinite',
        }}>
          ⌄
        </span>
      </button>

      {/* Bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-8px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}