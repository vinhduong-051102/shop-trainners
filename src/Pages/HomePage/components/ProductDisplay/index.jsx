import classNames from "classnames/bind";
import styles from './ProductDisplay.module.scss'
import { ProductDisplayItem } from "./components";
import { laboren, antem, tempora } from "../../../../assets/images/Title";
import { laborenProduct, antemProduct, temporaProduct } from "../../../../assets/images/Shoes/DisplayShoes";

const cx = classNames.bind(styles)

function ProductDisplay() {
  return ( 
    <div className={cx('wrapper')}>
      <ProductDisplayItem titleURL={laboren} productURL={laborenProduct} />
      <ProductDisplayItem titleURL={antem} productURL={antemProduct} />
      <ProductDisplayItem titleURL={tempora} productURL={temporaProduct} />
    </div>
  );
}

export default ProductDisplay;