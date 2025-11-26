"use client";
export const dynamic = 'force-dynamic';

import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import TracksSection from './components/TracksSection/TracksSection';
import FAQSection from './components/FAQSection/FAQSection';
import ScheduleSection from './components/ScheduleSection/ScheduleSection';
import Sponsor from './components/Sponsor/Sponsor';
import Form from './components/Form/Form';

export default function Page() {
  return (
    <div style={{ 
      fontFamily: "'Work Sans', sans-serif", 
      color: '#fff', 
      position: 'relative',
      overflowX: 'hidden',  // Add this
      width: '100%'          // Add this
    }}>
      <NavBar />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div className="bg-[#d4f1f4]">
        <div id="tracks"><TracksSection /></div>
        <div id="schedule"><ScheduleSection /></div>
        <div id="sponsor"><Sponsor /></div>
      </div>
      <div id="faq"><FAQSection /></div>
      <div id="form"><Form /></div>
    </div>
  );
}