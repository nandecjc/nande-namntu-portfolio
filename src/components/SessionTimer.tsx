import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function SessionTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return [m, s].map((v) => v.toString().padStart(2, '0')).join(':');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="border border-border bg-background/80 backdrop-blur px-3 py-1.5 flex items-center gap-2">
        <Clock size={14} className="text-muted-foreground" />
        <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">UPTIME</span>
        <span className="font-mono text-xs font-semibold text-foreground">{formatTime(seconds)}</span>
      </div>
    </div>
  );
}
