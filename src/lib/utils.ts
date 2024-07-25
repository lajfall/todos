import { Item } from './types'

export const formatItemCount = (count: number) => {
  return `${count} ${count === 1 ? 'item' : 'items'} left`
}

export const getFilter = (keyword: string) => {
  switch (keyword) {
    case 'active':
      return (item: Item) => !item.completed
    case 'completed':
      return (item: Item) => item.completed
    default:
      return () => true
  }
}
