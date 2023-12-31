import React, { memo, useEffect } from 'react'
import HomeBanner from './c-cpns/home-banner'
import HomeWarpper from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeInfoAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { isEmptyObject } from '@/utils'
import HomeSectionV4 from './c-cpns/home-section-v4'
import Header from '@/components/app-header/header'
const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommend, hotCity, plusRoom } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommend: state.home.hotRecommend,
    hotCity: state.home.hotCity,
    plusRoom: state.home.plusRoom
  }), shallowEqual)
  // 派发异步事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeInfoAction())
  }, [dispatch])

  return (
    <HomeWarpper>
      <Header isfix="true" isScroll={true}/>
      <HomeBanner />
      <div className="content">
        {/* 折扣/选择城市 */}
        { isEmptyObject(discountInfo) &&  <HomeSectionV2 infoData={discountInfo} />}
        {/* 热门推荐 */}
        { isEmptyObject(hotRecommend) &&  <HomeSectionV2 infoData={hotRecommend} />}
        {/* 向往/热门 城市 */}
        { isEmptyObject(hotCity) && <HomeSectionV3 cityData={hotCity}/>}
        {/* 高分房源 */}
        {isEmptyObject(goodPriceInfo) &&  <HomeSectionV1  roominfodata={goodPriceInfo}/>}
        {/* 高性价房源 */}
        {isEmptyObject(highScoreInfo) &&  <HomeSectionV1 roominfodata={highScoreInfo} />}
        {/* plus 房源 */}
        {isEmptyObject(plusRoom) && <HomeSectionV4 plusRoomInfo={plusRoom}/>}
      </div>
    </HomeWarpper>
  )
})

export default Home