export interface CardProps {
  title: string, 
  imageUrl: string, 
  id: string,
  pageUrl: string
}

export interface CardPropsList {
  projects: CardProps[]
}