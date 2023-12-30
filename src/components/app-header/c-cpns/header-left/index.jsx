import React, { memo } from 'react'
import { HeaderLeftWarpper } from './style'
import imgFont from "@/assets/img/logo1.png"
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function backHomeHandle() {
    navigate('/home')
  }
  return (
    <HeaderLeftWarpper>
      <img src={imgFont} alt="图标:点击可返回首页" onClick={backHomeHandle}/>
    </HeaderLeftWarpper>
  )
})

export default HeaderLeft