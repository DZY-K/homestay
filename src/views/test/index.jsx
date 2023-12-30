// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TestWarpper } from './style'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const Test = memo((props) => {
  const arr = ["阿松大", "二人台", "发发发", "很尴尬", "第三方", "风格和", "会烦的", "会烦的", "会烦的", "会烦的", "会烦的", "会烦的"]
  const [indexValue, setIndexValue] = useState(0)
  const [isValue, setIsValue] = useState(false)
  function changeHandle(isNext = true) {
    let newIndex = isNext ? indexValue + 1 : indexValue - 1
    if (newIndex > arr.length - 1) newIndex = 0
    if (newIndex < 0 ) newIndex = arr.length - 1
    setIndexValue(newIndex)
    // console.log(newIndex)
    if( indexValue === 0 || indexValue === 1) {
      setIsValue(false)
    }else {
      setIsValue(true)
    }
  }

  return (
    <TestWarpper>
      <button onClick={() => changeHandle(false)}>上一个</button>
      <button onClick={() => changeHandle(true)}>下一个</button>
      <div className="list">
      <Indicator indexValue={indexValue}>
        
        {
          arr.map((item, index) => {
            // return <button key={index} className='btn'>{item}</button>
           return <div className="btn" key={index}>
            <div className={classNames(
              "item", 
              {active: indexValue === index},
              {smallSize: isValue && ((indexValue===index-1) || (indexValue===index+1))},
              {miniSize: isValue && ((indexValue===index-2 || indexValue===index+2))},
              {miniSize: !isValue && index === 4 },
              )}></div>
           </div>
          })
        }
        
      </Indicator>
      </div>
    </TestWarpper>
  )
})

Test.propTypes = {}

export default Test