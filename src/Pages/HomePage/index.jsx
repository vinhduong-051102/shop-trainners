import classNames from "classnames/bind";
import styles from './Home.module.scss';
import { Slider, ProductDisplay } from "./components";

const cx = classNames.bind(styles)

function HomePage() {
  return ( 
    <div className={cx('wrapper')}>
      <Slider />
      <ProductDisplay />
    </div>
  );
}

export default HomePage;