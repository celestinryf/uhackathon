"use client";

export default function ResourcesSection() {
  const items = [
    {
      title: "Venue",
      body: (
        <>
          <strong>MLG 110</strong> — Milgard Hall, Room 110, University of Washington Tacoma. All hacking, judging, and the closing ceremony happen here.
        </>
      )
    },
    {
      title: "Discord",
      body: (
        <>
          Live announcements, mentor requests, and team-finding all happen in Discord. Join:{' '}
          <a
            href="https://discord.gg/gUaUfxCQhj"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0891b2', textDecoration: 'underline', fontWeight: 600 }}
          >
            discord.gg/gUaUfxCQhj
          </a>
        </>
      )
    },
    {
      title: "Need help?",
      body: (
        <>
          Find an organizer in MLG 110 (look for the staff lanyards) or post in <code>#help</code> on Discord. For technical questions, post in <code>#mentor-help</code> with what you&apos;re stuck on and someone will jump in.
        </>
      )
    },
    {
      title: "Devpost",
      body: (
        <>
          All submissions and judging happen at{' '}
          <a
            href="https://uhackathon2026.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0891b2', textDecoration: 'underline', fontWeight: 600 }}
          >
            uhackathon2026.devpost.com
          </a>
          . Make sure your team is registered there before the noon Saturday deadline.
        </>
      )
    },
    {
      title: "Code of conduct",
      body: (
        <>
          Be respectful to other hackers, judges, mentors, and organizers. All code must be written during the hackathon — existing APIs, libraries, and frameworks are fine. Plagiarism or harassment will get you removed from the event.
        </>
      )
    },
    {
      title: "Contact",
      body: (
        <>
          Day-of questions: ping us in Discord. Anything else:{' '}
          <a
            href="mailto:celestinryf@gmail.com"
            style={{ color: '#0891b2', textDecoration: 'underline', fontWeight: 600 }}
          >
            celestinryf@gmail.com
          </a>
          .
        </>
      )
    }
  ];

  return (
    <section
      id="resources"
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
          marginBottom: '40px'
        }}>
          Day-Of Resources
        </h2>

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
                padding: '22px'
              }}
            >
              <div style={{
                color: '#16213e',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.9vw, 20px)',
                marginBottom: '10px'
              }}>
                {it.title}
              </div>
              <div style={{
                color: '#16213e',
                fontSize: 'clamp(13px, 1.6vw, 16px)',
                lineHeight: 1.6,
                opacity: 0.9
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
