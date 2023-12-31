import React, { memo, useState } from 'react'
import { DetailWarpper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import Picture from './c-cpns/pictures'
import DetailContent from './c-cpns/detail-content'
import PictureBrowser from '@/components/picture-browser'
import Header from '@/components/app-header/header'


const Detail = memo((props) => {
  const [isShow, setIsShow] = useState(false)
  const {itemData} = useSelector((state) => ({
    itemData: state.detail.itemData
  }), shallowEqual)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(changeItemDataAction())
  // }, [dispatch])
  function showP() {
    setIsShow(true)
  }
  return (
    <DetailWarpper>
      <Header isfix={false} isScroll={false} />
      <Picture itemPictures={itemData} isShow={() => setIsShow(true)} />
      <div className="showPicture" onClick={showP}>查看图片</div>
      { isShow && <PictureBrowser isShow={() => setIsShow(false)} 
      itemP={itemData?.picture_urls}/>}
      <DetailContent/>
    </DetailWarpper>
  )
})

export default Detail