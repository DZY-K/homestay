import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Warpper } from './style'
import SectionHeader from '@/components/section-header'
import HotCityTab from '@/components/section-tab-hotCity'
import ScrollView from '@/base-ui/scroll-view'
const HomeSectionV3 = memo((props) => {
  const { cityData = {} } = props
  return (
    <HomeSectionV3Warpper>
      <SectionHeader title={cityData.title} subtitle={cityData.subtitle} />
      <div className="hotlist">
      <ScrollView>
        
          {
            cityData.list.map((item, index) => {
              return <HotCityTab hotCityData={item} key={index} />
            })
          }
        
      </ScrollView>
      </div>
    </HomeSectionV3Warpper>
  )
})

HomeSectionV3.propTypes = {
  cityData: PropTypes.object
}

export default HomeSectionV3