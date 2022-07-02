import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ children, onClick }) {
  return <div className={cx('wrapper')}><button onClick={onClick}>{children}</button></div>;
}

export default Button;
