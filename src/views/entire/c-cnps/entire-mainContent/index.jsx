import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { EntireContentWarpper } from './style'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeItemDataAction } from '@/store/modules/detail'

const EntireMainContent = memo((props) => {
  const { listData, isLoading } = props
  // console.log(isLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const navigateHandle = useCallback((item) => {
    dispatch(changeItemDataAction(item))
    navigate("/detail")
  },[navigate, dispatch])
  return (
    <EntireContentWarpper>
      <div className="title">共{listData.totalCount}出住所</div>
      <div className="list">
        {
          listData?.list?.map((item) => {
            return <RoomItem 
            key={item._id} 
            itemData={item} 
            itemwidth="20%" 
            itemClick={navigateHandle}
            />
          })
        }
      </div>
      { isLoading && <div className="bgCover"></div>}
    </EntireContentWarpper>
  )
})

EntireMainContent.propTypes = {
  listData: PropTypes.object
}

export default EntireMainContent