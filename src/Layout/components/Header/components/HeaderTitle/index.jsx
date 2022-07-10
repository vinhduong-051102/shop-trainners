import { Popper } from "@/components";
import { selectListProduct } from "@/Pages/Cart/cartSlice";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import className from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./assets/logo-mona.png";
import styles from "./HeaderTitle.module.scss";

const cx = className.bind(styles);

function HeaderTitle() {
  const dispatch = useDispatch();
  const listProduct = useSelector(selectListProduct);
  console.log("🚀 ~ file: index.jsx ~ line 18 ~ HeaderTitle ~ listProduct", listProduct)
  const beforeUrl = window.location.pathname;
  useEffect(() => {
    localStorage.setItem("beforeUrl", String(beforeUrl));
  }, [beforeUrl]);
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
        <button>
          <Link to="/register" className={cx("link")}>
            Đăng ký
          </Link>
        </button>
        <span></span>
        <button>
          <Link to="/login" className={cx("link")}>
            Đăng nhập
          </Link>
        </button>
      </div>
      <div className={cx("cart")}>
        <Tippy
          render={(attrs) => (
            <Popper>
              {listProduct.length !== 0
                ? listProduct.map((item, index) => {
                    return (
                      <div className={cx("container")}>
                        <div className={cx("img-product")}>
                          <img src={item.url} alt="" />
                        </div>
                        <div className={cx("product-info")}>
                          <p className={cx("product-name")}>
                            {item.name}
                          </p>
                          <p className={cx("product-amount")}>
                            Số lượng: {item.amount}
                          </p>
                          <p className={cx("product-price")}>
                            Đơn giá: {(item.price).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : <p>Không có sản phẩm</p>}
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
