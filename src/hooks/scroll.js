import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollTrigger() {
  const [scorllX, setScorllX] = useState(0)
  const [scorllY, setScorllY] = useState(0)
  useEffect(() => {
    const handleScroll = throttle(function () {
      setScorllX(window.scrollX)
      setScorllY(window.scrollY)
    }, 200)
    window.addEventListener("scroll", handleScroll)
  })
  return { scorllX, scorllY }
}