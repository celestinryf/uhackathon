"use client";

import { useState } from 'react';

export default function FAQSection() {
  const leftColumnFaqs = [
    {
      question: "What is UHackathon?",
      answer: "A hackathon is an event where students come together to build creative projects over a short period of time. It's a great opportunity to learn new skills, meet other developers, and bring your ideas to life!"
    },
    {
      question: "What is D1 and D2?",
      answer: "D1 is for more experienced individuals. Graduates and industry professionals are forced into this category, and anyone else is free to compete here as well. D2 is for those less-experienced, like undergraduates and high schoolers."
    },
    {
      question: "When do applications close?",
      answer: "They don't! You can come without registering, but it helps increase our funding, hence incresing the prize money!"
    },
    {
      question: "Is attending free?",
      answer: "Yes! Attending is completely free. We provide meals, snacks, and swag throughout the event."
    },
    {
      question: "How big are the teams?",
      answer: "Teams can be up to 4 people."
    },
    {
      question: "Do I have to select a track for my project?",
      answer: "Yes, we have split up the event, so it does matter what track you choose as it will change who judges you and there is no general track."
    },
    {
      question: "What will I eat?",
      answer: "We'll provide breakfast, lunch, dinner, and snacks throughout the event. Dietary restrictions will be accommodated."
    },
    {
      question: "What if I need special accommodations?",
      answer: "Please let us know in your application or email us at [email] and we'll do our best to accommodate your needs."
    }
  ];

  const rightColumnFaqs = [
    {
      question: "Am I eligible to attend?",
      answer: "Everyone regardless of experience is welcome! We have D1 and D2 to keep competition fair. Industry professionals and graduates are forced into D1, whereas D2 is undergraduate students."
    },
    {
      question: "Is UHackathon fully in-person this year?",
      answer: "Yes, UHackathon will be fully in-person this year at [TBD, but in Tacoma]."
    },
    {
      question: "What if I don't know how to code?",
      answer: "That's okay! Hackathons are for everyone. We'll have workshops and mentors to help you learn. Many successful projects combine coding with design, business, and other skills."
    },
    {
      question: "Do I have to submit a project if I attend?",
      answer: "No! While we encourage everyone to submit a project, it's not required. You can attend workshops, network, and learn without submitting."
    },
    {
      question: "Are we allowed to build on past projects?",
      answer: "All code must be written during the hackathon. However, you can use existing APIs, libraries, and frameworks."
    },
    {
      question: "Is sleeping space provided?",
      answer: "No, unfortunatly due to rules of all venues in the area there is no sleeping or staying allowed. Attendees will have to go home and come back the next day."
    },
    {
      question: "What is the code of conduct?",
      answer: "All participants must follow the MLH Code of Conduct. We're committed to providing a safe and inclusive environment for everyone."
    }
  ];

  return (
    <section id="faq" style={{ 
      padding: 'clamp(40px, 8vw, 80px) clamp(15px, 3vw, 20px)', 
      backgroundColor: '#2d4059', 
      minHeight: '100vh' 
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