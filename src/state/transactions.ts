import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/state/_store"

interface Pagination {
  itemsPerPage: number
  itemOffset: number
  totalItems: number
  selectedPage: number
}

interface Transaction {
  index: number
  amount: string
  kind: string
  timestamp: string
  from_owner: string
  to_owner: string
}

interface TransactionsState {
  pagination: Pagination
  data: Transaction[]
}

const initialState: TransactionsState = {
  pagination: { itemsPerPage: 25, itemOffset: 0, totalItems: 0, selectedPage: 0 },
  data: [],
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

    // ...
    setTransactionsData(state, { payload }: PayloadAction<Transaction[]>) {
      state.data = payload
    },
  },
})

export const selectTransactionsPagination = (state: RootState) => state.transactions.pagination
export const selectTransactionsData = (state: RootState) => state.transactions.data

export const {
  setTransactionsPaginationItemsPerPage,
  setTransactionsPaginationItemOffset,
  setTransactionsPaginationTotalItems,
  setTransactionsPaginationSelectedPage,

  // ...
  setTransactionsData,
} = transactions.actions
export default transactions.reducer
