import classNames from "classnames/bind";
import styles from './ProductSlider.module.scss'
import { Slider, Menu } from './components'

const cx = classNames.bind(styles) 

function ProductSlider() {
  return ( 
    <div className={cx('wrapper')}>
      <Menu />
      <Slider />
    </div>
  );
}

export default ProductSlider;