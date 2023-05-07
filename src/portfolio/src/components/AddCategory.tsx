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
 * 
 */

import { useState } from 'react';

type AddCategoryProps = {
  onNewCategory: string
}

export const AddCategory: React.FunctionComponent<AddCategoryProps> = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    // setCategories( categories => [ inputValue, ...categories ]);
    setInputValue('');
    onNewCategory( inputValue.trim() );
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
