import React, { memo } from 'react'
import '@/assets/css/index.less'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/app-header/header'
import Footer from './components/app-footer/footer'
const App = memo(() => {
  return (
    <div>
      <Header/>
      { useRoutes(routes)}
      <Footer/>
    </div>
  )
})
export default App