//Used to detect bad uses of react code in a desired piece of code.
import { StrictMode } from 'react';
//Used to render a react element into the DOM with render.
import ReactDOM from 'react-dom/client'
//The imported component
import App from './App.tsx'
//The styles for your components
import "./assets/styles.css";

//We access the html body 'root' and render the imported component in our html. 
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);