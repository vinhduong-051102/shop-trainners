import classNames from "classnames/bind"; 
import styles from './Banner.module.scss';
import { bannerRe } from "@/assets/images/Banner";

const cx = classNames.bind(styles)

function Banner() {
  return ( 
    <div className={cx('wrapper')}>
      <img src={bannerRe} alt=""/>
      <p>Giới thiệu</p>
    </div>
  );
}

export default Banner;