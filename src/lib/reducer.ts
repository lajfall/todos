import { createSlice } from '@reduxjs/toolkit'
import { Item } from './types'

const itemsSlice = createSlice({
  name: 'items',
  initialState: Array<Item>,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: crypto.randomUUID(),
        content: action.payload,
        completed: false,
      }
      state.push(newItem)
    },
    toggleItem: (state, action) => {
      const item = state.find((i) => i.id === action.payload)
      if (item) {
        item.completed = !item.completed
      }
    },
    toggleAll: (state) => {
      if (state.filter((item) => !item.completed).length > 0) {
        state.forEach((item) => {
          if (!item.completed) {
            item.completed = true
          }
        })
      } else {
        state.forEach((item) => {
          item.completed = false
        })
      }
    },
    updateContent: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id)
      if (item) {
        item.content = action.payload.content
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    clearCompleted: (state) => {
      return state.filter((item) => !item.completed)
    },
  },
})

export const {
  addItem,
  toggleItem,
  toggleAll,
  updateContent,
  deleteItem,
  clearCompleted,
} = itemsSlice.actions

export default itemsSlice.reducer
