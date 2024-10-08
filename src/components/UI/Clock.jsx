import React, { useEffect, useState } from 'react'
import './Clock.css'
const Clock = () => {
  const [days, setDays]=useState();
  const [hours, setHours]=useState();
  const [minutes, setMinutes]=useState();
  const [seconds, setSecond]=useState();

  let interval;
  const countDown =() =>{
    const destination =new Date('oct 10, 2024').getTime();
    interval = setInterval(() =>{
      const now= new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different /(1000 * 60 * 60 * 24) );
      const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(different % (1000 * 60 * 60 ) / (1000 * 60));
      const seconds = Math.floor(different % (1000 * 60)/1000);
      if(destination <0) clearInterval(interval.current)
      else{
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSecond(seconds);  
  } 
    })
  }
  useEffect(() =>{
countDown();
  },[])
  return  <div className="clock_wrapper d-flex align-items-center gap-3 mb-2">
    <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
      <h5 className='  '>Days</h5>
        <h1 className='  '>{days}</h1>
       
      </div>
      <span className='dot fs-3'>:</span>
    </div>

    
     <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
      <h5 className='text-black  '>Hours</h5>
        <h1 className='text-black  '> {hours} </h1>
       
      </div>
      <span className='dot  fs-3'>:</span>
    </div>  
    <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
      <h5 className='text-black  '>Minutes</h5>

        <h1 className='text-black  '>{minutes} </h1>
      </div>
      <span className='dot fs-3'>:</span>
    </div>

    <div className="clock_data d-flex align-items-center gap-3">
      <div className='text-center'>
      <h5 className='text-black  '>Seconds</h5>

        <h1 className='text-black  '>{seconds}</h1>
      </div>
     </div> 
  </div>
}

export default Clock