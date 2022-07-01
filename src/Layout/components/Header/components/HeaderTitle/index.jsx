import styles from "./HeaderTitle.module.scss"
import className from "classnames/bind";
import logo from "./assets/logo-mona.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless'
import Popper from '../../../Popper'
const cx = className.bind(styles)

function HeaderTitle() {
  return ( 
    <div className={cx("header-title")}>
        <div className={cx("logo")}>
          <img src={logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input placeholder="Nhập tên sản phẩm" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("login-resgister")}>
          <button>Đăng ký</button>
          <span></span>
          <button>Đăng nhập</button>
        </div>
        <div className={cx("cart")}>
        <Tippy
        render={(attrs) => (
          <Popper>
            chưa có sản phẩm nào
          </Popper>
        )}
        placement="bottom-start"
        interactive
      >
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        
      </Tippy>
        </div>
      </div>
  );
}

export default HeaderTitle;