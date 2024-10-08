import React, { useEffect, useState } from 'react'
import './Home.css'
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
  return  <div className="clock_wrapper_home d-flex   gap-3 mb-2">

<div className="clock_info    ">
  <div className="circle">
  <div className='text-black  '> {hours} </div>

      <div className='text-black  '>Hours</div>
  </div>
     
       
      </div>  
    <div className="clock_info  ">
    <div className="circle">
  <div className='text-black  '> {days} </div>

      <div className='text-black  '>Days</div>
  </div>
       
       
      </div>

    
   
    <div className="clock_info  ">
    <div className="circle">
  <div className='text-black  '> {minutes} </div>

      <div className='text-black  '>Minutes</div>
  </div>
       
      </div>

    <div className="clock_info  ">
    <div className="circle">
  <div className='text-black  '> {seconds} </div>

      <div className='text-black  '>Seconds</div>
  </div>
 

      </div> 
  </div>
}

export default Clock