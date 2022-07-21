import classNames from "classnames/bind"; 
import styles from './OrderPage.module.scss'
import { Header, Search, Product } from "./components";
import { MainLayout } from "../layout";

const cx = classNames.bind(styles)  

function OrderPage() {
  return ( 
    <MainLayout>
      <div className={cx('wrapper')}>
        <Header />
        <Search />
        <Product />
        <Product />


      </div>
    </MainLayout>
  );
}

export default OrderPage;