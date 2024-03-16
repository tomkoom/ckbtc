import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/state/_store"

interface Pagination {
  itemsPerPage: number
  itemOffset: number
  totalItems: number
  selectedPage: number
}

interface TransactionsState {
  pagination: Pagination
}

const initialState: TransactionsState = {
  pagination: { itemsPerPage: 25, itemOffset: 0, totalItems: 0, selectedPage: 0 },
}

const transactions = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactionsPaginationItemsPerPage(state, { payload }: PayloadAction<number>) {
      state.pagination.itemsPerPage = payload
    },
    setTransactionsPaginationItemOffset(state, { payload }: PayloadAction<number>) {
      state.pagination.itemOffset = payload
    },
    setTransactionsPaginationTotalItems(state, { payload }: PayloadAction<number>) {
      state.pagination.totalItems = payload
    },
    setTransactionsPaginationSelectedPage(state, { payload }: PayloadAction<number>) {
      state.pagination.selectedPage = payload
    },
  },
})

const selectTransactionsPagination = (state: RootState) => state.transactions.pagination
export { selectTransactionsPagination }

export const {
  setTransactionsPaginationItemsPerPage,
  setTransactionsPaginationItemOffset,
  setTransactionsPaginationTotalItems,
  setTransactionsPaginationSelectedPage,
} = transactions.actions
export default transactions.reducer
