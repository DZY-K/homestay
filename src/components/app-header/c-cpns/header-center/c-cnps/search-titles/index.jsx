import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SearchTitleWarpper } from './style'
import classNames from 'classnames'

const SearchTiltle = memo((props) => {

  const {titles, itemIndex } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function switchTitleHandle(index) {
    // console.log(index)
    if(itemIndex) itemIndex(index)
    setCurrentIndex(index)
  }
  return (
    <SearchTitleWarpper>
      <div className="titles">
            {
              titles.map((item, index) => {
                return <div 
                className={classNames("title", {active: currentIndex === index})}
                 key={index}
                  onClick={() => switchTitleHandle(index)}>{item}</div>
              })
            }
          </div>
    </SearchTitleWarpper>
  )
})

SearchTiltle.propTypes = {
  titles: PropTypes.array
}

export default SearchTiltle