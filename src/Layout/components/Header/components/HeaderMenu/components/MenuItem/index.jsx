import className from 'classnames/bind'
import styles from './MenuItem.module.scss'
import { Link } from "react-router-dom" 

const cx = className.bind(styles)

function MenuItem({ children, path='', onClick= () => {} }) {
  return ( 
    <div onClick={onClick} className={cx('menu-item')} >
      <Link className={cx('link')} to={path}>{ children }</Link>
    </div>
  );
}

export default MenuItem;