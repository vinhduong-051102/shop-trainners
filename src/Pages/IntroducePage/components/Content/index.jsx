import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import { contentImg } from "./assets";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("img")}>
        <img src={contentImg} alt="" />
      </div>
      <div className={cx("content")}>
        <div className={cx("introduce")}>
          <h2 className={cx("title")}>GIỚI THIỆU</h2>
          <p className={cx("text")}>
            Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và hình
            ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng
            phát triển lớn mạnh.
          </p>
        </div>
        <div className={cx("container")}>
          <h2 className={cx("title")}>SẢN PHẨM GIÀY TỐT NHẤT</h2>
          <div className={cx("box-text")}>
            <p className={cx("text")}>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và
              hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
              ngừng phát triển lớn mạnh.
            </p>
            <span className={cx("divider")}></span>
            <p className={cx("text")}>
              Chào mừng bạn đến với ngôi nhà Converse! Tại đây, mỗi một dòng chữ, mỗi chi tiết và
              hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không
              ngừng phát triển lớn mạnh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
