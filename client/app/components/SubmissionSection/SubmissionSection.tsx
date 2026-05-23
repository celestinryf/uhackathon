"use client";

export default function SubmissionSection() {
  const items = [
    {
      title: "Project title & tagline",
      body: "One-line description that tells judges what it is at a glance."
    },
    {
      title: "Write-up",
      body: "What you built, the problem it solves, how you built it, and what's next. Judges read this first."
    },
    {
      title: "Repository link",
      body: "Public GitHub repo (or equivalent). All code must be written during the hackathon — existing APIs, libraries, and frameworks are fine."
    },
    {
      title: "Demo video (highly encouraged)",
      body: "Short walkthrough (under 3 minutes). If you can't demo live, this is how judges see it work."
    },
    {
      title: "Screenshots",
      body: "At least one or two — covers you if your demo breaks."
    },
    {
      title: "Pick your track",
      body: "On Devpost, select either Dev Tools (Production) or No Theme (Experimental). It determines which judges score you."
    }
  ];

  return (
    <section
      id="submission"
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
          Submit Your Project
        </h2>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: '#16213e',
          textAlign: 'center',
          marginBottom: '8px',
          fontWeight: 500
        }}>
          Submissions are due <strong>Saturday, May 23 · 12:00 PM</strong>
        </p>
        <p style={{
          fontSize: 'clamp(13px, 1.6vw, 16px)',
          color: '#16213e',
          textAlign: 'center',
          opacity: 0.75,
          marginBottom: '40px'
        }}>
          Late submissions will not be judged. Submit early — you can keep editing until the deadline.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <a
            href="https://uhackathon2026.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#16213e',
              color: '#fff',
              padding: '16px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 600,
              letterSpacing: '0.5px',
              boxShadow: '0 4px 14px rgba(22, 33, 62, 0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Submit on Devpost →
          </a>
        </div>

        <h3 style={{
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          color: '#16213e',
          fontWeight: 600,
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          What to include
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {items.map((it) => (
            <div
              key={it.title}
              style={{
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(22,33,62,0.15)',
                borderRadius: '12px',
                padding: '20px 22px'
              }}
            >
              <div style={{
                color: '#16213e',
                fontWeight: 700,
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                marginBottom: '8px'
              }}>
                {it.title}
              </div>
              <div style={{
                color: '#16213e',
                fontSize: 'clamp(13px, 1.6vw, 16px)',
                lineHeight: 1.55,
                opacity: 0.85
              }}>
                {it.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
