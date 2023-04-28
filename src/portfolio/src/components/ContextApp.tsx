/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc ContextApp.tsx
 * 
 */
import {createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export const MyApp = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

// type PanelProps = {
//   title: string,
//   children: ReactElement<any, string>[]
// }

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

// type ButtonProps = {
//   children: ReactElement<any, string>
// }

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
