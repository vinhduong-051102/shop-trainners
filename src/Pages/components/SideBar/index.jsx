import classNames from "classnames/bind";
import styles from './SideBar.module.scss';
import { SideBarItem } from "./components";

const cx = classNames.bind(styles)

function SideBar({ sidebarItems }) {
  return ( 
    <div className={cx('wrapper')}>
      { sidebarItems.map((item, index) => {
        return(
          <SideBarItem key={index} title={item.title} content={item.content} />
        )
      }) }
    </div>
  );
}

export default SideBar;