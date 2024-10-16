import React, { useEffect, useState } from 'react';
import './Home.css';

const Clock = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const destination = new Date('October 19, 2024').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="clock_wrapper_home d-flex gap-3 mb-2">
      {Object.entries(time).map(([unit, value], index) => (
        <div key={unit} className="clock_info">
          <div className="circle">
            <div className='text-black'>{value < 10 ? `0${value}` : value}</div>
            <div className='text-black'>{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clock;
