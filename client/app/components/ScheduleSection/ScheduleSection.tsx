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
        {/* Saturday */}
        <div>
          <h3 style={{ 
            fontSize: 'clamp(18px, 5vw, 36px)', 
            fontWeight: '600',
            marginBottom: 'clamp(20px, 4vw, 40px)', 
            color: '#16213e' 
          }}>
            Saturday
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 24px)' }}>
            <ScheduleItem time="9:00AM – 10:00AM" event="Check-In" />
            <ScheduleItem time="10:00AM – 10:30AM" event="Opening Ceremony" />
            <ScheduleItem time="12:30PM – 2:30PM" event="Lunch" />
            <ScheduleItem time="1:30PM – 4:15PM" event="Workshops" />
            <ScheduleItem time="5:00PM – 6:00PM" event="Dinner" />
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
            Sunday
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(14px, 3vw, 24px)' }}>
            <ScheduleItem time="9:00AM – 10:00AM" event="Breakfast" />
            <ScheduleItem time="1:30PM" event="Submissions Due!" />
            <ScheduleItem time="1:30PM – 3:30PM" event="Judging" />
            <ScheduleItem time="1:30PM – 2:30PM" event="Lunch" />
            <ScheduleItem time="3:30PM – 4:30PM" event="Closing Ceremony" />
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