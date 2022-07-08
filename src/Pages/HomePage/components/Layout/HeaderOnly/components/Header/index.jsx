import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header({ title }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Header;
