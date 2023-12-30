import React, { memo, useCallback, useState } from 'react'
import { HeaderCenterWarpper } from './style'
import Searchlogo from '@/assets/svg/search-logo'
import searchData from "@/assets/data/search_titles.json"
import SearchTiltle from './c-cnps/search-titles'
import SearchContent from './c-cnps/search-content'
import { CSSTransition } from 'react-transition-group'
const HeaderCenter = memo((props) => {
  const { show, searchClick } = props
  const titles = searchData.map((item) => item.title)
  const [dataIndex, setDataIndex] = useState(0)

  const switchHandle = useCallback((index) => {
    // console.log(index)
    setDataIndex(index)
  }, [setDataIndex])
  function isShowHandle() {
    if (searchClick) searchClick()
  }


  return (
    <HeaderCenterWarpper>
      <CSSTransition
        in={!show}
        classNames={"login"}
        timeout={250}
        unmountOnExit
      >
        <div className="searchBtn" onClick={isShowHandle}>
          <div className="searchText">搜索房源和体验</div>
          <div className="searchIcon">
            <Searchlogo />
          </div>
        </div>
      </CSSTransition>

      {/* 点击搜索 */}
      <CSSTransition
        in={show}
        classNames={"detail"}
        timeout={250}
        unmountOnExit
      >
        <div className="searchContent">
          <div className="info">
            <div className="top">
              <SearchTiltle titles={titles} itemIndex={switchHandle} />
            </div>
            <div className="bottom">
              <SearchContent searchData={searchData[dataIndex].searchInfos} />
            </div>
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWarpper>
  )
})

export default HeaderCenter