import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "./productSlice";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Product({ url, name, price, discount = null }) {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    const productPrice = discount === null ? price : Math.floor(price * Number(discount / 100))
    dispatch(
      addProduct({
        url,
        name,
        price: productPrice,
        amount: 1
      })
    );
  };
  return (
    <div className={cx("wrapper")}>
      <img src={url} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>{name}</p>
        <p className={cx("price")}>{`${Number(price).toLocaleString()} đ`}</p>
      </div>
      <button onClick={handleAddProduct}><Link to='/cart' className={cx("link")}>Thêm vào giỏ hàng</Link></button>
      {discount && <div className={cx("discount")}>{`${discount}%`}</div>}
    </div>
  );
}

export default Product;
