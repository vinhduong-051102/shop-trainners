import styles from "./HeaderMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import className from "classnames/bind";
import Popper from "../../../Popper";
import { MenuItem } from './components'

const cx = className.bind(styles);

function HeaderMenu() {
  return (
    <div className={cx("headerMenu")}>
      <MenuItem>Trang chủ</MenuItem>
      <MenuItem>Giới thiệu</MenuItem>
      <Tippy
        render={(attrs) => (
          <Popper>
            <div className={cx("container")}>
              <h4>Classic</h4>
              <h4>Sunbaked</h4>
              <h4>Chuck 07s</h4>
              <h4>One star</h4>
              <h4>PSY-kicks</h4>
            </div>
          </Popper>
        )}
        placement="bottom-start"
        interactive
        
      >
        <div style={{height: "100%"}}>
          <MenuItem>
            Nam <FontAwesomeIcon icon={faAngleDown} />
          </MenuItem>
        </div>
      </Tippy>
      <Tippy
        render={(attrs) => (
          <Popper>
            <div className={cx("container")}>
              <h4>Classic</h4>
              <h4>Sunbaked</h4>
              <h4>Chuck 07s</h4>
              <h4>One star</h4>
              <h4>PSY-kicks</h4>
            </div>
          </Popper>
        )}
        placement="bottom-start"
        interactive
      >
        <div style={{height: "100%"}}>
          <MenuItem>
            Nữ <FontAwesomeIcon icon={faAngleDown} />
          </MenuItem>
        </div>
      </Tippy>

      <MenuItem>Trẻ em</MenuItem>
      <MenuItem>Phụ kiện khác</MenuItem>
      <MenuItem>Tin tức</MenuItem>
      <MenuItem>Liên hệ</MenuItem>
    </div>
  );
}

export default HeaderMenu;
