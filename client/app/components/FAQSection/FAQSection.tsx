"use client";

import { useState } from 'react';

export default function FAQSection() {
  const leftColumnFaqs = [
    {
      question: "When are submissions due?",
      answer: "Saturday, May 23 at 12:00 PM. Submit on Devpost at uhackathon2026.devpost.com. You can edit until the deadline — submit early to be safe."
    },
    {
      question: "Where do I submit?",
      answer: "uhackathon2026.devpost.com. Make sure to pick your track (Dev Tools or No Theme) when you submit."
    },
    {
      question: "How long is each presentation?",
      answer: "Around 5 minutes per team, with the exact length confirmed day-of based on the number of teams. Brief judge Q&A follows."
    },
    {
      question: "Where is judging happening?",
      answer: "MLG 110 (Milgard Hall, Room 110), Saturday 12:00–3:00 PM. Be in the room early — presentation order is posted in Discord."
    },
    {
      question: "How big can my team be?",
      answer: "Up to 4 people. Finalize your team on Devpost when you submit."
    },
    {
      question: "Do I have to pick a track?",
      answer: "Yes — Dev Tools or No Theme. There is no general track; the track you pick determines who judges your project."
    },
    {
      question: "Can I use AI tools, libraries, or APIs?",
      answer: "Yes — existing APIs, libraries, and frameworks (and AI assistants) are fair game. The project code itself must be written during the hackathon."
    },
    {
      question: "What if I started coding before the event?",
      answer: "Project code needs to be written during the hackathon. Pulling in pre-existing libraries and APIs is fine; bringing in your own pre-built codebase is not."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Can I submit late?",
      answer: "No. Devpost closes at noon Saturday and late submissions will not be judged."
    },
    {
      question: "Do I have to do a live demo?",
      answer: "Live demo is preferred. If you can't, lean on a demo video in your Devpost submission so judges can still see it work."
    },
    {
      question: "What if my demo breaks during presentations?",
      answer: "That's exactly why we recommend including a backup demo video and screenshots in your Devpost write-up — you'll always have a fallback."
    },
    {
      question: "How are projects scored?",
      answer: "5 criteria × 5 points each = 25 points total: Innovation, Technical Approach, Potential Impact, Design & UX, and Presentation. See the Judging Criteria section for details."
    },
    {
      question: "What is the tiebreaker?",
      answer: "In a tie, the project with the higher Technical Approach & Stack score wins."
    },
    {
      question: "Where can I find teammates?",
      answer: "Hop into the Discord — there's a team-finding channel and people are looking right up through Friday's kickoff."
    },
    {
      question: "Is sleeping space provided?",
      answer: "No — venue rules don't allow overnight stays. Head home Friday evening and come back Saturday morning when doors open at 10 AM."
    },
    {
      question: "What's the code of conduct?",
      answer: "Be respectful to other hackers, judges, mentors, and organizers. No plagiarism. Project code must be written during the event. Issues? Find an organizer in MLG 110 or message us on Discord."
    }
  ];

  return (
    <section id="faq" style={{ 
      padding: 'clamp(40px, 8vw, 80px) clamp(15px, 3vw, 20px)', 
      backgroundColor: '#2d4059', 
      minHeight: '80vh' 
    }}>
      <h2 style={{ 
        fontSize: 'clamp(36px, 7vw, 64px)', 
        fontWeight: '700',
        marginBottom: '15px', 
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 'clamp(1px, 0.2vw, 2px)'
      }}>
        FAQs
      </h2>
      
      <p style={{
        fontSize: 'clamp(16px, 3vw, 24px)',
        color: '#e8e8e8',
        textAlign: 'center',
        marginBottom: 'clamp(25px, 4vw, 50px)',
        padding: '0 10px'
      }}>
        Questions? Explore some answers below
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
        maxWidth: '1400px', 
        margin: '0 auto', 
        gap: 'clamp(15px, 3vw, 30px)',
        padding: '0 clamp(15px, 4vw, 40px)'
      }}>
        <div>
          {leftColumnFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div>
          {rightColumnFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ 
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      paddingBottom: 'clamp(10px, 1.5vw, 15px)',
      marginBottom: 'clamp(10px, 1.5vw, 15px)'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: 'clamp(14px, 2.5vw, 18px)',
          fontWeight: '400',
          textAlign: 'left',
          cursor: 'pointer',
          padding: '4px 0',
          transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <span style={{
          flex: 1,
          paddingRight: '8px',
          wordBreak: 'break-word'
        }}>{question}</span>
        <span style={{ 
          fontSize: 'clamp(12px, 2vw, 14px)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s',
          flexShrink: 0
        }}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div style={{
          marginTop: 'clamp(8px, 1.5vw, 12px)',
          fontSize: 'clamp(13px, 2.2vw, 16px)',
          color: '#d0d0d0',
          lineHeight: '1.6',
          paddingRight: 'clamp(8px, 1.5vw, 15px)'
        }}>
          {answer}
        </div>
      )}
    </div>
  );
}