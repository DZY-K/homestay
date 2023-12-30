import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    itemData: {}
  },
  reducers: {
    changeItemDataAction(state, { payload }) {
      state.itemData = payload
    }
  }
})
export const { changeItemDataAction } = detailSlice.actions
export default detailSlice.reducer