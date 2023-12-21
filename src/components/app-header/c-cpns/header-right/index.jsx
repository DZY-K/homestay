import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWarpper } from './style'
import Arealogo from '@/assets/svg/area-logo'
import Iconlogo from '@/assets/svg/icon-logo'
import Menulogo from '@/assets/svg/menu-logo'
const HeaderRight = memo(() => {
  const [ showPanel, setShowPanel ] = useState(false)
  useEffect(() => {
    window.addEventListener('click' , function(){
      setShowPanel(false)
    }, true)
  }, [])
  function panelClickHandle() {
    setShowPanel(true)
  }
  return (
    <HeaderRightWarpper>
      <div className="login item">登录</div>
      <div className="register item">注册</div>
      <div className="area item">
        <Arealogo/>
      </div>
      <div className="personal item" onClick={panelClickHandle}>
        <Menulogo/>
        <Iconlogo />
        { showPanel && (
          <div className="option">
          <div className="main">
          <div className="registerItem items">注册</div>
          <div className="loginItem items">登录</div>
          </div>
          <div className="other">
          <div className="housing items">出租房源</div>
          <div className="experience items">开展体验</div>
          <div className="help items">帮助</div>
          </div>
        </div>
        )}
      </div>
    </HeaderRightWarpper> 
  )
})

export default HeaderRight