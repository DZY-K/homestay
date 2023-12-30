import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWarpper } from './style'

const Indicator = memo((props) => {
  const {indexValue} = props
  const currentRef = useRef()
  useEffect(() => {
    // console.log(currentRef.current)
    const currentEl = currentRef.current.children[indexValue]
    let elOffsetL = currentEl.offsetLeft
    // console.log(elOffsetL)
    // if(elOffsetL) elOffsetL= 0
    const elClientW = currentEl.clientWidth
    // 父盒子 宽度
    const currentRefW = currentRef.current.clientWidth
    // console.log(elOffsetL, elClientW)
    // 移动到中间的距离
    let moveMiddleL = elOffsetL + elClientW * 0.5 - currentRefW * 0.5
    if(moveMiddleL < 0) moveMiddleL = 0
    // 能滚动的长度
    const currentScroll = currentRef.current.scrollWidth
    // 超出的长度
    const scrollDistance = currentScroll - currentRefW
    if(moveMiddleL > scrollDistance) moveMiddleL = scrollDistance
    currentRef.current.style.transform = `translate(${-moveMiddleL}px)`
  }, [indexValue])
  return (
    <IndicatorWarpper  >
      <div className="lists" ref={currentRef}>
      {
        props.children
      }
      </div>
    </IndicatorWarpper>
  )
})

Indicator.propTypes = {
  indexValue: PropTypes.number
}

export default Indicator