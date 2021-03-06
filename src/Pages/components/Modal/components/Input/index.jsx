import classNames from "classnames/bind";
import styles from './Input.module.scss'

const cx = classNames.bind(styles)

function Input({ label, placeholder = '', value = '', onChange= () => {}, name='', type="text" }) {
  return ( 
    <div className={cx('wrapper')}>
      <h4>{label}</h4>
      <input placeholder={placeholder} value={value} onChange={onChange} name={name} type={type} />
    </div>
  );
}

export default Input;
