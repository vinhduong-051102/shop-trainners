import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { Input } from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectBeforeUrl } from "@/Pages/pagesSlice";

const cx = classNames.bind(styles);

function Modal({ title, inputFields = [], onSubmit = () => {} }) {
  const beforeUrl = useSelector(selectBeforeUrl)
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3>{title}</h3>
        <button>
          <Link to={beforeUrl} className={cx("link")}><FontAwesomeIcon icon={faXmark} /></Link>
        </button>
      </div>
      <div className={cx("body")}>
        {inputFields.map((item, index) => {
          const { label, value, onChange, name, placeholder, type } = item;
          return (
            <Input
              label={label}
              value={value}
              onChange={onChange}
              key={index}
              name={name}
              placeholder={placeholder}
              type={type}
            />
          );
        })}
      </div>
      <div className={cx("footer")}>
        <button onClick={onSubmit}>Xác nhận</button>
      </div>
    </div>
  );
}

export default Modal;
