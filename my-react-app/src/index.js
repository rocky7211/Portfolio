import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { PageGreeting } from './greeting';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('greeting'));
root.render(<PageGreeting/>);

