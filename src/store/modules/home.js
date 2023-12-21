
import { getDiscountData, getGoodPriceData, getHighScoreData, getHotRecommendData } from "@/services";
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
  }
)
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommend: {}
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
  changeHotRecommendAction
} = homeSlice.actions
export default homeSlice.reducer