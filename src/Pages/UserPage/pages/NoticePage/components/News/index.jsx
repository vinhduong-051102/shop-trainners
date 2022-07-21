import classNames from "classnames/bind";
import styles from "./News.module.scss";

const cx = classNames.bind(styles);

function News({ path, mess, title, hour, day }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img")}>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className={cx("container")}>
        <div className={cx("title")}>Bạn đã đặt đơn hàng thành công</div>
        <div className={cx("mess")}>lorem</div>
        <div className={cx("time")}>
          <span className={cx("hour")}>11:30</span>
          <span className={cx("day")}>21-01-2002</span>
        </div>
      </div>
    </div>
  );
}

export default News;
