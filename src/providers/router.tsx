import { publicRoutes } from '@/config'
import { ROUTES } from '@/constants'
import { Redirect, Route, Switch } from '@/libs'

/*----------  Creates routes defined in config and renders pages  ----------*/

const RouterProvider = () => {
  return (
    <Switch>
      <Route component={() => <Redirect to={ROUTES.HOME} replace />} path={ROUTES.BASE} />
      {publicRoutes.map(({ component: Component, path }) => (
        <Route component={Component} key={path} path={path} />
      ))}
    </Switch>
  )
}

export { RouterProvider }
