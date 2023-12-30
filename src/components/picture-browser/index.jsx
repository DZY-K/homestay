import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureBrowserWpr } from './style'
import BigLeft from '@/assets/svg/bigLeft'
import BigRight from '@/assets/svg/bigRight'
import Indicator from '@/base-ui/indicator'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
// import { Carousel } from 'antd';


const PictureBrowser = memo((props) => {
  const { isShow, itemP } = props
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  function hiddenP() {
    if (isShow) isShow()
  }

  const [indexValue, setIndexValue] = useState(0)
  const [shows, setShows] = useState(true)
  const [showList, setShowList] = useState(true)

  // const silderRef = useRef()
  function switchHandle(isRight = true) {
    // e.stopPropagation();
    // isRight ? silderRef.current.next() : silderRef.current.prev()
    // 指示器
    let newIndex = isRight ? indexValue + 1 : indexValue - 1
    if (newIndex > itemP.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = itemP.length - 1
    setIndexValue(newIndex)
    setShows(isRight)
    // console.log(newIndex)

  }
  function bottomItemClickHandle(index) {
    setShows(index > setIndexValue)
    setIndexValue(index)
  }

  return (
    <PictureBrowserWpr shows={shows ? "true" : "false"} showlist={showList}>
      <div className="top">
        <div className="hidden" onClick={hiddenP}>x</div>
      </div>
      <div className="picture">
        <div className="big">
          <div className="left" onClick={() => switchHandle(false)}>
            <BigLeft />
          </div>
          <div className="right" onClick={() => switchHandle(true)}>
            <BigRight />
          </div>
        </div>
        <div className="mPicture">

          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={itemP[indexValue]}
              classNames="pic"
              timeout={200}
            >
              <img src={itemP[indexValue]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>

      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{indexValue + 1}/{itemP.length}:</span>
              <span>room apartment图片{indexValue + 1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              {/* { showList? <IconTriangleArrowBottom/>: <IconTriangleArrowTop/> } */}
            </div>
          </div>
          <div className='list'>
            <Indicator indexValue={indexValue}>
              {
                itemP.map((item, index) => {
                  return (
                    <div
                      className={classNames("item", { active: indexValue === index })}
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWpr>
  )
})

PictureBrowser.propTypes = {
  itemP: PropTypes.array
}

export default PictureBrowser