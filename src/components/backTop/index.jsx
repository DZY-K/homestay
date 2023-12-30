// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { BackTopWarpper } from './style'
import Arrowtop from '@/assets/svg/arrow-top'

const BackTop = memo((props) => {
  function backTopHandle() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <BackTopWarpper onClick={backTopHandle}>
      <div className="top">
      <Arrowtop />
      </div>
      <div className="text">
        回到顶部
      </div>
    </BackTopWarpper>
  )
})

// BackTop.propTypes = {}

export default BackTop