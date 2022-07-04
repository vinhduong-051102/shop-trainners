import classNames from "classnames/bind";
import styles from "./Feature.module.scss";
import { FeatureItem } from "./components";

const cx = classNames.bind(styles);

function Feature() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('container')}>
        <FeatureItem
          title="Miễn phí giao hàng"
          content="Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh"
        />
      </div>
      <div className={cx('container')}>
        <FeatureItem
          title="Đổi trả trong vòng 7 ngày"
          content="Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh"
        />
      </div>
      <div className={cx('container')}>
        <FeatureItem
          title="Sản phẩm mới 100%"
          content="Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh"
        />
      </div>
      <div className={cx('container')}>
        <FeatureItem
          title="Chăm sóc khách hàng"
          content="Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh"
        />
      </div>
      <div className={cx('container')}>
        <FeatureItem
          title="Hàng chính hãng"
          content="Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh"
        />
      </div>
      <div className={cx('container')}>
        <FeatureItem
          title="Thanh toán đa dạng"
          content="Tại đây, mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng chứng mang dấu ấn lịch sử Converse 100 năm, và đang không ngừng phát triển lớn mạnh"
        />
      </div>
    </div>
  );
}

export default Feature;
