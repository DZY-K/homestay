import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionItem from '@/components/section-item'
import SectionHeader from '@/components/section-header'
import { HomeSectionV1Warpper } from './style'
import SectionMore from '@/components/section-more'

const homeSectionV1 = memo((props) => {
  const {roominfodata} = props
  // console.log(roominfodata)
  return (
    <HomeSectionV1Warpper>
      <SectionHeader title={roominfodata?.title} subtitle={roominfodata?.subtitle}/>
      <SectionItem homeItemlist={roominfodata?.list} itemwidth="25%" />
      <SectionMore/>
    </HomeSectionV1Warpper>
  )
})

homeSectionV1.propTypes = {
  roominfodata: PropTypes.object
}

export default homeSectionV1