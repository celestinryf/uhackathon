"use client";

export default function TracksSection() {
  return (
    <section id="schedule" style={{ padding: '80px 20px', paddingBottom: '200px'}}>
      <h2 style={{ 
        fontSize: 'clamp(40px, 6vw, 64px)', 
        fontWeight: '700',
        marginBottom: '80px', 
        color: '#16213e',
        textAlign: 'center'
      }}>
        Schedule
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
        maxWidth: '1400px', 
        margin: '0 auto', 
        gap: 'clamp(30px, 5vw, 60px)',
        padding: '0 clamp(10px, 4vw, 40px)'
      }}>
        {/* Friday */}
        <div>
          <h3 style={{
            fontSize: 'clamp(18px, 5vw, 36px)',
            fontWeight: '600',
            marginBottom: 'clamp(20px, 4vw, 40px)',
            color: '#16213e'
          }}>
            Day 1 — Friday, May 22
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 24px)' }}>
            <ScheduleItem time="10:00AM" event="Opening Ceremony & Kickoff" />
            <ScheduleItem time="11:00AM" event="Hacking Begins, Theme Revealed" />
            <ScheduleItem time="12:00PM" event="Lunch" />
            <ScheduleItem time="5:00PM" event="Day 1 Wrap-Up" />
          </div>
        </div>

        {/* Saturday */}
        <div>
          <h3 style={{
            fontSize: 'clamp(18px, 5vw, 36px)',
            fontWeight: '600',
            marginBottom: 'clamp(20px, 4vw, 40px)',
            color: '#16213e'
          }}>
            Day 2 — Saturday, May 23
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 24px)' }}>
            <ScheduleItem time="10:00AM" event="Doors Open, Hacking Resumes" />
            <ScheduleItem time="12:00PM" event="Lunch, Hacking Ends, Devpost Submissions Due, Presentations & Judging Begin" />
            <ScheduleItem time="3:00PM" event="Scores Finalized" />
            <ScheduleItem time="4:00PM" event="Closing Ceremony & Awards" />
            <ScheduleItem time="5:00PM" event="Event Close" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleItem({ time, event }: { time: string; event: string }) {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'clamp(6px, 4vw, 40px)', // Increased vw for more proportional scaling
      flexWrap: 'nowrap',
      width: '100%'
    }}>
      <span style={{ 
        fontSize: 'clamp18px, 2vw, 30px)', // Lower minimum, higher vw percentage
        color: '#16213e',
        fontWeight: '400',
        flexShrink: 1,
        flexBasis: 'auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {time}
      </span>
      <span style={{ 
        fontSize: 'clamp(18px, 2vw, 25px)', // Lower minimum, higher vw percentage
        color: '#16213e',
        fontWeight: '600',
        flexShrink: 1,
        flexBasis: 'auto',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {event}
      </span>
    </div>
  );
}