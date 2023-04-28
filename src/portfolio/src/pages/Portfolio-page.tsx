import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardGrid } from '../components/CardGrid';
import { PROJECTS } from '../data/projects'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardGrid 
      projects = {PROJECTS}
    />
  </React.StrictMode>
);