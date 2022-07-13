import classNames from "classnames/bind"; 
import styles from './OrderPage.module.scss'

const cx = classNames.bind(styles)  

function OrderPage() {
  return ( 
    <div className={cx('wrapper')}>
      content
    </div>
  );
}

export default OrderPage;