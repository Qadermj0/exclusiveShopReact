import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const destination = new Date('October 22, 2024').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTime({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="clock_wrapper d-flex align-items-center gap-3 mb-2">
      {Object.entries(time).map(([unit, value], index) => (
        <div key={unit} className="clock_data d-flex align-items-center gap-3">
          <div className='text-center'>
            <h5 className=''>{unit.charAt(0).toUpperCase() + unit.slice(1)}</h5>
            <h1 className=''>{value < 10 ? `0${value}` : value}</h1>
          </div>
          {index < Object.keys(time).length - 1 && <span className='dot fs-3'>:</span>}
        </div>
      ))}
    </div>
  );
};

export default Clock;
