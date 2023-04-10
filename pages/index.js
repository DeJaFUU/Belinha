import React, { useState, useEffect } from 'react';

export default function Home() {

  const [daysLeft, setDaysleft] = useState(0);
  const [loveDays, setLoveDays] =  useState(0);

  const Belinha = "days till...";
  const arrival = new Date(2023, 5, 18); // Year, zero-based month, day
  const today = new Date();
  const love =  new Date(2023, 0, 6); // Year, zero-based month, day

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

    // Similar to componentDidMount and componentDidUpdate: 
     useEffect(() => {   
       // Update the document title using the browser API   
       const differenceInMilliseconds = Math.abs(arrival.getTime() - today.getTime());
       const differenceInMilliseconds2 = Math.abs(today.getTime() - love.getTime());
       const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
       const differenceInDays2 = Math.floor(differenceInMilliseconds2 / (1000 * 60 * 60 * 24));
        setDaysleft(differenceInDays);
        setLoveDays(differenceInDays2);
      }), [arrival, today];

  return (
   <div className='main'>
    <h1>{daysLeft} {Belinha}</h1>
    <a> Today is {today.toLocaleDateString('en-US', options)} </a>
    <a> <br /> The day we are waiting for is {arrival.toLocaleDateString('en-US', options)}</a>
    <br /> 
    <a> <br /> Belinha and Frankinho have been together for {loveDays} days</a>
   </div>
  )
}
