/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc useFetchGifts.ts
 * Custom Hook that allow us to get gitfs ftom the giphy api
 */

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category: string ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }
    
  useEffect( () => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}
