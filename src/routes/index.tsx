import { Navigate, useRoutes } from 'react-router-dom'
import CocktailPage from '../pages/CocktailPage/CocktailPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

const cocktailCodes = ['margarita', 'mojito', 'a1', 'kir']

export default function AppRoutes() {
  return useRoutes([
    { path: '/', element: <Navigate to={`/${cocktailCodes[0]}`} replace /> },
    ...cocktailCodes.map((code) => ({
      path: `/${code}`,
      element: <CocktailPage code={code as any} />,
    })),
    { path: '*', element: <NotFoundPage /> },
  ])
}
