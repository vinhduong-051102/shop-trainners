import classNames from "classnames/bind";
import styles from './ProductDisplayItem.module.scss'

const cx = classNames.bind(styles) 
function ProductDisplayItem({ titleURL, productURL }) {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <img src={titleURL} alt="" />
      </div>
      <div className={cx('product-img')}>
        <img src={productURL} alt="" />
      </div>
      <button>Xem sản phẩm</button>
    </div>
  );
}

export default ProductDisplayItem;