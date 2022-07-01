import className from 'classnames/bind'
import { Header, Footer } from "../components"
import styles from './MainLayout.module.scss'

const cx = className.bind(styles)

function Layout({ children }) {
  return ( 
    <div className={cx('wrapper')}>
      <Header />
        {children}
      <Footer />
    </div> 
  );
}

export default Layout;