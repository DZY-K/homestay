import React, { memo } from 'react'
import { HeaderLeftWarpper } from './style'
import imgFont from "@/assets/img/logo1.png"
const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWarpper>
      <img src={imgFont} alt="图标:点击可返回首页" />
    </HeaderLeftWarpper>
  )
})

export default HeaderLeft