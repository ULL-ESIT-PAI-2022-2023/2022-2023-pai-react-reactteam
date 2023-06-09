/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc GifGrid.tsx
 * This component show a gallery of gifts
 */

import { GifItem } from './GifItem.tsx';
import { useFetchGifs } from '../hooks/useFetchGifs';

type GifGridProps = {
  category: string
}

export const GifGrid= ({category}: GifGridProps): JSX.Element => {

  const {images, isLoading} = useFetchGifs(category);
    
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
            

      <div className='card-grid'>
				{
					images.map((image: any) => (
						<GifItem 
							key={image.id} 
									{...image}
						/>
					))
				}          
      </div>    
		</>  
	)
}
