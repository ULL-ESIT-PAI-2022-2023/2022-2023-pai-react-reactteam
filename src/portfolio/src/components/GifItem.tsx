/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 27 2023
 * @desc GifItem.tsx
 * 
 */

type GifItemProps = {
  title: string, 
  url: string, 
  id: string
}

export const GifItem: React.FunctionComponent<GifItemProps> = ({ title, url, id }) => {

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
