import classNames from "classnames/bind";
import styles from "./UserReview.module.scss";
import { Avatar, Rating } from "@mui/material";

const cx = classNames.bind(styles);

function UserReview({ rating, userName, avatarUrl, feelback }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("user")}>
        <div className={cx("avatar")}>
          <Avatar>V</Avatar>
        </div>
        <div className={cx("container")}>
          <div className={cx("user-name")}>admin</div>
          <div className={cx("user-rating")}>
            <Rating value={rating} className={cx("rating")} readOnly />
          </div>
        </div>
      </div>
      <div className={cx('feelback')}>
        {feelback}
      </div>
    </div>
  );
}

export default UserReview;
