import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Block */}
        <div className="flex flex-col gap-1">
          <span className="font-display font-black text-lg text-foreground tracking-tighter">NANDE NAMNTU</span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Software Engineering Intern</span>
        </div>

        {/* Center Block */}
        <div className="flex flex-col gap-1 md:items-center">
          <div className="flex flex-col font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            <span>Local Time: {time} SAST</span>
            <span>Last Updated: April 2026</span>
            <span>React: 19.0.0</span>
          </div>
        </div>

        {/* Right Block */}
        <div className="flex flex-col gap-1 md:items-end">
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
            © 2026 / All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
