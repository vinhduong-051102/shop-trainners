import classNames from "classnames/bind"; 
import styles from './ViewCartPage.module.scss';
import { ProductPlace } from "./components";

const cx = classNames.bind(styles)

function ViewCartPage() {
  return ( 
    <div className={cx('wrapper')}>
      <ProductPlace />
    </div>
  );
}

export default ViewCartPage;