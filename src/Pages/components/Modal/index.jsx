import classNames from "classnames/bind";
import styles from './Modal.module.scss';
import { Input } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function Modal({ title, inputFields=[], onClickSubmit = () => {} }) {
  return ( 
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <h3>{title}</h3>
        <button><FontAwesomeIcon icon={faXmark} /></button>
      </div>
      <div className={cx('body')}> 
        { inputFields.map((item, index) => {
          const { label, value, onChange, name, placeholder } = item
          return <Input label={label} value={value} onChange={onChange} key={index} name={name} placeholder={placeholder} />
        })}
      </div>
      <div className={cx('footer')}>
        <button onClick={onClickSubmit}>Xác nhận</button>
      </div>
    </div>
  );
}

export default Modal;