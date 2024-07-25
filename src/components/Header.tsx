import { KeyboardEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../lib/reducer'

const Header = () => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')

  const createItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addItem(content))
      setContent('')
    }
  }

  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        type="text"
        value={content}
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={createItem}
        autoFocus
      />
    </header>
  )
}

export default Header
