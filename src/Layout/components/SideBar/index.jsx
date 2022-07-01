import classNames from "classnames/bind";
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles)

function SideBar({ children }) {
  return ( 
    <div className={cx('wrapper')}>
      { children }
    </div>
  );
}

export default SideBar;