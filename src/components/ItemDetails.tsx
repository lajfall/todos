import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { KeyboardEvent } from 'react'
import { Item } from '../lib/types'
import { deleteItem, toggleItem, updateContent } from '../lib/reducer'

const ItemDetails = ({ item }: { item: Item }) => {
  const dispatch = useDispatch()
  const editor = useRef<HTMLInputElement>(null)
  const [editing, setEditing] = useState(false)
  const [newContent, setNewContent] = useState(item.content)

  useEffect(() => {
    if (editing && editor.current) {
      editor.current.focus()
    }
  }, [editing])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      saveItem()
    } else if (e.key === 'Escape') {
      quitEditing()
    }
  }

  const saveItem = () => {
    dispatch(updateContent({ id: item.id, content: newContent }))
    setEditing(false)
  }

  const quitEditing = () => {
    setNewContent(item.content)
    setEditing(false)
  }

  return (
    <li
      key={item.id}
      className={`${item.completed ? 'completed' : ''} ${
        editing ? 'editing' : ''
      }`}
    >
      <div className="view">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {
            dispatch(toggleItem(item.id))
          }}
          id={item.id}
          className="toggle"
        />
        <label
          onDoubleClick={() => {
            setEditing(true)
          }}
        >
          {item.content} {editing}
        </label>
        <button
          onClick={() => dispatch(deleteItem(item.id))}
          className="destroy"
        ></button>
      </div>
      <input
        type="text"
        ref={editor}
        className="edit"
        value={newContent}
        onChange={(e) => {
          setNewContent(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => saveItem()}
      />
    </li>
  )
}

export default ItemDetails
