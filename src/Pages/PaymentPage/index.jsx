import classNames from "classnames/bind"; 
import styles from './PaymentPage.module.scss'
import { UserInfo, ProductInfo } from "./components";

const cx = classNames.bind(styles)  

function PaymentPage() {
  return ( 
    <div className={cx('wrapper')}>
      <ProductInfo/>
      <UserInfo/>
    </div>
  );
}

export default PaymentPage;