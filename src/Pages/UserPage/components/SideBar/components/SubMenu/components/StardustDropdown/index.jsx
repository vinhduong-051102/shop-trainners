import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrUrl } from "@/Pages/pagesSlice";
import styles from "./StardustDropdown.module.scss";

const cx = classNames.bind(styles);

function StardustDropdown({ content = [], title = {}, active = false }) {
  const currUrl = useSelector(selectCurrUrl);
  const isOpenMenu = content.some((item) => item.path === currUrl);
  const isActiveTitle = title.path === currUrl
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <span>
          <FontAwesomeIcon icon={title.icon} />
        </span>
        <Link
          to={title.path || content[0].path}
          className={cx("title")}
          style={
            currUrl === title.path && (active || isActiveTitle)
              ? { color: "#ee4d2d", display: "inline" }
              : { display: "inline" }
          }
          state={{ url: title.path || content[0].path }}
        >
          {title.content}
        </Link>
      </div>
      <div className={active || isOpenMenu ? cx("children") : cx("deactive")}>
        {content.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.path}
              state={{ url: item.path }}
              style={
                currUrl === item.path
                  ? { color: "#ee4d2d", display: "inline" }
                  : { display: "inline" }
              }
            >
              {item.content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default StardustDropdown;
