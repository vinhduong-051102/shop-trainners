import classNames from "classnames/bind";
import { MainLayout } from "../../../layout";
import { Button, Header, Input } from "../components";
import styles from "./ChangePassword.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleInputRePassword = (e) => {
    setRePassword(e.target.value);
  };
  const handleInputNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={cx("wrapper")}>
      <MainLayout>
        <Header
          title="Đổi Mật Khẩu"
          description="Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác"
        />
        <Input
          label="Mật Khẩu Hiện Tại"
          type="password"
          value={password}
          onChange={handleInputPassword}
        />
        <Input
          label="Mật Khẩu Mới"
          type="password"
          value={newPassword}
          onChange={handleInputNewPassword}
        />
        <Input
          label="Xác Nhận Mật Khẩu"
          type="password"
          value={rePassword}
          onChange={handleInputRePassword}
        />
        <Button style={{ marginLeft: "25%" }}>Xác nhận</Button>
      </MainLayout>
    </div>
  );
}

export default ChangePassword;
