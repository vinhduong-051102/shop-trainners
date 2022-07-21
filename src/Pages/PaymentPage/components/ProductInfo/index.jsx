import classNames from "classnames/bind";
import styles from "./ProductInfo.module.scss";

const cx = classNames.bind(styles);

function ProductInfo() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Đơn hàng của bạn</div>
      <div className={cx("container")}>
        <div className={cx("header row")}>
          <p className={cx("product-title")}>SẢN PHẨM</p>
          <p className={cx("total-title")}>TỔNG</p>
        </div>
        <div className={cx("info")}>
          <div className={cx("name row")}>
            <span>Chuck Taylor Classic</span> x <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
