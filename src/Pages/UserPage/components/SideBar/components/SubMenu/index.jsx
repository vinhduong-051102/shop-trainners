import classNames from "classnames/bind"; 
import styles from './SubMenu.module.scss'

const cx = classNames.bind(styles)  

function SubMenu() {
  return ( 
    <div className={cx('wrapper')}></div>
  );
}

export default SubMenu;