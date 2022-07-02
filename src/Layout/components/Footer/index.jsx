import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import { FooterInfo, FooterPayMent } from "./components";

const cx = classNames.bind(styles)

function Footer() {
  return ( 
    <div className={cx('wrapper')}>
      <FooterInfo />
      <FooterPayMent />
    </div>
  );
}

export default Footer;