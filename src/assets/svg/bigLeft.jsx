import React, { memo } from 'react'
import { styleStrToObj } from './until'

const BigLeft = memo(() => {
  return (
    <div>
      <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={styleStrToObj("height: 4.8em; width: 4.8em; fill: rgb(255, 255, 255);")}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path></svg>
    </div>
  )
})

export default BigLeft