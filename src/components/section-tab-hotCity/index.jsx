import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HotCityTabWarpper } from './style'
import { spliceText } from '@/utils/spliceText'

const HotCityTab = memo((props) => {
  const { hotCityData = {} } = props
  return (
    <HotCityTabWarpper>
      <div className="cityTab">
        <img src={hotCityData.picture_url} alt="城市图片" title={hotCityData.city} />
        <div className="info">
          <div className="city">{hotCityData.city}</div>
          <div className="price">{spliceText("均价", hotCityData.price)}</div>
        </div>
        <div className="bg"></div>
      </div>
    </HotCityTabWarpper>
  )
})

HotCityTab.propTypes = {
  hotCityData: PropTypes.object
}

export default HotCityTab