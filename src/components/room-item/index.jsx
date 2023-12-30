import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWarpper } from './style'
import { spliceText } from '@/utils/spliceText'
import Rating from '@mui/material/Rating';
import CarouselChart from '@/base-ui/carouselChart';


const RoomItem = memo((props) => {
  const { itemData, itemwidth="25%", itemClick } = props
  function flag() {
    return itemData.bottom_info?.content && " · "
  }
  function switchHandle() {
    if(itemClick) itemClick(itemData)
  }
  return (
    <RoomItemWarpper 
    fontscolor={itemData?.verify_info?.text_color || '#767676'}
    itemwidth={itemwidth}
    onClick={switchHandle}
    >
      <div className="inner">
        {
         (itemData?.picture_urls) ? <CarouselChart pictures={itemData?.picture_urls} /> : <div className="cover">
          <img src={itemData.picture_url} alt="房屋图片" /> </div>
        }
        <div className="messages">
          {itemData?.verify_info.messages.join("·")}
        </div>
        <div className="name">
          {itemData?.name}
        </div>
        <div className="price_format">
          {spliceText(itemData?.price_format, '/晚')}
        </div>
        <div className="bottom_info">
          <span>
            <Rating
              value={itemData?.star_rating ?? 5}
              readOnly
              precision={0.5}
              sx={{ fontSize: '10px', color: '#008489' }}
            />
          </span>
          <span className='text'>{itemData?.reviews_count}</span>
          <span className='text'>{flag()}</span>
          <span className='text'>{  itemData?.bottom_info?.content }</span>
        </div>
      </div>
    </RoomItemWarpper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem