import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header({ title, description, btnTitle }) {
  return (
    <div className={cx("wrapper")}>
      <div>
        <div className={cx("title")}>{title}</div>
        <div className={cx("description")}>{description}</div>
      </div>
      {btnTitle && (
        <button>
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>{btnTitle}</span>
        </button>
      )}
    </div>
  );
}

export default Header;
