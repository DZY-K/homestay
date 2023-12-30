import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWaarpper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import useScrollTrigger from '@/hooks/scroll'
import { ThemeProvider } from 'styled-components'

const Header = memo((props) => {
  const { isfix } = props
  const [show, setShow] = useState(false)
  // console.log(isfix)
  function isShow() {
    setShow(false)
  }
  const { scorllY } = useScrollTrigger()
  // console.log(scorllY)
  let scorllValue = useRef(0)
  if (!show) scorllValue.current = scorllY
  if (show && Math.abs(scorllY - scorllValue.current) > 10) setShow(false)
  const isTran = scorllY === 0
  return (
    <ThemeProvider theme={{ isTran }}>
      <HeaderWrapper isfix={isfix ? "fixed" : "absolute"}>
        <div className="main">
          <div className="contentS">
            <HeaderLeft />
            <HeaderCenter show={isTran || show} searchClick={() => setShow(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWaarpper $show={isTran || show ? true : undefined} />
        </div>
        {show && <div className="cover" onClick={isShow}></div>}
      </HeaderWrapper>

    </ThemeProvider>
  )
})

export default Header