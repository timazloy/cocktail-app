import { NavLink } from 'react-router-dom'
import './NavMenu.scss'

const codes = ['margarita', 'mojito', 'a1', 'kir']

export default function NavMenu() {
  return (
    <nav className="nav">
      {codes.map((code) => (
        <NavLink
          key={code}
          to={`/${code}`}
          className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}
        >
          {code.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  )
}
