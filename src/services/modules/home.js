import hyRequest from "../request";
export function getGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}
export function getHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}
export function getDiscountData() {
  return hyRequest.get({
    url: "/home/discount"
  })
}
export function getHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}
export function getHotCityData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}
export function getPlusRoomData() {
  return hyRequest.get({
    url: "/home/plus"
  })
}