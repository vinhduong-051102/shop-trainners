import className from 'classnames/bind'
import { Header, Footer } from "../components"
import styles from './MainLayout.module.scss'
import { useEffect } from 'react'

const cx = className.bind(styles)

function Layout({ children }) {
  useEffect(() => {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
  });
  return ( 
    <div className={cx('wrapper')}>
      <Header />
        <div className={cx('space')}></div>
        {children}
      <Footer />
    </div> 
  );
}

export default Layout;