import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { RootState } from '../lib/store'
import { formatItemCount } from '../lib/utils'
import { clearCompleted } from '../lib/reducer'

const Footer = () => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const items = useSelector((state: RootState) => state.items)
  const activeCount = items.filter((item) => !item.completed).length
  const finishCount = items.length - activeCount

  const links = [
    { to: '/', label: 'All' },
    { to: '/active', label: 'Active' },
    { to: '/completed', label: 'Completed' },
  ]

  if (items.length > 0) {
    return (
      <footer className="footer">
        <span className="todo-count">{formatItemCount(activeCount)}</span>
        <ul className="filters">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`${link.to === pathname ? 'selected ' : ''}link`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {finishCount > 0 && (
          <span
            className="clear-completed"
            onClick={() => dispatch(clearCompleted())}
          >
            Clear completed
          </span>
        )}
      </footer>
    )
  }
}

export default Footer
