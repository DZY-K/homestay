import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV4Warpper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionMore from '@/components/section-more'
const HomeSectionV4 = memo((props) => {
  const { plusRoomInfo = {} } = props
  return (
    <HomeSectionV4Warpper>
      <SectionHeader title={plusRoomInfo.title} subtitle={plusRoomInfo.subtitle} />
      <div className="plusList">
        <ScrollView>
          {/* <SectionItem homeItemlist={plusRoomInfo.list} /> */}
          {
            plusRoomInfo.list.map((item) => {
              return <RoomItem itemData={item} key={item.id} itemwidth='20%' />
            })
          }
        </ScrollView>
      </div>
      <SectionMore cityNameShow="plus" />
    </HomeSectionV4Warpper>
  )
})

HomeSectionV4.propTypes = {
  plusRoomInfo: PropTypes.object
}

export default HomeSectionV4