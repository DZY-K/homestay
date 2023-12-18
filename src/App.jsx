import React, { memo } from 'react'
import '@/assets/css/index.less'
import { useRoutes } from 'react-router-dom'
import routes from './router'
const App = memo(() => {
  return (
    <div>
      <div className="header">header</div>
      { useRoutes(routes)}
      <div className="footer">footer</div>
    </div>
  )
})
export default App