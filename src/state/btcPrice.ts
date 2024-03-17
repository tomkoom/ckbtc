import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "@/state/_store"
import { BTC_PRICE_URL } from "@/constants/_index"

export const fetchBtcPrice = createAsyncThunk("btcPrice/fetchBtcPrice", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(BTC_PRICE_URL)
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

interface BtcPriceState {
  btcPrice: number
  icp24hPriceChange: number
  status: string | null
  error: string | null
}

const initialState: BtcPriceState = {
  btcPrice: 0,
  icp24hPriceChange: 0,
  status: null,
  error: null,
}

const btcPrice = createSlice({
  name: "btcPrice",
  initialState,
  reducers: {},
  // https://redux-toolkit.js.org/api/createSlice#the-extrareducers-builder-callback-notation
  extraReducers: (builder) => {
    builder
      .addCase(fetchBtcPrice.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchBtcPrice.fulfilled, (state, { payload }) => {
        state.status = "resolved"
        state.btcPrice = payload["bitcoin"].usd
        state.icp24hPriceChange = payload["bitcoin"].usd_24h_change
      })
      .addCase(fetchBtcPrice.rejected, (state, { payload }) => {
        state.status = "rejected"
        state.error = payload
      })
  },
})

export const selectBtcPrice = (state: RootState) => state.btcPrice.btcPrice
export const selectIcp24hPriceChange = (state: RootState) => state.btcPrice.icp24hPriceChange

export default btcPrice.reducer
