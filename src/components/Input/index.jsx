import classNames from "classnames/bind";
import styles from './Input.module.scss';

const cx = classNames.bind(styles)

function Input({ placeholder, value, onChange, type, name }) {
  return ( 
    <input placeholder={placeholder} value={value} onChange={onChange} type={type} name={name} />
  );
}

export default Input;