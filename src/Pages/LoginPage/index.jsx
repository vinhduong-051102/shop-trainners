import { selectLoginInfo } from "@/Pages/RegisterPage/registerPageSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components";
import { login } from "./loginPageSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginInfo = useSelector(selectLoginInfo);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputUserInfo = (e) => {
    setUserInfo((prev) => {
      return { ...prev, [e.target.getAttribute("name")]: e.target.value };
    });
  };
  const handleSubmit = () => {
    const { email, password } = userInfo;
    const isTrueInfo = loginInfo.some((item) => {
      return item.email === email && item.password === password;
    });
    if (isTrueInfo) {
      dispatch(login({ email, password }));
      navigate("/", { replace: true });
    } else {
      alert("false");
    }
  };
  const inputFields = [
    {
      label: "Địa chỉ email",
      placeholder: "Nhập địa chỉ email",
      value: userInfo.email,
      onChange: handleInputUserInfo,
      name: "email",
      type: "email",
    },
    {
      label: "Mật khẩu",
      placeholder: "Nhập mật khẩu",
      value: userInfo.password,
      onChange: handleInputUserInfo,
      name: "password",
      type: "password",
    },
  ];
  return <Modal title="Đăng nhập" inputFields={inputFields} onSubmit={handleSubmit} />;
}

export default LoginPage;
