import classNames from "classnames/bind";
import styles from "./UserPage.module.scss";
import { SideBar } from "./components";
import { Route, Routes } from "react-router-dom";
import userRoutes from "./routes";


const cx = classNames.bind(styles);

function UserPage() {

  return (
    <div className={cx("wrapper")} >
      <SideBar />
      <Routes>
        {userRoutes.map((route, index) => {
          const { path, element } = route;
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </div>
  );
}

export default UserPage;
