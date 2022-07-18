import classNames from "classnames/bind";
import styles from './NoticePage.module.scss'

const cx =classNames.bind(styles) 

function NoticePage() {
  return ( 
    <div className={cx('wrapper')}>
      notice
    </div>
  );
}

export default NoticePage;