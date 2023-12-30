import React, { memo, useEffect } from 'react'
import { EntireWarpper } from './style'
import FilterData from './c-cnps/filter-data'
import EntireMainContent from './c-cnps/entire-mainContent'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchEntireInfoAction } from '@/store/modules/entire'
import EntirePager from './c-cnps/entire-pager'
import Header from '@/components/app-header/header'

const Entire = memo((props) => {
  const {allList, currentPage, isLoading} = useSelector((state) => ({
    allList: state.entire.allList,
    currentPage: state.entire.currentPage,
    isLoading:  state.entire.isLoading
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireInfoAction())
  }, [dispatch, currentPage])
  return (
    <EntireWarpper>
      <Header  isfix="true" />
      <FilterData/>
      <EntireMainContent listData={allList} isLoading={isLoading}/>
      <EntirePager pagerData={allList}  />
    </EntireWarpper>
  )
})

export default Entire