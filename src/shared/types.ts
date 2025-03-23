export type Product = {
  id: string
  title: string
  description: string
  price: number
  category: string
  image: string
  isLiked: boolean
  rating: number
}

export type Category = {
  id: number
  name: string
  label: string
}
