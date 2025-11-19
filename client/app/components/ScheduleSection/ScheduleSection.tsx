"use client";

export default function TracksSection() {
  return (
    <section id="schedule" style={{ padding: '80px 20px', backgroundColor: '#d4f1f4', minHeight: '100vh' }}>
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
        {/* Saturday */}
        <div>
          <h3 style={{ 
            fontSize: 'clamp(18px, 5vw, 36px)', 
            fontWeight: '600',
            marginBottom: 'clamp(20px, 4vw, 40px)', 
            color: '#16213e' 
          }}>
            Saturday, April 18th
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 24px)' }}>
            <ScheduleItem time="9:30AM – 11:00AM" event="Hacker Check-In" />
            <ScheduleItem time="11:00AM – 12:40PM" event="Opening Ceremony" />
            <ScheduleItem time="12:30PM – 2:30PM" event="Lunch" />
            <ScheduleItem time="1:30PM – 4:15PM" event="Workshops" />
            <ScheduleItem time="3:30PM – 5:00PM" event="Career Fair" />
            <ScheduleItem time="5:30PM – 7:00PM" event="Dinner" />
          </div>
        </div>

        {/* Sunday */}
        <div>
          <h3 style={{ 
            fontSize: 'clamp(18px, 5vw, 36px)', 
            fontWeight: '600',
            marginBottom: 'clamp(20px, 4vw, 40px)', 
            color: '#16213e' 
          }}>
            Sunday, April 19th
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 24px)' }}>
            <ScheduleItem time="9:00AM – 10:00AM" event="Breakfast" />
            <ScheduleItem time="10:30AM" event="Submissions Due!" />
            <ScheduleItem time="11:30AM – 3:00PM" event="Judging" />
            <ScheduleItem time="11:00AM – 2:30PM" event="Lunch" />
            <ScheduleItem time="3:15PM – 4:00PM" event="Closing Ceremony" />
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
        fontSize: 'clamp(9px, 4.5vw, 30px)', // Lower minimum, higher vw percentage
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
        fontSize: 'clamp(9px, 4vw, 25px)', // Lower minimum, higher vw percentage
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