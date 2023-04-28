/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 20 2023
 * @desc Card.tsx
 * 
 */

export const Card = ({title, imageUrl, pageUrl}: {title: string, imageUrl: string, pageUrl:string}): JSX.Element => {
  return (
    <div className="card">
      <img src={ imageUrl } alt={ title }/>
    </div>
  )
}