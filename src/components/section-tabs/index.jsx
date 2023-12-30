import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWarpper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const sectionTabs = memo((props) => {
  const {cityname = [], tabClick} = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function changeActive(index, name) {
    setCurrentIndex(index)
    tabClick(name)
  }

  return (
      <SectionTabsWarpper>
        <ScrollView>
        {
          cityname.map((item, index) => {
            return (
              <div 
                // className={["cityName" , (currentIndex === index ? "active" : "")].join("  ")}
                className={ classNames("cityName", {"active" : currentIndex === index})}
                key={index}
                onClick={() => changeActive(index, item)}
                title={item}
              >{item}</div>
            ) 
          })
        }
        </ScrollView>
      </SectionTabsWarpper>

  )
})

sectionTabs.propTypes = {
  cityname: PropTypes.array
}

export default sectionTabs