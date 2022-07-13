import { login } from "@/Pages/LoginPage/loginPageSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components";
import { register, selectLoginInfo } from "./registerPageSlice";

function RegisterPage() {
  const loginInfo = useSelector(selectLoginInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const handleInputRegister = (e) => {
    setRegisterInfo((prev) => {
      return { ...prev, [e.target.getAttribute("name")]: e.target.value };
    });
  };
  const handleSubmit = () => {
    const { password, repassword, email } = registerInfo;
    if (password === repassword) {
      const isRepeat = loginInfo.some((item) => {
        return item.email === email;
      });
      if (isRepeat) {
        alert("Email đã tồn tại");
      } else {
        dispatch(
          register({
            email,
            password,
          })
        );
        dispatch(login({ email, password }));
        navigate("/", { replace: true });
      }
    } else {
      alert("false");
    }
  };
  const inputFields = [
    {
      label: "Địa chỉ email",
      placeholder: "Nhập địa chỉ email",
      value: registerInfo.email,
      name: "email",
      type: "email",
      onChange: handleInputRegister,
    },
    {
      label: "Mật khẩu",
      placeholder: "Nhập mật khẩu",
      value: registerInfo.password,
      name: "password",
      type: "password",
      onChange: handleInputRegister,
    },
    {
      label: "Nhập lại mật khẩu",
      placeholder: "Nhập password",
      value: registerInfo.repassword,
      name: "repassword",
      type: "password",
      onChange: handleInputRegister,
    },
  ];

  return <Modal title="Đăng ký" inputFields={inputFields} onSubmit={handleSubmit} />;
}

export default RegisterPage;
