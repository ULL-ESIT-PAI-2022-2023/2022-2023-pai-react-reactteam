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
 * This example explain in a simple way how to deal with useContext
 */
import {createContext, useContext } from 'react';

const ThemeContext = createContext('');

export const MyApp = (): JSX.Element => {
  return (
    <ThemeContext.Provider value = 'dark'>
      <Form />
    </ThemeContext.Provider>
  )
}

const Form = (): JSX.Element => {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

type PanelProps = {
  title: string,
  children: any[]
}

const Panel = ({title, children}: PanelProps): JSX.Element => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: any): JSX.Element => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
