"use client";

export default function SponsorsSection() {
  return (
    <section id="sponsor" style={{ padding: '80px 20px', backgroundColor: '#d4f1f4', minHeight: '90vh' }}>
      <h2 style={{ 
        fontSize: 'clamp(40px, 6vw, 64px)', 
        fontWeight: '700',
        marginBottom: '40px', 
        color: '#16213e',
        textAlign: 'center'
      }}>
        Want to Sponsor Us?
      </h2>
      
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        padding: '0 clamp(10px, 4vw, 40px)'
      }}>
        <p style={{
          fontSize: 'clamp(18px, 4vw, 28px)',
          color: '#16213e',
          textAlign: 'center',
          marginBottom: 'clamp(40px, 6vw, 60px)',
          fontWeight: '500',
          lineHeight: '1.6'
        }}>
          Get in contact here:{' '}
          <a 
            href="https://forms.gle/uzcfHPxXYSmMnTLL7" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#0891b2',
              textDecoration: 'underline',
              fontWeight: '600'
            }}
          >
            Sponsor Interest Form
          </a>
        </p>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'clamp(30px, 5vw, 50px)',
          marginTop: 'clamp(50px, 8vw, 80px)'
        }}>
          <SponsorItem 
            title="Fund Prizes" 
            description="Help us reward the incredible projects our participants create. Prize sponsorships directly motivate innovation and recognize outstanding work."
          />
          <SponsorItem 
            title="Support Venue Costs" 
            description="Ensure we have a great space for hackers to collaborate, build, and bring their ideas to life in a comfortable environment."
          />
          <SponsorItem 
            title="Provide Meals" 
            description="Keep our participants energized and focused throughout the event. Food sponsorships are essential to a successful hackathon experience."
          />
          <SponsorItem 
            title="Supply Swag & Resources" 
            description="Contribute branded merchandise, tools, or API access to help hackers build and give them something memorable to take home."
          />
        </div>

        <p style={{
          fontSize: 'clamp(16px, 3.5vw, 24px)',
          color: '#16213e',
          textAlign: 'center',
          marginTop: 'clamp(50px, 8vw, 80px)',
          fontWeight: '400',
          lineHeight: '1.7',
          fontStyle: 'italic'
        }}>
          Your support makes this event possible and helps foster the next generation of innovators!
        </p>
      </div>
    </section>
  );
}

function SponsorItem({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(8px, 2vw, 16px)'
    }}>
      <h3 style={{ 
        fontSize: 'clamp(20px, 4.5vw, 32px)',
        color: '#16213e',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: 'clamp(14px, 3.5vw, 22px)',
        color: '#16213e',
        fontWeight: '400',
        lineHeight: '1.6',
        opacity: '0.85'
      }}>
        {description}
      </p>
    </div>
  );
}