import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Sort } from "./components";
import { selectPage } from "@/Pages/MenPage/MenPageSlice";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function Header() {
  const currPage = useSelector(selectPage)
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <p>Hiện thị kết quả trang số: {currPage}</p>
        <Sort />
      </div>
    </div>
  );
}

export default Header;
