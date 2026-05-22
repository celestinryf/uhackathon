"use client";

export default function TracksSection() {
  const tracks = [
    {
      icon: "🔧",
      color: "#a8e6cf",
      darkColor: "#56ab91",
      banner: "DEV TOOLS",
      title: "Production Track",
      tagline: "For projects that are polished, practical, and ready to be used in the real world.",
      description: "Theme: Dev Tools. Build something that makes developers' lives easier — CLIs, extensions, libraries, debuggers, automations, anything that makes building software faster or better.",
      fullDescription: "Ship something polished and practical. The strongest projects here solve a real pain point in the developer workflow and are ready to be picked up and used on day one.",
      topics: "Developer Tooling, CLIs, IDE & Editor Extensions, Libraries & SDKs, Build & CI/CD, Debugging & Observability, Automation, API Tooling, etc.",
      prizes: [
        "CORSAIR VENGEANCE LPX DDR4 RAM 16GB",
        "Samsung 990 EVO Plus 1TB SSD",
        "Acer Nitro 27\" QHD Gaming Monitor",
        "Edifier MR4 Powered Studio Monitor Speakers"
      ]
    },
    {
      icon: "🌱",
      color: "#dcc6e0",
      darkColor: "#9b7ea6",
      banner: "NO THEME",
      title: "Experimental Track",
      tagline: "For projects that are creative, ambitious, weird, risky, or technically interesting.",
      description: "No theme — make whatever you want. This track is your playground for the creative, the ambitious, the weird, and the technically interesting.",
      fullDescription: "Chase the idea you can't stop thinking about. Whether it's risky, unconventional, or just plain fun, this track celebrates experimentation and bold builds with no constraints.",
      topics: "Anything goes — games, art, hardware hacks, AI experiments, generative tools, simulations, whatever you can dream up.",
      prizes: [
        "Glorious Model O Wireless Gaming Mouse",
        "Apple AirPods 4",
        "FUDONI 1080P Projector with WiFi and Bluetooth",
        "Elgato Wave:3 USB Condenser Microphone"
      ]
    }
  ];

  return (
    <section id="tracks" style={{ padding: '80px 20px', textAlign: 'center', paddingBottom: '200px' }}>
      <style>{`
        .card-container {
          perspective: 1000px;
          width: 100%;
          max-width: 450px;
          height: 650px;
        }
        
        .card-flipper {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        .card-container:hover .card-flipper {
          transform: rotateY(180deg);
        }
        
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .card-front {
          background: var(--card-color);
        }
        
        .card-back {
          background: var(--card-color);
          transform: rotateY(180deg);
          overflow-y: auto;
          justify-content: flex-start;
          gap: 20px;
        }
        
        .card-banner {
          background: var(--dark-color);
          color: white;
          padding: 8px 20px;
          border-radius: 8px;
          font-size: clamp(18px, 2vw, 28px);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 20px 0;
        }
        
        .card-icon {
          font-size: clamp(50px, 6vw, 80px);
          margin: 20px 0;
        }
        
        .card-title {
          font-size: clamp(24px, 4vw, 32px);
          font-weight: bold;
          color: #1a1a2e;
          margin: 20px 0 12px 0;
        }
        
        .card-tagline {
          font-size: clamp(14px, 2vw, 20px);
          color: #2a2a3e;
          line-height: 1.5;
          font-weight: 400;
          font-family: 'Helvetica', sans-serif;
        }
        
        .card-back-header {
          text-align: left;
        }
        
        .card-back-content {
          text-align: left;
          font-size: clamp(14px, 1.8vw, 16px);
          line-height: 1.6;
          color: #2a2a3e;
        }
        
        .card-back-content p {
          margin: 12px 0;
        }
        
        .card-back-content strong {
          color: #1a1a2e;
        }
        
        .topics-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid rgba(0, 0, 0, 0.1);
        }
        
        .topics-title {
          font-style: italic;
          font-weight: bold;
          margin-bottom: 8px;
          color: #1a1a2e;
          font-size: clamp(14px, 1.5vw, 16px);
        }
        
        .topics-list {
          font-style: italic;
          color: #3a3a4e;
          line-height: 1.5;
          font-size: clamp(12px, 1.4vw, 14px);
        }
        
        @media (max-width: 968px) {
          .tracks-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
          }
        }
        
        @media (max-width: 768px) {
          .card-container {
            max-width: 380px;
            height: 500px;
          }
        }
      `}</style>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto 60px auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: 'clamp(25px, 3vw, 40px)', marginBottom: '0px', color: '#16213e', fontWeight: 'bold' }}>
          Tracks
        </h2>
        <p style={{ fontSize: 'clamp(18px, 1.5vw, 25px)', color: '#16213e', marginBottom: '50px' }}>
          Participants will have the opportunity to create projects based on their skillset with ranked tracks:
        </p>
      </div>
      
      <div 
        className="tracks-grid"
        style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, minmax(320px, 450px))', 
        gap: '40px', 
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {tracks.map(track => (
          <div 
            key={track.title}
            className="card-container"
            style={{
              ['--card-color' as any]: track.color,
              ['--dark-color' as any]: track.darkColor
            }}
          >
            <div className="card-flipper">
              {/* Front of card */}
              <div className="card-face card-front">
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="card-banner">{track.banner}</div>
                  <div className="card-icon">{track.icon}</div>
                  <div className="card-title">{track.title}</div>
                  <div className="card-tagline">{track.tagline}</div>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="card-face card-back">
                <div className="card-back-header">
                  <div className="card-banner">{track.banner}</div>
                </div>
                
                <div className="card-back-content">
                  <p><strong>{track.description}</strong></p>
                  <p>{track.fullDescription}</p>
                  
                  <div className="topics-section">
                    <div className="topics-title">Topics to Consider:</div>
                    <div className="topics-list">{track.topics}</div>
                  </div>

                  <div className="topics-section">
                    <div className="topics-title">Prizes include:</div>
                    <ul className="topics-list" style={{ paddingLeft: '20px', margin: 0 }}>
                      {track.prizes.map(prize => (
                        <li key={prize}>{prize}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
