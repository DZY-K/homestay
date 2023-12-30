import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { CarouselChartWarpper } from './style'
import { Carousel } from 'antd';
import ArrowLeft from '@/assets/svg/arrow-left';
import ArrowLogo from '@/assets/svg/arrow-logo';
import Indicator from '../indicator';
import classNames from 'classnames';
const CarouselChart = memo((props) => {
  const [indexValue, setIndexValue] = useState(0)
  const { pictures } = props
  const silderRef = useRef()
  function switchHandle(isRight = true, e) {
    e.stopPropagation();
    isRight ? silderRef.current.next() : silderRef.current.prev()
    // 指示器
    let newIndex = isRight ? indexValue + 1 : indexValue - 1
    if (newIndex > pictures.length - 1) newIndex = 0
    if (newIndex < 0 ) newIndex = pictures.length - 1
    setIndexValue(newIndex)
    // console.log(newIndex)
    
  }

  
  
  return (
    <CarouselChartWarpper>
      <div className="swiper">
        <div className="leftMove btn" onClick={(e) => switchHandle(false, e)}>
          <ArrowLeft size={20} />
        </div>
        <div className="rightMove btn" onClick={(e) => switchHandle(true, e)}>
          <ArrowLogo size={20} />
        </div>
        <Carousel dots={false} ref={silderRef} >
          {
            pictures?.map((item, index) => {
              return <div className="cover" key={index}>
                <img src={item} alt="房屋图片" />
              </div>
            })
          }
        </Carousel>
        {/* 指示器 */}
        <div className="list">
          <Indicator indexValue={indexValue}>

            {
              pictures?.map((item, index) => {
                // return <button key={index} className='btn'>{item}</button>
                return <div className="btnItem" key={index}>
                  <div className={classNames(
                    "item",
                    { active: indexValue === index },
                    // { smallSize: indexValue === index - 1 || indexValue === index + 1 },
                    // { miniSize: indexValue === index - 2 || indexValue === index + 2 },
                  )}></div>
                </div>
              })
            }

          </Indicator>
        </div>
      </div>

    </CarouselChartWarpper>
  )
})

CarouselChart.propTypes = {
  pictures: PropTypes.array
}

export default CarouselChart