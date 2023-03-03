import React from 'react';
import Typewriter from "typewriter-effect";

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date());
  
    React.useEffect(() => {
        const timer = setInterval(() => { 
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}...`;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return {
      date,
      time,
      wish,
    };
  };
  
  export const PageGreeting = () => {
    const { date, time, wish } = useDate();
    return (
        <div className="App">
          <Typewriter
      
           onInit={(typewriter)=> {
      
           typewriter
            
           .typeString(`${wish}`)
             
           .pauseFor(2000)
           .deleteAll()
           .typeString("Welcome to Jared's Portfolio")
           .start();
           }}
           />
        </div>
      );
};

