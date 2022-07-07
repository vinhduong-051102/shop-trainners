import styles from "./HeaderTitle.module.scss"
import className from "classnames/bind";
import logo from "./assets/logo-mona.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { Popper } from '@/components'
const cx = className.bind(styles)

function HeaderTitle() {
  const beforeUrl = window.location.pathname
  useEffect(() => {
    localStorage.setItem('beforeUrl', String(beforeUrl))
    console.log(beforeUrl);
  }, [beforeUrl])
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
          <button><Link to='/register' className={cx("link")}>Đăng ký</Link></button>
          <span></span>
          <button><Link to='/login' className={cx("link")}>Đăng nhập</Link></button>
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
          <div>
            <button>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        
      </Tippy>
        </div>
      </div>
  );
}

export default HeaderTitle;