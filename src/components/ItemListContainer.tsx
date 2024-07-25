import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/store'
import { toggleAll } from '../lib/reducer'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.items.length)

  return (
    <main className="main">
      <div className={count === 0 ? 'hidden' : ''}>
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          onChange={() => dispatch(toggleAll())}
        />
        <label htmlFor="toggle-all"></label>
      </div>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/active" element={<ItemList />} />
        <Route path="/completed" element={<ItemList />} />
      </Routes>
    </main>
  )
}

export default ItemListContainer
