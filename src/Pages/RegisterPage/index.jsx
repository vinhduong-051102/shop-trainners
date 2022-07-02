import { Modal } from "../components";
import { useState } from 'react'


function RegisterPage() {
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    repassword: '',
  })
  const handleInputRegister = (e) => {
    setRegisterInfo(prev => {
      return {...prev, [e.target.getAttribute('name')]: e.target.value}
    })
  }
  const inputFields = [
    {
      label: "Địa chỉ email",
      placeholder: "Nhập địa chỉ email",
      value: registerInfo.email,
      name: "email",
      type: "email",
      onChange: handleInputRegister
    },
    {
      label: "Mật khẩu",
      placeholder: "Nhập mật khẩu",
      value: registerInfo.password,
      name: "password",
      type: "password",
      onChange: handleInputRegister
    },
    {
      label: "Nhập lại mật khẩu",
      placeholder: "Nhập password",
      value: registerInfo.repassword,
      name: "repassword",
      type: "password",
      onChange: handleInputRegister
    },
  ]
  
  return (
    <Modal title="Đăng ký" inputFields={inputFields}  />
  );
}

export default RegisterPage;