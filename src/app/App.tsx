import { BrowserRouter } from 'react-router-dom'
import NavMenu from '../widgets/NavMenu/NavMenu'
import AppRoutes from '../routes'
import './styles/main.scss'
import './styles/reset.scss'
import './styles/variables.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavMenu />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
