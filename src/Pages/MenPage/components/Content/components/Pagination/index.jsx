import classNames from "classnames/bind";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import styles from "./Pagination.module.scss";
import { PageContent } from "./components";

const cx = classNames.bind(styles);


function Pagination({ itemsPerPage, items }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
  console.log("🚀 ~ file: index.jsx ~ line 22 ~ handlePageClick ~ event", event)
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={cx("wrapper")}>
      <PageContent currContent={currentItems} />
      <div className={cx("container")}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="previous"
          renderOnZeroPageCount={null}
          disabledClassName
        />
      </div>
    </div>
  );
}

export default Pagination;
