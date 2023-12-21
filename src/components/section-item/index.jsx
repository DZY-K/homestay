import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionItemWarpper } from './style'
import RoomItem from '../room-item'

const SectionItem = memo((props) => {
  const { homeItemlist , itemwidth} = props
  return (
    <SectionItemWarpper>
      {
        homeItemlist?.slice(0, 8).map
          ((item) => {
            return <RoomItem key={item.id} itemData={item} itemwidth={itemwidth} />
          })
      }
    </SectionItemWarpper>
  )
})

SectionItem.propTypes = {
  homeItemlist: PropTypes.array
}

export default SectionItem