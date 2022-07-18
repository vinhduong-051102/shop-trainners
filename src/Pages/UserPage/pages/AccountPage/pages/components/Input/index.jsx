import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({ label = "", type = "text", onChange = () => {}, values, defaultValue, value }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("label")}>{label}</div>
      {type === "radio" || type === "checkbox" ? (
        <div className={cx("input-ground")}>
          {values.map((item, index) => {
            return (
              <div key={index} className={cx("item")} >
                <input value={index} type={type} onChange={() => onChange(index)} checked={index === value} />
                <div>{item}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <input onChange={onChange} type={type} value={value} />
      )}
    </div>
  );
}

export default Input;
