/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc AddCategoryhttp://127.0.0.1:5181/.tsx
 *  This component is the form. It is in charge of handling what we receive in the input.
 */

import { useState } from 'react';

export const AddCategory = ({ onNewCategory }: any): JSX.Element => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}: any) => {
    setInputValue(target.value);
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    setInputValue('');
    onNewCategory(inputValue.trim());
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        placeholder='Buscar gifs'
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
