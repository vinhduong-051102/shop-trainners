import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./PaginationContent.module.scss";
import Pagination from "@mui/material/Pagination";
import { useDispatch } from "react-redux";
import { changePage } from "@/Pages/MenPage/MenPageSlice";

const cx = classNames.bind(styles);

function PaginationContent({ itemsPerPage, items, children }) {
  const dispatch = useDispatch()
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(children.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(children.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event, page) => {
    dispatch(changePage(page))
    const newOffset = ((page - 1) * itemsPerPage) % children.length;
    setItemOffset(newOffset);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {currentItems.map((product, index) => {
          return (
            <div className={cx("product")} key={index}>
              {product}
            </div>
          );
        })}
      </div>
      <Pagination
        count={pageCount}
        color="primary"
        onChange={handlePageClick}
        className={cx("pagination")}
      />
    </div>
  );
}

export default PaginationContent;
