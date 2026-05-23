"use client";

export default function JudgingSection() {
  const criteria = [
    {
      title: "Innovation & Originality",
      desc: "How fresh and creative is the idea? Reward non-obvious problems or unexpected approaches to known ones."
    },
    {
      title: "Technical Approach & Stack",
      desc: "Did the team choose the right tools for the job? Does the architecture make sense for the problem? Used as the tiebreaker."
    },
    {
      title: "Potential Impact",
      desc: "Does this solve a real problem or create real value? Could it be used beyond the hackathon?"
    },
    {
      title: "Design & User Experience",
      desc: "How easy and pleasant is it to use? Evaluate UI/UX quality, intuitiveness, and overall polish."
    },
    {
      title: "Presentation & Demo",
      desc: "How effectively did the team communicate their work via the Devpost write-up, demo video, and live demo?"
    }
  ];

  const scale = [
    { score: "1", label: "Poor", desc: "Criterion barely addressed or missing." },
    { score: "2", label: "Below Avg", desc: "Some effort; significant gaps remain." },
    { score: "3", label: "Average", desc: "Meets expectations with minor weaknesses." },
    { score: "4", label: "Good", desc: "Clearly executed; minor issues only." },
    { score: "5", label: "Excellent", desc: "Outstanding — stands out among all projects." }
  ];

  return (
    <section
      id="judging"
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
          Judging Criteria
        </h2>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: '#16213e',
          textAlign: 'center',
          marginBottom: '40px',
          opacity: 0.85
        }}>
          5 criteria × 5 points = <strong>25 points total</strong>, scored on Devpost.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px',
          marginBottom: '50px'
        }}>
          {criteria.map((c) => (
            <div
              key={c.title}
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(22,33,62,0.15)',
                borderRadius: '12px',
                padding: '22px',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '16px',
                color: '#16213e',
                fontWeight: 700,
                fontSize: 'clamp(12px, 1.4vw, 14px)',
                opacity: 0.5,
                letterSpacing: '0.5px'
              }}>
                5 PTS
              </div>
              <div style={{
                color: '#16213e',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.9vw, 20px)',
                marginBottom: '10px',
                paddingRight: '50px'
              }}>
                {c.title}
              </div>
              <div style={{
                color: '#16213e',
                fontSize: 'clamp(13px, 1.6vw, 16px)',
                lineHeight: 1.55,
                opacity: 0.85
              }}>
                {c.desc}
              </div>
            </div>
          ))}
        </div>

        <h3 style={{
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          color: '#16213e',
          fontWeight: 600,
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Scoring scale
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '12px',
          marginBottom: '32px'
        }}>
          {scale.map((s) => (
            <div
              key={s.score}
              style={{
                background: 'rgba(22,33,62,0.08)',
                borderRadius: '10px',
                padding: '16px',
                textAlign: 'center'
              }}
            >
              <div style={{
                color: '#16213e',
                fontWeight: 700,
                fontSize: 'clamp(20px, 2.5vw, 26px)',
                marginBottom: '4px'
              }}>
                {s.score} — {s.label}
              </div>
              <div style={{
                color: '#16213e',
                fontSize: 'clamp(12px, 1.4vw, 14px)',
                opacity: 0.8,
                lineHeight: 1.4
              }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          fontSize: 'clamp(13px, 1.6vw, 16px)',
          color: '#16213e',
          opacity: 0.8,
          lineHeight: 1.6,
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <strong>Tiebreaker:</strong> in a tie, the project with the higher <em>Technical Approach &amp; Stack</em> score wins.
        </div>
      </div>
    </section>
  );
}
