import React, { memo } from 'react'
import { HeaderCenterWarpper } from './style'
import Searchlogo from '@/assets/svg/search-logo'
const HeaderCenter = memo(() => {
  return (
    <HeaderCenterWarpper>
      <div className="searchText">搜索房源和体验</div>
      <div className="searchIcon">
        <Searchlogo/>
      </div>
    </HeaderCenterWarpper>
  )
})

export default HeaderCenter