// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWarpper } from './style'
import { residueLength } from '@/utils'
import ArrowLogo from '@/assets/svg/arrow-logo'
import ArrowLeft from '@/assets/svg/arrow-left'

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false)
  const [offsetLength, setOffsetLength] = useState(0)
  const [index, setIndex] = useState(0)
  const scrollDataRef = useRef()
  // 控制右按钮显隐
  useEffect(() => {
    setShowRight(residueLength(scrollDataRef) > 0)
  }, [props.children])
  // 点击右按钮移动
  function scrollRight() {
    const newOffsetLeft = scrollDataRef.current.children[index + 1].offsetLeft
    setOffsetLength(-newOffsetLeft)
    // 控制右按钮消失
    setShowRight(residueLength(scrollDataRef) > newOffsetLeft)
    setIndex(index + 1)
  }
  // 点击左按钮移动
  function scrollLeft() {
    const nextOffsetLeft = scrollDataRef.current.children[index - 1].offsetLeft
    setOffsetLength(-nextOffsetLeft)
    setIndex(index - 1)
    // 控制右按钮显示
    setShowRight(residueLength(scrollDataRef) > 0)
  }
  return (
    <ScrollViewWarpper offsetlength={offsetLength}>
      {/* 控制左按钮显示 */}
      <div className="boxbgliner">
        {(index === 0 ? false : true) && <button onClick={scrollLeft} className='left'>
          <ArrowLeft />
        </button>}
      </div>
      {showRight && <button onClick={scrollRight} className='right'>
        <ArrowLogo />
      </button>}
      <div className="boxhd">
        <div className="scroll-contrent" ref={scrollDataRef} >
          {props.children}
        </div>
      </div>
    </ScrollViewWarpper>
  )
})

// ScrollView.propTypes = {}

export default ScrollView