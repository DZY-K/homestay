import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EntirePagerWarpper } from './style'
import { Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { changeCurrentPageAction } from '@/store/modules/entire';



const EntirePager = memo((props) => {
  const {pagerData} = props
  const dispatch = useDispatch()
  function pageChangeHandle(page) {
    // console.log(page, pageSize)
    dispatch(changeCurrentPageAction(page - 1))
    window.scrollTo(0, 0)
  }
  return (
    <EntirePagerWarpper>
      <div className="pager">
      <Pagination 
      total={pagerData.totalCount} 
      showSizeChanger={false}
      className='pageItem'
      showTotal={(total, range) => `第 ${range[0]} - ${range[1]} 个房源, 共超过 ${total} 个`}
      defaultPageSize={20}  
      defaultCurrent={1}
      onChange={pageChangeHandle}
      />
      </div>
    </EntirePagerWarpper>
  )
})

EntirePager.propTypes = {
  pagerData:PropTypes.object,
}

export default EntirePager