import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PicturesWarpper } from './style'

const Picture = memo((props) => {
  const {itemPictures, isShow } = props
  // console.log(itemPictures)
  function showHandle() {
    if(isShow) isShow()
  }
  return (
    <PicturesWarpper>
      <div className="pictures" >
        <div className="leftP">
          <div className="items" onClick={showHandle} >
            <img src={itemPictures?.picture_urls?.[0]} alt="房屋图片" 
             />
            <div className="cover"></div>
          </div>
        </div>
        <div className="rightP">
          {
            itemPictures?.picture_urls?.slice(1, 5).map((item, index) => {
              return <div className="items" key={item._id} onClick={showHandle}>
                <img src={item} alt="房屋图片"  key={item._id}/>
                <div className="cover"></div>
              </div>
            })
          }
        </div>
      </div>
    </PicturesWarpper>

  )
})

Picture.propTypes = {
  itemPictures: PropTypes.object
}

export default Picture