import className from "classnames/bind";
import styles from "./Header.module.scss";

import { HeaderMenu, HeaderTitle } from "./components";
const cx = className.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <HeaderTitle />
      <HeaderMenu />
    </div>
  );
}

export default Header;
