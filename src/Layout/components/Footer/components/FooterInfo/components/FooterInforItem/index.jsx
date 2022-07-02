import classNames from "classnames/bind";
import styles from "./FooterInforItem.module.scss";

const cx = classNames.bind(styles);

function FooterInforItem({ title, content }) {
  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("title")} style={{ color: "white" }}>
        {title}
      </h5>
      <div className={cx("spacer")}></div>
      <div className={cx("content")}>
        <div style={{ ...content.styles }}>{content.content}</div>
      </div>
    </div>
  );
}

export default FooterInforItem;
