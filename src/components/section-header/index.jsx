import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeadWarpper } from './style'
const sectionHeader = memo((props) => {
  const { title, subtitle } = props
  // console.log(subtitle)
  return (
   <SectionHeadWarpper>
    <h2>{title}</h2>
    { subtitle && <div className="subtitle">{subtitle}</div>}
    </SectionHeadWarpper>
  )
})

sectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default sectionHeader