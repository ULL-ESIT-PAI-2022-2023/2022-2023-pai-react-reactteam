/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc Description of some interfaces
 * 
 */


export interface CardProps {
  title: string, 
  imageUrl: string, 
  id: string,
  pageUrl: string
}

export interface CardPropsList {
  projects: CardProps[]
}