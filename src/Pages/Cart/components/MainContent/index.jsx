import classNames from "classnames/bind";
import styles from "./MainContent.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "@/Pages/components/Product/productSlice";
import { increaseAmount, decreaseAmount } from "@/Pages/components/Product/productSlice";
import { addProduct } from "../../cartSlice";

const cx = classNames.bind(styles);

function MainContent() {
  const dispatch = useDispatch();
  const productInfo = useSelector(selectProduct);
  const { url, name, price, amount } = productInfo;
  const handleAddProduct = () => {
    dispatch(addProduct({
      url,
      name,
      price,
      amount
    }))
  };
  const handleDecreaseAmount = () => {
    dispatch(decreaseAmount())
  };
  const handleIncreaseAmount = () => {
    dispatch(increaseAmount())
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img-product")}>
        <img src={url} alt="" />
      </div>
      <div className={cx("info-product")}>
        <h2 className={cx("name-product")}>{name}</h2>
        <p className={cx("price-product")}>{price && price.toLocaleString()}đ</p>
        <div className={cx("button-ground")}>
          <div className={cx("amount-product")}>
            <button onClick={handleDecreaseAmount}>-</button>
            <p>{amount}</p>
            <button onClick={handleIncreaseAmount}>+</button>
          </div>
          <button onClick={handleAddProduct} className={cx("add-product")}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
