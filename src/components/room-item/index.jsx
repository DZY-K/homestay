import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWarpper } from './style'
import { spliceText } from '@/utils/spliceText'
import Rating from '@mui/material/Rating';
const RoomItem = memo((props) => {
  const { itemData, itemwidth="25%" } = props
  function flag() {
    return itemData.bottom_info?.content && " · "
  }
  return (
    <RoomItemWarpper 
    fontscolor={itemData?.verify_info?.text_color || '#767676'}
    itemwidth={itemwidth}
    >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="室内图片" />
        </div>
        <div className="messages">
          {itemData.verify_info.messages.join("·")}
        </div>
        <div className="name">
          {itemData.name}
        </div>
        <div className="price_format">
          {spliceText(itemData.price_format, '/晚')}
        </div>
        <div className="bottom_info">
          <span>
            <Rating
              value={itemData?.star_rating ?? 5}
              readOnly
              precision={0.5}
              sx={{ fontSize: '12px', color: '#008489' }}
            />
          </span>
          <span className='text'>{itemData.reviews_count}</span>
          <span className='text'>{flag()}</span>
          <span className='text'>{  itemData.bottom_info?.content }</span>
        </div>
      </div>
    </RoomItemWarpper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem