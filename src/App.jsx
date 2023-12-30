import React, { memo, useEffect, useState } from 'react'
import '@/assets/css/index.less'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'
// import Header from './components/app-header/header'
import Footer from './components/app-footer/footer'
import BackTop from './components/backTop'
const App = memo(() => {
  const [showTop, setShowTop] = useState(false)
  const location = useLocation()
  useEffect(() => {
    window.addEventListener('scroll', function () {
      // console.log(Number(window.scrollY))
        setShowTop(Number(window.scrollY) > Number(500) )
    })
    window.scrollTo(0, 0)
  }, [ location.pathname])
  return (
    <div>
      {/* <Header /> */}
      {useRoutes(routes)}
      {/* 回到顶部 */}
      { showTop && <BackTop />}
      <Footer />
    </div>
  )
})
export default App