import { FC } from "react"
import ReactPaginate from "react-paginate"
import "./Pagination.css"

// state
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux"
import {
  selectTransactionsPagination,
  setTransactionsPaginationItemOffset,
  setTransactionsPaginationSelectedPage,
} from "@/state/transactions"

const Pagination: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const pagination = useAppSelector(selectTransactionsPagination)
  const itemsPerPage = pagination.itemsPerPage
  // const itemOffset = pagination.itemOffset
  const totalItems = pagination.totalItems
  const selectedPage = pagination.selectedPage

  // ...
  // const endOffset = itemOffset + itemsPerPage
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const pageCount = Math.ceil(totalItems / itemsPerPage)

  // ...
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % totalItems
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    dispatch(setTransactionsPaginationSelectedPage(Number(event.selected)))
    dispatch(setTransactionsPaginationItemOffset(newOffset))
  }

  return (
    <div className="pagination">
      <span>{totalItems.toString()} total txs, showing 25 items</span>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        // styles
        containerClassName="containerClassName"
        pageLinkClassName="pageLinkClassName"
        previousLinkClassName="previousLinkClassName"
        nextLinkClassName="nextLinkClassName"
        breakLinkClassName="breakLinkClassName"
        // ...
        activeLinkClassName="activeLinkClassName"
        // sync components
        forcePage={selectedPage}
      />
    </div>
  )
}

export default Pagination
