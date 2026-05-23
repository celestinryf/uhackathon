"use client";

export default function PresentationsSection() {
  const tips = [
    "Lead with the demo — show it working in the first 30 seconds.",
    "Name the problem clearly before the solution.",
    "Have a backup: screenshots or your demo video, in case live breaks.",
    "Practice once end-to-end. Five minutes goes fast.",
    "Be ready for a short Q&A from judges after your demo."
  ];

  const facts = [
    { label: "Date", value: "Saturday, May 23" },
    { label: "Time", value: "12:00 PM – 3:00 PM" },
    { label: "Location", value: "MLG 110 (Milgard Hall, Room 110)" },
    { label: "Length", value: "~5 minutes per team (final length set day-of based on team count)" },
    { label: "Format", value: "Live demo preferred, followed by brief judge Q&A" },
    { label: "Order", value: "Posted in Discord before judging starts — be in MLG 110 early" }
  ];

  return (
    <section
      id="presentations"
      style={{
        padding: 'clamp(60px, 8vw, 100px) 20px',
        paddingBottom: 'clamp(80px, 10vw, 160px)'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 700,
          color: '#16213e',
          textAlign: 'center',
          marginBottom: '16px'
        }}>
          Presentations
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: '#16213e',
          textAlign: 'center',
          marginBottom: '50px',
          opacity: 0.85
        }}>
          How and where you'll show your project to the judges.
        </p>

        <div style={{
          background: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(22,33,62,0.15)',
          borderRadius: '12px',
          padding: 'clamp(20px, 3vw, 32px)',
          marginBottom: '40px'
        }}>
          {facts.map((f, i) => (
            <div
              key={f.label}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(80px, 140px) 1fr',
                gap: '16px',
                padding: '12px 0',
                borderTop: i === 0 ? 'none' : '1px solid rgba(22,33,62,0.12)',
                alignItems: 'baseline'
              }}
            >
              <div style={{
                color: '#16213e',
                fontWeight: 700,
                fontSize: 'clamp(13px, 1.6vw, 16px)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                opacity: 0.75
              }}>
                {f.label}
              </div>
              <div style={{
                color: '#16213e',
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                lineHeight: 1.5
              }}>
                {f.value}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          color: '#16213e',
          fontWeight: 600,
          marginBottom: '20px'
        }}>
          Tips for a strong demo
        </h3>
        <ul style={{
          color: '#16213e',
          fontSize: 'clamp(14px, 1.8vw, 18px)',
          lineHeight: 1.7,
          paddingLeft: '22px',
          margin: 0
        }}>
          {tips.map((t) => (
            <li key={t} style={{ marginBottom: '8px' }}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
