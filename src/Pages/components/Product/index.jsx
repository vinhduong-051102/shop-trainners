import classNames from "classnames/bind";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);

function Product({ url, name, price, discount = null }) {
  return (
    <div className={cx("wrapper")}>
      <img src={url} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>{name}</p>
        <p className={cx("price")}>{`${Number(price).toLocaleString()} đ`}</p>
      </div>
      <button>Thêm vào giỏ hàng</button>
      {discount && <div className={cx("discount")}>{`${discount}%`}</div>}
    </div>
  );
}

export default Product;
