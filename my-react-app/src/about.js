import React from 'react';
import ReactDOM from 'react-dom/client';
import './about.css';
import { useDate } from './greeting';

const PageGreeting = () => {
    const { date, time, wish } = useDate();
    return (
        <div className="App">
          <Typewriter
      
           onInit={(typewriter)=> {
      
           typewriter
            
           .typeString("About Me")

           .start();
           }}
           />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('title'));
root.render(<PageGreeting/>);