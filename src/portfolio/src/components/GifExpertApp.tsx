/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc GifExpertApp.tsx
 * 
 */

import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory: string ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>
            <h1>GifExpertApp</h1>

    
            <AddCategory 
                onNewCategory={ (value: string) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
