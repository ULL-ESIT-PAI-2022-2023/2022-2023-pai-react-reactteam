/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 20 2023
 * @desc CardGrid.tsx
 * 
 */

import { CardProps } from "../helpers/interfaces"
import { Card } from "./Card"

export const CardGrid = ( {projects}: {projects: CardProps[]} ): JSX.Element => {
  return (
    <>
      <div className="card-grid">
        {
          projects.map((project: CardProps) => (
            <Card 
              key={ project.id }
              { ...project }
            />
          ))
        }  
      </div>
    </>
  )
} 