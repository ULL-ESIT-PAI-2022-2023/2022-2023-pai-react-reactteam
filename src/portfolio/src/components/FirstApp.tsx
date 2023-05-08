/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc FirstApp.tsx
 * In this file you can see a simple component mananing props
 */

import React from 'react';

type FirstAppProps = {
  title: string,
  subTitle?: string,
  name?: string,
}

export const FirstApp: React.FunctionComponent<FirstAppProps> = ({ title, subTitle = `There ins't a subtitle`, name = `Juan Miguel` }): JSX.Element => {
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}
