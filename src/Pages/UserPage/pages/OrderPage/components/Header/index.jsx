import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={cx("wrapper")}>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab label="Tất cả" />
        <Tab label="Chờ xác nhận" />
        <Tab label="Chờ lấy hàng" />
        <Tab label="Đang giao" />
        <Tab label="Đã giao" />
      </Tabs>
    </div>
  );
}

export default Header;
