/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description File that access the html body 'root' and render the imported component in our html.
 */

//Used to detect bad uses of react code in a desired piece of code.
import { StrictMode } from 'react';
//Used to render a react element into the DOM with render.
import ReactDOM from 'react-dom/client'
//The imported component
import App from './App.tsx'
//The styles for your components
import "./assets/styles.css";

//We access the html body 'root' and render the imported component in our html. 
const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);