// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWarpper } from './style'
import list from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const FilterData = memo((props) => {
  const [showBg, setShowBg] = useState([])
  // console.log(showBg)
  function showBgHandle(item) {
    const newArr = [...showBg]
    if (showBg.includes(item)) {
      const index = newArr.findIndex(a => a === item)
      newArr.splice(index, 1)
    }else {
      newArr.push(item)
    }
    setShowBg(newArr)
    console.log(showBg)
  }
  return (
    <FilterWarpper>
      {
        list.map((item, index) => {
          return <div 
           className={classNames("listItem", {active: showBg.includes(item)})}
           key={index}
           onClick={() => showBgHandle(item)}
           >{item}</div>
        })
      }
    </FilterWarpper>
  )
})

// index.propTypes = {}

export default FilterData