import classNames from "classnames/bind";
import styles from "./SubMenu.module.scss";
import { StardustDropdown } from "./components";
import { faUserLarge, faBagShopping, faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function SubMenu() {
  const [active, setActive] = useState(-1);
  const data = [
    {
      title: {
        content: "Tài khoản của tôi",
        icon: faUserLarge,
      },
      contents: [
        { content: "Hồ sơ", path: "/user/account/profile" },
        { content: "Địa chỉ", path: "/user/account/address" },
        { content: "Đổi mật khẩu", path: "/user/account/change_password" },
      ],
    },
    {
      title: { content: "Đơn hàng", icon: faBagShopping, path: "/user/order" },
    },
    {
      title: { content: "Thông báo", icon: faBell, path: "/user/notice" },
    },
  ];
  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <div className={cx("wrapper")}>
      {data.map((item, index) => {
        const { title, contents } = item;
        return (
          <div key={index} onClick={() => handleActive(index)}>
            <StardustDropdown title={title} content={contents} active={active === index} />
          </div>
        );
      })}
    </div>
  );
}

export default SubMenu;
