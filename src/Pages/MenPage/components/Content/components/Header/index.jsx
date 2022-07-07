import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Sort } from "./components";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Sort />
      </div>
    </div>
  );
}

export default Header;
