import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home/index"))
const Detail = React.lazy(() => import("@/views/detail/index"))
const Entire = React.lazy(() => import("@/views/entire/index"))
const Test = React.lazy(() => import("@/views/test/index"))
const NotFound = React.lazy(() => import("@/components/NotFound"))
const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
export default routes
