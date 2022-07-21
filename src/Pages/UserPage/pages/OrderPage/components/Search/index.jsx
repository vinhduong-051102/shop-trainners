import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <input placeholder="Nhập tên sản phẩm" value={searchValue} onChange={handleInputSearch} />
      <button
        className={cx("icon")}
        style={searchValue.length === 0 ? { color: "#bbb" } : {}}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
