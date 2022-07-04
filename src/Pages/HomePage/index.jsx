import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { Slider, ProductDisplay, ProductSlider, ProductSales, Other } from "./components";

const cx = classNames.bind(styles)

function HomePage() {
  return ( 
    <div className={cx('wrapper')}>
      <Slider />
      <ProductDisplay />
      <ProductSlider />
      <ProductSales />
      <Other />
    </div>
  );
}

export default HomePage;