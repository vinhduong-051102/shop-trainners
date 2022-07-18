import classNames from "classnames/bind"; 
import styles from './AccountPage.module.scss'
import { Routes, Route } from "react-router-dom";
import { accountRoutes } from "./routes";

const cx = classNames.bind(styles)  

function AccountPage() {
  return ( 
    <div className={cx('wrapper')}>
      <Routes>
        {accountRoutes.map((route, index) => {
          const { path, element } = route
          return <Route path={path} element={element} key={index} />
        })}
      </Routes>
    </div>
  );
}

export default AccountPage;