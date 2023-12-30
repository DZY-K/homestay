import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionMoreWarpper } from './style'
import SeeMore from '@/assets/svg/SeeMore'
import { useNavigate } from 'react-router-dom'

const SectionMore = memo((props) => {
  const {cityNameShow} = props
  const navigate = useNavigate()
  function jumpMoreHandle() {
    navigate('/entire')
  }
  return (
    <SectionMoreWarpper color={cityNameShow ? "#008489" : "#000"}>
        <div className="more" onClick={jumpMoreHandle}>
          {/* {("显示更多" + cityNameShow + "房源")  || "查看全部"} */}
          {cityNameShow ? `显示更多${cityNameShow}房源` : "显示全部"}
        </div>
        <SeeMore/>
    </SectionMoreWarpper>
  )
})

SectionMore.propTypes = {
  cityNameShow: PropTypes.string
}

export default SectionMore