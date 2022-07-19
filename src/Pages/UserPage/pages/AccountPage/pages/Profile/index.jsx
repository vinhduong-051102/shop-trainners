import { MainLayout } from "@/Pages/UserPage/pages/layout";
import classNames from "classnames/bind";
import { useState } from "react";
import { Button, Header, Input, Text } from "../components";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

function Profile() {
  const [genderValue, setGenderValue] = useState(0);
  const [name, setName] = useState("");
  const [birdDate, setBirdDate] = useState("");
  const [phoneNumber, setphoneNumber] = useState("")
  const handleSelectGender = (index) => {
    setGenderValue(index);
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleChangeBirdDate = (e) => {
    setBirdDate(e.target.value);
  };
  const handleInputPhoneNumber = (e) => {
    setphoneNumber(e.target.value);
  }
  return (
    <MainLayout>
      <Header title="Hồ Sơ Của Tôi" description="Quản lý thông tin hồ sơ để bảo mật tài khoản" />
      <div className={cx("container")}>
        <Text label="Tên Đăng Nhập">hello</Text>
        <Input label="Tên" value={name} onChange={handleInputName} />
        <Input label="Số điện thoại" value={phoneNumber} onChange={handleInputPhoneNumber} />
        <Text label="email">nguyenhanhhp1974@gmail.com</Text>
        <Input
          label="Giới tính"
          type="radio"
          values={["Nam", "Nữ", "Khác"]}
          defaultValue={0}
          value={genderValue}
          onChange={handleSelectGender}
        />
        <Input label="Ngày sinh" type="date" value={birdDate} onChange={handleChangeBirdDate} />
        <Button style={{ marginLeft: "25%" }}>Lưu</Button>
      </div>
    </MainLayout>
  );
}

export default Profile;
