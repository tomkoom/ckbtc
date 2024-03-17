import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/state/_store"

interface TotalSupplyState {
  totalSupply: string
}

const initialState: TotalSupplyState = {
  totalSupply: "",
}

const totalSupply = createSlice({
  name: "totalSupply",
  initialState,
  reducers: {
    // ...
    setTotalSupply(state, { payload }: PayloadAction<string>) {
      state.totalSupply = payload
    },
  },
})

export const selectTotalSupply = (state: RootState) => state.totalSupply.totalSupply

export const { setTotalSupply } = totalSupply.actions
export default totalSupply.reducer
