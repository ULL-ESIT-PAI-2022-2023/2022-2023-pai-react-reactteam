/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc getGift.tsx
 * 
 */

export const getGifs = async(category: string) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=PwGT0lp0wGOATpWwSmUymQIJAHpUYLX9&q=${ category }&limit=10`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map(image => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url
  }));
    
  return gifs;
}