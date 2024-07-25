import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from '../lib/store'
import { getFilter } from '../lib/utils'
import ItemDetails from './ItemDetails'

const ItemList = () => {
  const { pathname } = useLocation()
  const items = useSelector((state: RootState) => state.items)
  const itemsToShow = items.filter(getFilter(pathname.slice(1)))

  return (
    <ul className="todo-list">
      {itemsToShow.map((item) => (
        <ItemDetails key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default ItemList
