
import { getDiscountData, getGoodPriceData, getHighScoreData, getHotCityData, getHotRecommendData, getPlusRoomData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchHomeInfoAction = createAsyncThunk(
  "fetchHomeData",
  (payload, { dispatch }) => {
    getGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })
    getHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })
    getDiscountData().then(res => {
      dispatch(changeDiscountInfoAction(res))
    })
    getHotRecommendData().then(res => {
      dispatch(changeHotRecommendAction(res))
    })
    getHotCityData().then(res => {
      dispatch(changeHotCityAction(res))
    })
    getPlusRoomData().then(res => {
      dispatch(changePlusRoomAction(res))
    })
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommend: {},
    hotCity: {},
    plusRoom: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeHotCityAction(state, { payload }) {
      state.hotCity = payload
    },
    changePlusRoomAction(state, { payload }) {
      state.plusRoom = payload
    }
  },
  // extraReducers: (builder) => {
  // builder.addCase(fetchGoodPriceInfoAction.fulfilled, (state, { payload }) => {
  // console.log(payload)
  // state.goodPriceInfo = payload
  // })
  // }
})
export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
  changeHotCityAction,
  changePlusRoomAction
} = homeSlice.actions
export default homeSlice.reducer