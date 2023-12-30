import { getAllList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchEntireInfoAction = createAsyncThunk("fetchEntireInfo",
  async (payload, { dispatch, getState }) => {
    const currentPage = getState().entire.currentPage
    // console.log(currentPage)
    dispatch(changeIsLoadingAction(true))
    const res = await getAllList(currentPage * 20)
    // console.log(res)
    dispatch(changeAllListAction(res))

    dispatch(changeIsLoadingAction(false))
    return res
  }
)
const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    allList: {},
    currentPage: 0,
    isLoading: false
  },
  reducers: {
    changeAllListAction(state, { payload }) {
      state.allList = payload
    },
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  }
})
export const { changeAllListAction, changeCurrentPageAction, changeIsLoadingAction } = entireSlice.actions
export default entireSlice.reducer