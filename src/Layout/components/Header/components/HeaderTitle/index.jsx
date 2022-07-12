import { Popper } from "@/components";
import { removeProduct, selectListProduct } from "@/Pages/Cart/cartSlice";
import { faCartShopping, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import className from "classnames/bind";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./assets/logo-mona.png";
import styles from "./HeaderTitle.module.scss";
import { Button } from "@mui/material";

const cx = className.bind(styles);

function HeaderTitle() {
  const dispatch = useDispatch();
  const listProduct = useSelector(selectListProduct);
  const beforeUrl = window.location.pathname;
  useEffect(() => {
    localStorage.setItem("beforeUrl", String(beforeUrl));
  }, [beforeUrl]);
  const handleRemoveProduct = (index) => {
    dispatch(removeProduct(index));
  };
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
          delay={[0, 400]}
          render={(attrs) => (
            <Popper>
              {listProduct.length !== 0 ? (
                <div className={cx("container")}>
                  {listProduct.map((item, index) => {
                    return (
                      <div className={cx("item")} key={index}>
                        <div className={cx("img-product")}>
                          <img src={item.url} alt="" />
                        </div>
                        <div className={cx("product-info")}>
                          <p className={cx("product-name")}>{item.name}</p>
                          <p className={cx("product-amount")}>Số lượng: {item.amount}</p>
                          <p className={cx("product-price")}>
                            Đơn giá: {item.price.toLocaleString()}
                          </p>
                        </div>
                        <button onClick={() => handleRemoveProduct(index)}>
                          <FontAwesomeIcon icon={faXmark} className={cx("remove-button")} />
                        </button>
                      </div>
                    );
                  })}
                  <div className={cx("button-ground")}>
                    <Link to="/view_cart">
                      <Button variant="contained" className={cx("button")}>
                        Xem giỏ hàng
                      </Button>
                    </Link>
                    <Link to="/payment">
                      <Button variant="contained" className={cx("button")}>
                        Thanh toán
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p>Không có sản phẩm</p>
              )}
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
