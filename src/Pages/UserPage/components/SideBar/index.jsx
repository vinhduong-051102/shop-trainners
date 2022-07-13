import classNames from "classnames/bind"; 
import { Avatar, SubMenu } from "./components";
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles)  

function SideBar() {
  return ( 
    <div className={cx('wrapper')}>
      <Avatar />
      <SubMenu />
    </div>
  );
}

export default SideBar;