import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { HomeSectionV2Warpper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionItem from '@/components/section-item'
import SectionMore from '@/components/section-more'
const homeSectionV2 = memo((props) => {
  const { infoData } = props
  // 提取数据 
  const nameList = infoData?.dest_address?.map(item => item.name)
  // 接收在子组件传来的数据
  const [name, setName] = useState(infoData.dest_address[0].name)
  const tabClickHandle = useCallback((name) => {
    setName(name)
  }, [])
  return (
    <HomeSectionV2Warpper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs cityname={nameList} tabClick={tabClickHandle} />
      <SectionItem homeItemlist={infoData.dest_list?.[name]} itemwidth="33.333%" />
      <SectionMore cityNameShow={name}  />
    </HomeSectionV2Warpper>
  )
})

homeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default homeSectionV2