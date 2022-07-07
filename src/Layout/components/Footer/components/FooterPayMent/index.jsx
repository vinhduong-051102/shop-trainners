import classNames from "classnames/bind";
import styles from './FooterPayMent.module.scss';
import { Input, Button } from "@/components";
import * as bankLogo from '@/assets/images/Bank'

const cx = classNames.bind(styles)

function FooterPayMent() {
  return ( 
    <div className={cx('wrapper')}>
      <p className={cx('title')}>
        ĐĂNG KÝ NHẬN THÔNG TIN
      </p>
      <div className={cx('email')}>
        <Input placeholder="Email" type="email"/>
        <Button>Xác nhận</Button>
      </div>
      <div className={cx('bank')}>
        <img src={bankLogo.acb} alt="acb logo" />
        <img src={bankLogo.techcombank} alt="techcombank logo" />
        <img src={bankLogo.vcb} alt="vcb logo" />
        <img src={bankLogo.paypal} alt="paypal logo" />
        <img src={bankLogo.mastercard} alt="mastercard logo" />

      </div>
    </div>
  );
}

export default FooterPayMent;