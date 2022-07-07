import classNames from "classnames/bind";
import styles from "./SideBarItem.module.scss";

const cx = classNames.bind(styles);

function SideBarItem({ title, content }) {
  return (
    <div className={cx("wrapper")}>
      <h3>{title}</h3>
      <div className={cx("container")}>
        {content.map((item, index) => {
          return (
            <div className={cx("item")} key={index}>
              <div className={cx("img")}>
                <img src={item.url} alt="" />
              </div>
              <div className={cx("item-content")}>
                <div className={cx("item-title")}>{item.title}</div>
                {item.price && (
                  <div className={cx("item-price")}>
                    {`${Number(item.price).toLocaleString()} đ`}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBarItem;
