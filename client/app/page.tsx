"use client";
export const dynamic = 'force-dynamic';

import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import TracksSection from './components/TracksSection/TracksSection';
import FAQSection from './components/FAQSection/FAQSection';
import ScheduleSection from './components/ScheduleSection/ScheduleSection';
import SubmissionSection from './components/SubmissionSection/SubmissionSection';
import PresentationsSection from './components/PresentationsSection/PresentationsSection';
import JudgingSection from './components/JudgingSection/JudgingSection';
import ResourcesSection from './components/ResourcesSection/ResourcesSection';

export default function Page() {
  return (
    <div style={{
      fontFamily: "'Work Sans', sans-serif",
      color: '#fff',
      position: 'relative',
      overflowX: 'hidden',
      width: '100%'
    }}>
      <NavBar />
      <div id="hero"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div className="bg-[#d4f1f4]">
        <div id="tracks"><TracksSection /></div>
        <div id="schedule"><ScheduleSection /></div>
        <div id="submission"><SubmissionSection /></div>
        <div id="presentations"><PresentationsSection /></div>
        <div id="judging"><JudgingSection /></div>
        <div id="resources"><ResourcesSection /></div>
      </div>
      <div id="faq"><FAQSection /></div>
    </div>
  );
}
