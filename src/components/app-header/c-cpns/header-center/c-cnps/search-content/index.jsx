import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchContentWarpper } from './style'

const SearchContent = memo((props) => {
  const {searchData} = props
  return (
    <SearchContentWarpper>
      <div className="SData">
        {
          searchData.map((item, index) => {
            return <div className="item" key={index}>
              <div className="itemTitle">{item.title}</div>
              <div className="itemDessc">{item.desc}</div>
            </div>
          })
        }
      </div>
    </SearchContentWarpper>
  )
})

SearchContent.propTypes = {
  searchData: PropTypes.array
}

export default SearchContent