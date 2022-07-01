import className from 'classnames/bind'
import styles from './SideBarLayout.module.scss'
import { Header, SideBar, Footer } from '../components'

const cx = className.bind(styles)

function SideBarLayout({ children }) {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('header')}><Header /></div>
      <div className={cx('sidebar')}><SideBar /></div>
      <div className={cx('content')}>
        { children }
      </div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default SideBarLayout;