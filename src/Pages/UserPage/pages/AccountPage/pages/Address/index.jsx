import { MainLayout } from "@/Pages/UserPage/pages/layout";
import classNames from "classnames/bind";
import { useState } from "react";
import { Header } from "../components";
import styles from "./Address.module.scss";
import { Modal, UserInfo } from "./components";


const cx = classNames.bind(styles);

function Address() {

  const [defaultAddress, setDefaultAddress] = useState(0);
  const [isOpenModal , setsIsOpenModal ] = useState(false)
  const handleSetDefault = (index) => {
    setDefaultAddress(index);
  };
  const handleOpenModal = () => {
    setsIsOpenModal(true)
  };
  const handleCloseModal = () => {
    setsIsOpenModal(false)

  }
  const data = [
    {
      fullName: "Dương Quý Vinh",
      email: "nguyenhanhhp1974@gmail.com",
      address:
        "95/24 Đông Trung Hành ,Trung Hành 8, Phường Đằng Lâm Phường Đằng Lâm, Quận Hải An, Hải Phòng 1",
      phoneNumber: "0338861820",
    },
    {
      fullName: "Dương Quý Vinh",
      email: "nguyenhanhhp1974@gmail.com",
      address:
        "95/24 Đông Trung Hành ,Trung Hành 8, Phường Đằng Lâm Phường Đằng Lâm, Quận Hải An, Hải Phòng 2",
      phoneNumber: "0338861820",
    },
  ];
  return (
    <MainLayout>
      <Header
        title="Địa Chỉ Của Tôi"
        btnTitle="Thêm địa chỉ mới"
        onClick={handleOpenModal}
      />

      <div className={cx("wrapper")}>
        <Modal open={isOpenModal} onClose={handleCloseModal} />
        {data.map((userInfo, index) => {
          const { fullName, email, address, phoneNumber } = userInfo;
          const isDefault = index === defaultAddress;
          return (
            <div className={cx("container")} key={index}>
              <div className={cx("info")}>
                <UserInfo
                  fullName={fullName}
                  email={email}
                  address={address}
                  phoneNumber={phoneNumber}
                />
              </div>
              <div className={cx("setting")}>
                <div className={cx("action")}>
                  <button className={cx("fix")}>Sửa</button>
                  <button className={cx("delete")}>Xoá</button>
                </div>
                <button
                  className={cx("default")}
                  onClick={() => handleSetDefault(index)}
                  style={isDefault ? { cursor: "default" } : {}}
                >
                  {isDefault ? "Mặc định" : "Thiết lập mặc định"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Address;
