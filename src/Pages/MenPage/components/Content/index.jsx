import classNames from "classnames/bind";
import { Header, Pagination } from "./components";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content({ contentItems }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Pagination itemsPerPage={8} items={contentItems} />
    </div>
  );
}

export default Content;
